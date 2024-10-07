import { parseISO, format, parse, formatISO } from "date-fns";
import es from 'date-fns/locale/es'

export function converToISO(data){
  const newDate = parse(data, 'dd/MM/yyyy', new Date())
  return formatISO(newDate)
}

export function displayDate(date){
  const newDate = parseISO(date)
  const formattedDate = format(newDate, 'PPPP', {locale: es}) // el primer parametro es la fecha recivida, luego el formato que le queremos dar y por ultimo el idioma porque sino se le pasa el tercer parametro nos retorna la fecha en ingles
  return formattedDate
}


export function convertToDDMMYYYY(isoDate){
  const newDate = new Date(isoDate)
  const formattedDate = format(newDate, 'dd/MM/yyyy' )
  return formattedDate
}
