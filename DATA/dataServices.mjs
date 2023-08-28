

//Time is a class in wich takes hours and minutes as argumnents
class time{
    constructor ( hours ,minutes){
        if(hours <0 || hours > 24  || minutes <0 || minutes >60){
            throw new Error("Hours must be correct")
        }
        this.hours = hours
        this.minutes = minutes
    }
}




const possibleDurations = {thirtyMin : time , twentyMin : time , Hour : time }
const typesOfServices = {massagem : "Massagem", unhas : "Unhas"}

class Intreval {
    constructor(beggining,finish) {
        this.beggining = beggining
        this.finish = finish
    }
}
console.log(new time(0,20))

