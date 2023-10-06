let array = []

let object1 = {
    name: "Kaduna",
    population: 10,
    temperature: 30,
    currency: "NG"
}
let object2 = {
    name: "Kano",
    population: 10,
    temperature: 1,
    currency: "NG"
}
let object3 = {
    name: "Kebbi",
    population: 10,
    temperature: 2,
    currency: "NG"
}

let first_row = []
first_row.push(null)
first_row.push(object1)
first_row.push(object2)
first_row.push(object3)
array.push(first_row)

let object4 = {
    name: "Minna",
    population: 10,
    temperature: 3,
    currency: "NG"
}
let object5 = {
    name: "Maduguiri",
    population: 10,
    temperature: 3,
    currency: "NG"
}
let object6 = {
    name: "Kastina",
    population: 10,
    temperature: 3,
    currency: "NG"
}

let second_row = []
second_row.push(object4)
second_row.push(object5)
second_row.push(object6)
second_row.push(null)
array.push(second_row)

let object7 = {
    name: "Abuja",
    population: 10,
    temperature: 4,
    currency: "NG"
}
let object8 = {
    name: "Nassarawa",
    population: 10,
    temperature: 3,
    currency: "NG"
}
let object9 = {
    name: "Bauchi",
    population: 9,
    temperature: 3,
    currency: "NG"
}

let third_row = []
third_row.push(object7)
third_row.push(null)
third_row.push(object8)
third_row.push(object9)
array.push(third_row)

let sum = 0;
for (const iterator of array) {
    for(const i of iterator){
        if(i != null){
            if(i.temperature <= 10){
                console.log(" name ", i.name, " population ", i.population, " temperature ", i.temperature)
                sum+= i.population
            }
            
        }
        
        
  }
}
  console.log(sum)


