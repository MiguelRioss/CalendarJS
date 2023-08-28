import * as dataMEM from '../DATA/data-mem.mjs'
import * as newDATAMEM from '../DATA/DATA_NewStructure.mjs'
export async function createApointment(apointmentToCreate) {
    return dataMEM.createApointment(apointmentToCreate.day,apointmentToCreate.typeOfService,apointmentToCreate.time,apointmentToCreate.beggining,apointmentToCreate.finish,apointmentToCreate.NIF)
}

export function getApoinmetsFromDay(apointmentDay) {
    return newDATAMEM.getApoinmetsFromDay(apointmentDay)
}

export async function getApoinmets() {
    return newDATAMEM.getApoinmets()
}


export function deleteApointmentFromDay(ApointmentID) {
    return dataMEM.deleteApointmentFromDay(ApointmentID)
}