import insightSortService from './insightSortService'

const sortHealthDescending = insightSortService('calories')
export const healthInsights = (comparators, days, journeysPerDay = 2) => ({
  values: comparators.sort(sortHealthDescending).map((comparator, i, array) => ({
    mode: comparator.mode,
    percentage: !array[0].calories ? 0 : Math.floor((comparator.calories * 100) / array[0].calories)
  })),
  text: comparators
    .sort(sortHealthDescending)
    .map((comparator, i, array) =>
      array.filter(x => x.mode !== comparator.mode).map(comparatorInsight => {
        const deltaInCals =
          (comparatorInsight.calories - comparator.calories) * days * journeysPerDay

        const deltaInKcals = Math.round((deltaInCals / 1000) * 100) / 100

        const isMoreHealthy = deltaInKcals > 0

        return (
          isMoreHealthy &&
          `${comparator.mode} will ${
            isMoreHealthy ? 'save' : 'cost'
          } you ${deltaInKcals} Kcals in comparison to ${comparatorInsight.mode}`
        )
      })
    )
    .reduce((acc, curr) => [...acc, ...curr], [])
    .filter(x => x)
})
export default healthInsights