import * as services from '../SERVICES/services.mjs'
export async function getApointments(req,rsp){
    const x = await services.getApoinmets()
    rsp.json(x)
}

export async function getApoinmetsFromDay(req,rsp){
    const x = await services.getApoinmetsFromDay(req.params.day)
    rsp.json(x)
}