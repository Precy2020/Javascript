let vehicle ={
    "seats": 5,
    "wheels": 4,
    "doors": 2,

}

let car ={
    name: "Benz",
    year: "2020",
    __proto__: vehicle
}
console.log(car.name)
console.log(car.wheels)