import insightSortService from './insightSortService'

const sortCostDescending = (a, b) => insightSortService('cost', 'value')
export const costInsights = (comparators, days, journeysPerDay = 2) => ({
  values: comparators.sort(sortCostDescending).map((comparator, i, array) => ({
    mode: comparator.mode,
    percentage: !array[0].cost.value
      ? 0
      : Math.floor((comparator.cost.value * 100) / array[0].cost.value)
  })),
  text: comparators
    .sort(sortCostDescending)
    .map((comparator, i, array) =>
      array.filter(x => x.mode !== comparator.mode).map(comparatorInsight => {
        const deltaInPence = (comparatorInsight.cost - comparator.cost) * days * journeysPerDay

        const deltaInPounds = deltaInPence / 100

        const isCheaper = deltaInPence > 0

        return (
          isCheaper &&
          `${comparator.mode} will ${
            isCheaper ? 'save' : 'cost'
          } you £${deltaInPounds} in comparison to ${comparatorInsight.mode}`
        )
      })
    )
    .reduce((acc, curr) => [...acc, ...curr], [])
    .filter(x => x)
})

export default costInsights
