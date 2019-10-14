import { format, parseISO } from 'date-fns'
import { startCase } from 'lodash'

export const dateFormat = (date, dateFormat) => {
  return (date != null)
    ? format(parseISO(date), dateFormat)
    : 'N/A'
}

export const capitalise = (str) => {
  return startCase(str)
}
