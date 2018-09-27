import insightSortService from './insightSortService'
export const co2Insights = (comparators, days, journeysPerDay = 2) => {

  return comparators
    .sort(sortCo2Descending)
    .map((comparator, i, array) => array
      .filter(x => x.mode !== comparator.mode)
      .map(comparatorInsight => {

        const deltaInGrams = (comparatorInsight.co2 - comparator.co2) * days * journeysPerDay

        const deltaInKg = Math.round((deltaInGrams / 1000) * 100) / 100

        const isMoreEnvironmentallyFriendly = deltaInKg > 0

        return isMoreEnvironmentallyFriendly && `${comparator.mode} will ${isMoreEnvironmentallyFriendly ? 'save' : 'cost'} the environment ${deltaInKg} CO2/KG in comparison to ${comparatorInsight.mode}`
      }))
      .reduce((acc, curr) => [ ...acc, ...curr], [])
      .filter(x => x)
}

const sortCo2Descending = insightSortService('co2')