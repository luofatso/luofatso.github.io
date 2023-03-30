import dayjs from 'dayjs'
import { calendar } from '../time/js-calendar-converter'

interface importantType {
  key: string
  date: string
  diff?: number
}

const year = dayjs().get('year')

const getNewYear = () => {
  const thatYear = calendar.lunar2solar(year, '01', '01').date
  const diff = dayjs(thatYear).diff(dayjs(), 'day')
  return (
    diff >= 0 && diff < 350 ? thatYear : calendar.lunar2solar(year + 1, '01', '01').date
  ) as string
}

const getNewYear1 = () => {
  const thatYear = year+'-01-01'
  const diff = dayjs(year+'-01-01').diff(dayjs(), 'day')
  return (
    diff >= 0 && diff < 350 ? thatYear : year + 1+ '-01-01'
  ) as string
}

const importantDayArr: importantType[] = [
  {
    key: '春节',
    date: getNewYear()
  },
  {
    key: '元旦',
    date: getNewYear1()
  },
  {
    key: '情人节',
    date: `${year}-02-14`
  },
  {
    key: '妇女节',
    date: `${year}-03-08`
  },
  {
    key: '劳动节',
    date: `${year}-05-01`
  },
  {
    key: '儿童节',
    date: `${year}-06-01`
  },
  {
    key: '端午节',
    date: calendar.lunar2solar(year, '05', '05').date as string
  },
  {
    key: '七夕节',
    date: calendar.lunar2solar(year, '07', '07').date as string
  },
  {
    key: '中元节',
    date: calendar.lunar2solar(year, '07', '15').date as string
  },
  {
    key: '中秋节',
    date: calendar.lunar2solar(year, '08', '15').date as string
  },
  {
    key: '国庆节',
    date: `${year}-10-01`
  },
]

const importantDay = importantDayArr
  .map((it) => {
    // eslint-disable-next-line no-param-reassign
    it.diff = dayjs(it.date).diff(dayjs(), 'day')
    return it
  })
  .filter((it) => {
    return (it.diff as number) >= 0
  })
  .sort((a, b) => {
    return dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
  })

export default importantDay
