// Genero numeri da 1 a 100
for(let i=1; i<=100; i++){
    let container = document.getElementById("container");
    // Verifico che il numero sia un multiplo sia di 3 sia di 5
    if((i%3 == 0) && (i%5 == 0)){
        container.innerHTML = container.innerHTML + `<div class="celle"><div class="bacColRed"><div class="numeri">fizzbuzz</div></div></div>`;
        console.log("fizzbuzz");
    // Verifico che il numero sia un multiplo solo di 3
    }else if(i%3 == 0){
        container.innerHTML = container.innerHTML + `<div class="celle"><div class="bacColGre"><div class="numeri">fizz</div></div></div>`;
        console.log("fizz");
    // Verifico che il numero sia un multiplo solo di 5
    }else if(i%5 == 0){
        container.innerHTML = container.innerHTML + `<div class="celle"><div class="bacColYel"><div class="numeri">buzz</div></div></div>`;
        console.log("buzz");
    // Stampo i numeri che non sono multipli ne di 3 ne di 5
    }else{
        container.innerHTML = container.innerHTML + `<div class="celle"><div class="bacColBlu"><div class="numeri">${i}</div></div></div>`;
        console.log(i);
    }
}