import express from 'express'
import * as api from '../API/api.mjs'
const PORT = 1904

console.log("Start setting up server")
let app = express()

app.get('/get', api.getApointments)


app.get('/get/:day', api.getApoinmetsFromDay)

app.delete('/tasks/:id', function(req, rsp) {
    rsp.end(`DELETE task with id ${req.params.id}`)
})

app.post('/tasks', function(req, rsp) {
    rsp.end("POST task")
})

app.put('/tasks/:id', function(req, rsp) {
    rsp.end(`PUT task with id ${req.params.id}`)
})

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")