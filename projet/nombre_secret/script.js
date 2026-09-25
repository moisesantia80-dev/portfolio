/* let nombreSecret = Math.floor(Math.random() * 100) + 1;

let bouton = document.querySelector("#deviner");

let nouvellePartie = document.querySelector("#nouvellePartie");

let compteur = 0;

nouvellePartie.disabled = true;


bouton.addEventListener("click", function() {

    let nombreJoueur = Number(document.querySelector("#nombre").value);

    let message = document.querySelector("#message");

    let tentatives = document.querySelector("#tentatives");

    compteur = compteur + 1;

    tentatives.textContent = "🎯 Tentative : " + compteur + " / 10";


    if (nombreJoueur == nombreSecret) {

        message.textContent = "🎉 Bravo ! Le nombre était " + nombreSecret;

        bouton.disabled = true;

        nouvellePartie.disabled = false;


    } else if (compteur == 10) {

        message.textContent = "❌ Perdu ! Le nombre secret était " + nombreSecret;

        bouton.disabled = true;

        nouvellePartie.disabled = false;


    } else if (nombreJoueur < nombreSecret) {

        message.textContent = "🔽 Trop petit !";


    } else {

        message.textContent = "🔼 Trop grand !";

    }

});


nouvellePartie.addEventListener("click", function() {

    nombreSecret = Math.floor(Math.random() * 100) + 1;

    compteur = 0;

    document.querySelector("#nombre").value = "";

    document.querySelector("#message").textContent = "";

    document.querySelector("#tentatives").textContent = "";

    bouton.disabled = false;

    nouvellePartie.disabled = true;

}); */      /* ICI LE NOMBRE SECRET EST CHOISI DE FACON ALLEATOIRE PAR LE PROGRAMME MEME */



let listeNombres = [80,17, 42, 68, 91, 34,64,0,94,33,3,53,77,98];

let position = 0;

let nombreSecret = listeNombres[position];

let bouton = document.querySelector("#deviner");

let nouvellePartie = document.querySelector("#nouvellePartie");

let compteur = 0;

nouvellePartie.disabled = true;


bouton.addEventListener("click", function() {

    let nombreJoueur = Number(document.querySelector("#nombre").value);

    let message = document.querySelector("#message");

    let tentatives = document.querySelector("#tentatives");

    compteur = compteur + 1;

    tentatives.textContent = "🎯 Tentative : " + compteur + " / 10";


    if (nombreJoueur == nombreSecret) {

        message.textContent =
            "🎉 Bravo ! Le nombre était " + nombreSecret;

        bouton.disabled = true;

        nouvellePartie.disabled = false;


    } else if (compteur == 10) {

        message.textContent =
            "❌ Perdu ! Le nombre secret était " + nombreSecret;

        bouton.disabled = true;

        nouvellePartie.disabled = false;


    } else if (nombreJoueur < nombreSecret) {

        message.textContent = "🔽 Trop petit !";


    } else {

        message.textContent = "🔼 Trop grand !";

    }

});


nouvellePartie.addEventListener("click", function() {

    position = position + 1;

    if (position == listeNombres.length) {
        position = 0;
    }

    nombreSecret = listeNombres[position];

    compteur = 0;

    document.querySelector("#nombre").value = "";

    document.querySelector("#message").textContent = "";

    document.querySelector("#tentatives").textContent = "";

    bouton.disabled = false;

    nouvellePartie.disabled = true;

});