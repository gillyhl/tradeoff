import addSeconds from 'date-fns/add_seconds'
import distanceInWords from 'date-fns/distance_in_words'
import insightSortService from './insightSortService'

export const timeInsights = (comparators, days, journeysPerDay = 2) => ({
  values: comparators.sort(sortDurationDescending).map((comparator, i, array)=>{
    mode: comparator.mode,
    percentage: Math.floor(comparator.duration.value*100/array[0].duration.value)
  }),
  text: comparators
    .sort(sortDurationDescending)
    .map((comparator, i, array) =>
      array.filter(x => x.mode !== comparator.mode).map(comparatorInsight => {
        const deltaInSeconds =
          (comparatorInsight.duration.value - comparator.duration.value) * days * journeysPerDay
        const startDate = new Date()

        startDate.setHours(0, 0, 0, 0)
        const endDate = addSeconds(startDate, deltaInSeconds)

        const timeString = distanceInWords(startDate, endDate)
        const isFaster = deltaInSeconds > 0

        return (
          isFaster &&
          `${comparator.mode} will ${
            isFaster ? 'save' : 'cost'
          } you ${timeString} in comparison to ${comparatorInsight.mode}`
        )
      })
    )
    .reduce((acc, curr) => [...acc, ...curr], [])
    .filter(x => x)
})
const sortDurationDescending = insightSortService('duration', 'value')
