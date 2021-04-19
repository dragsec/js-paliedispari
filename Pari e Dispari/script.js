var scelta = prompt("Pari o dispari?")
console.log("Hai scelto " + scelta)
var numeroUtente = prompt("Inserisci un numero");
console.log("Il tuo numero è " + numeroUtente);
var numeroComputer = Math.ceil(Math.random()*5);
console.log("Il numero del computer è " + numeroComputer);
var somma = (1*numeroUtente) + (1*numeroComputer);
console.log("La somma è " + somma)

function calcolo(){
    if (somma % 2 === 0){ 
    return "pari" 
    }else{
    return "dispari" 
    }
}

var risultato = calcolo();

if(scelta.toLowerCase() == risultato.toLowerCase()){
    console.log("Hai vinto!")
}else{
    console.log("Hai perso!")
}

