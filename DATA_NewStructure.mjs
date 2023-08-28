let  data = {
    "Apointments": 
        [          
            {  
                "day" : "27-02-2023" , 
                "apointment":[]
            }
        ]
}




// Chose A Apointments Day To 
const dayToRetrieve = "26-02-2023"

data = {
    "Apointments": data.Apointments.filter((elem) => elem.day != dayToRetrieve )
}

//I can iterate between days 
data.Apointments.forEach((elem) => console.log(elem.day ))

//Transform Data into Json
const newData = JSON.stringify(data)
console.log("JSON__",newData)

//Transform Json into Data Object
const newDataParsed = JSON.parse(newData)
console.log("Object__",newDataParsed)