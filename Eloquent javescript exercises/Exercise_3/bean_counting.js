function count_Bs(string, char){
    let counter = 0;
    for (let iterator of string) {
        if(iterator === char){
             counter+=1
    
        }
    } 
    return counter

}
const my_string = "BaBaloBla"
console.log(count_Bs(my_string, "l"))