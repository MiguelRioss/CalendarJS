import { readFile } from 'fs/promises';
import * as services from './SERVICES/services.mjs'

async function readJsonFile() {
  try {
    const data = await readFile('apointmentsJson.json', 'utf8');
    const json = JSON.parse(data);
    console.log(json);
  } catch (error) {
    console.error("Error:", error);
  }
}
const json =   {
  "day" : "27-02-2023",
  "typeOfService" : "massagem",
  "time": "1:00" ,
  "beggining" : "18:30",
  "finish" : "19:30",
  "NIF" : "510485588"
}

//Returns A 
  createApointment(json)

//Pass the ID Into the Service , since every Apointment have an ID when introduced to the server
//Acessed by get methods on apointments
services.deleteApointmentFromDay(1)
console.log(services.getApoinmetsFromDay("27-02-2023"))

async function createApointment(json) {
  try {
    services.createApointment(json)
  } catch(err) {
      processError(err)
  }
  
}