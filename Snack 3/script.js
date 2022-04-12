/* SNACK 3 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 */


function giroStringa(stringa){
    const splitParola = stringa.split("")
    const reverseParola = splitParola.reverse()
    return reverseParola.join("")
}

console.log(giroStringa("ciao"));