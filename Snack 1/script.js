/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {
        varieta: "faenza",
        peso: 20,
        lunghezza: 15
    },

    {
        varieta: "faenza",
        peso: 30,
        lunghezza: 10
    },

    {
        varieta: "faenza",
        peso: 20,
        lunghezza: 20
    },

    {
        varieta: "faenza",
        peso: 50,
        lunghezza: 30
    },

    {
        varieta: "faenza",
        peso: 45,
        lunghezza: 8
    },
     
    {
        varieta: "faenza",
        peso: 40,
        lunghezza: 12
    },

    {
        varieta: "faenza",
        peso: 20,
        lunghezza: 26
    },

    {
        varieta: "faenza",
        peso: 20,
        lunghezza: 34
    },

    {
        varieta: "faenza",
        peso: 60,
        lunghezza: 40
    },

    {
        varieta: "faenza",
        peso: 35,
        lunghezza: 39
    },
]

let somma = 0;

zucchine.forEach((zucchina) =>{
    let pesoZucchina = zucchina.peso;
    somma += pesoZucchina
})

console.log(somma);
