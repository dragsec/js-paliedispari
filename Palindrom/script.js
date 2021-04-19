var parola = prompt("Inserisci la parola");


function controlPal(){
    var parolaInvertita =  "";
    for (var i = parola.length - 1; i >= 0; i--){
        parolaInvertita += parola[i];
    }
    if (parola.toLowerCase() == parolaInvertita.toLowerCase()){
        return "La parola è palindroma";
    }else{
        return "La parola non è palindroma";
    }
}


var risultato = controlPal(parola);
console.log(risultato);