var scelta = prompt("Pari o dispari?")
console.log("Hai scelto " + scelta)
var numeroUtente = prompt("Inserisci un numero");
console.log("Il tuo numero è " + numeroUtente);
var numeroComputer = Math.floor(Math.random()*5);
console.log("Il numero del computer è " + numeroComputer);

function calcolo(){
    var somma = numeroUtente + numeroComputer;
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

