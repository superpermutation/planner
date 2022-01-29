import dayjs from 'dayjs'

export const getWeekNotes = (state, t) => {
  let notDone = state.notes
  let todayNotDone = notDone.filter((i) => dayjs().isSame(i.date, 'day'))
  let tomorrowNotDone = notDone.filter((i) =>
    dayjs().add(1, 'day').isSame(i.date, 'day'),
  )
  let thisWeek = notDone.filter(
    (i) =>
      dayjs(i.date).isAfter(dayjs().add(1, 'day'), 'day') &&
      dayjs().isSame(i.date, 'week'),
  )
  return [
    {title: t('TODAY'), data: todayNotDone},
    {title: t('TOMORROW'), data: tomorrowNotDone},
    {title: t('THIS_WEEK'), data: thisWeek},
  ]
}
