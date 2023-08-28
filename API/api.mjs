import * as services from '../SERVICES/services.mjs'
export async function getApointments(req,rsp){
    const day = "27-02-2023"
    const x = await services.getApoinmets(day)
    rsp.json(x)
}

