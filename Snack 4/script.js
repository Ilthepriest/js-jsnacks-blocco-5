/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

 const array1 = ["a", "b", "c"]

 const array2 = ["1", "2", "3"]

 const copy = ["a", ...array2[0], "b", ...array2[1], "c", ...array2[2]];

 console.log(copy);




