/*
    Crea 10 oggetti che rapppresentano una zucchina
    Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine
 */

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

const lunghezzaZucchina15 =  zucchine.filter((zucchina) => zucchina.lunghezza < 15)

console.log(lunghezzaZucchina15);

const lunghezzaZucchina_over15 =  zucchine.filter((zucchina) => zucchina.lunghezza > 15)

console.log(lunghezzaZucchina_over15);

//fare la somma dei pesi dell'array lunghezzaZucchina15

let somma = 0;

lunghezzaZucchina15.forEach((zucchina) => {
    somma += zucchina.peso
})

console.log(somma);


let somma_over15 = 0;

lunghezzaZucchina_over15.forEach((zucchina) => {
    somma_over15 += zucchina.peso
})

console.log(somma_over15);