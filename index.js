// Genero numeri da 1 a 100
for(let i=1; i<=100; i++){
    // Verifico che il numero sia un multiplo sia di 3 sia di 5
    if((i%3 == 0) && (i%5 == 0)){
        console.log("fizzbuzz");
    // Verifico che il numero sia un multiplo solo di 3
    }else if(i%3 == 0){
        console.log("fizz");
    // Verifico che il numero sia un multiplo solo di 5
    }else if(i%5 == 0){
        console.log("buzz");
    // Stampo i numeri che non sono multipli ne di 3 ne di 5
    }else{
        console.log(i);
    }
}