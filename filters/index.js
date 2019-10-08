import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export const dateFormat = (date, dateFormat) => {
  return format(parseISO(date), dateFormat)
}
