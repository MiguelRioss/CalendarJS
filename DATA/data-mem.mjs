import {isValidDay,isValidService,isValidNIF,isValidTime} from './AuxFunctions/auxFiles.mjs'

let data = []
let newId = 0

function getNewId(){
    return newId++
}


export function deleteApointmentFromDay(apointmentID){
    return data = data.filter((elem) => !(elem.id== apointmentID))
}

export async function createApointment(day,typeOfService,time,beggining,finish,NIF) {

    if(!isValidDay(day)) {throw ("Invalid Day")}

    if(!isValidService(typeOfService)){throw ("Invalid Service")}
    if(!isValidTime(time)){throw ("Invalid Time")}
    if(!isValidTime(beggining)){throw ("Invalid beggining")}
    if(!isValidTime(finish)){throw ("Invalid finish")}
    if(!isValidNIF(NIF)){throw("Invalid NIF")}
    
    const Apointment = {
        id : getNewId(),
        day : day,
        typeOfService : typeOfService,
        time: time ,
        beggining : beggining,
        finish : finish,
        NIF : NIF
    }
    data.push(Apointment)
    return Apointment
}




