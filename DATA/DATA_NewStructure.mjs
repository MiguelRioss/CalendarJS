import {daysUntilMonthsFromNow,getNextNDays} from '../getAllDaysFor4Months.mjs'
import { isValidDay } from './AuxFunctions/auxFiles.mjs';


const possibleDays = getNextNDays(daysUntilMonthsFromNow(1))

for (const key in getNextNDays(daysUntilMonthsFromNow(1))) {
    possibleDays[key] = possibleDays[key].map((elem) => ({
      "day": elem,
      "appointment": []
    }));
  }

//console.log(possibleDays['08-2023'])
//console.log(possibleDays['09-2023'])

export function getApoinmetsFromDay(day){
  if(!isValidDay) {throw ("Invalid Day")
  }

  const monthYear = day.split('-')

  const month = monthYear[1]

  const year = monthYear[2]
  const dayFormated = `${month}-${year}`
  const dayArray = possibleDays[dayFormated]
  console.log(day)
  return dayArray.find((elem)=> elem.day == day)
 
}

export async function getApoinmets(){
    return possibleDays
}
// //Transform Data into Json
// const newData = JSON.stringify(possibleDays)
// console.log("JSON__",newData)


//Transform Json into Data Object
//const newDataParsed = JSON.parse(newData)
//console.log("Object__",newDataParsed)