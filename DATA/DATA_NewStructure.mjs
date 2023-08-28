import {daysUntilMonthsFromNow,getNextNDays} from '../getAllDaysFor4Months.mjs'



const possibleDays = getNextNDays(daysUntilMonthsFromNow(1))

for (const key in possibleDays) {
    possibleDays[key] = possibleDays[key].map((elem) => ({
      "day": elem,
      "appointment": []
    }));
  }

//console.log(possibleDays['08-2023'])
//console.log(possibleDays['09-2023'])
console.log(possibleDays)


export async function getApoinmets(){
    return possibleDays
}
// //Transform Data into Json
// const newData = JSON.stringify(possibleDays)
// console.log("JSON__",newData)


//Transform Json into Data Object
//const newDataParsed = JSON.parse(newData)
//console.log("Object__",newDataParsed)