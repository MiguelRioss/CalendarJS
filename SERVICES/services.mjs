import * as dataMEM from '../DATA/data-mem.mjs'
export async function createApointment(apointmentToCreate) {
    return dataMEM.createApointment(apointmentToCreate.day,apointmentToCreate.typeOfService,apointmentToCreate.time,apointmentToCreate.beggining,apointmentToCreate.finish,apointmentToCreate.NIF)
}

export function getApoinmetsFromDay(apointmentDay) {
    return dataMEM.getApoinmetsFromDay(apointmentDay)
}

export async function getApoinmets(apointmentDay) {
    return dataMEM.getApoinmets(apointmentDay)
}


export function deleteApointmentFromDay(ApointmentID) {
    return dataMEM.deleteApointmentFromDay(ApointmentID)
}