function count_Bs(string){
    let counter = 0;
    for (let iterator of string) {
        if(iterator === "B"){
             counter+=1
    
        }
    } 
    return counter

}
const my_string = "Ba Bla black sheep"
console.log("The amount of Bs are ",count_Bs(my_string, "l"))

function count_char(string, char){
    let counter = 0;
    for (let iterator of string) {
        if(iterator === char){
             counter+=1
    
        }
    } 
    return counter

}
console.log("Char is equal to ", count_char(my_string, "l"))