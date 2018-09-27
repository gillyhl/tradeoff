import insightSortService from './insightSortService'
export const costInsights = (comparators, days, journeysPerDay = 2) => {

  return comparators
    .sort(sortDurationDescending)
    .map((comparator, i, array) => array
      .filter(x => x.mode !== comparator.mode)
      .map(comparatorInsight => {

        const deltaInPence = (comparatorInsight.cost - comparator.cost) * days * journeysPerDay

        const deltaInPounds = deltaInPence / 100

        const isCheaper = deltaInPence > 0

        return isCheaper && `${comparator.mode} will ${isCheaper ? 'save' : 'cost'} you £${deltaInPounds} in comparison to ${comparatorInsight.mode}`
      }))
      .reduce((acc, curr) => [ ...acc, ...curr], [])
      .filter(x => x)
}

const sortDurationDescending = (a,b) => insightSortService('cost', 'value')