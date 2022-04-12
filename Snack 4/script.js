/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */


function mergeArrays(array_1, array_2){
    const newArray = []
    if(array_1.lenght === array_2.lenght){
        array_1.forEach((element, index) =>{
            newArray.push(element)
            newArray.push(array_2[index])
        })
        return newArray
    }
    
}

console.log(mergeArrays(["a", "b", "c"], ["1", "2", "3"]));