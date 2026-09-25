// ==========================================
// BANQUE DE MOTS
// ==========================================

const mots = {

    debutant: [
        "CHAT",
        "LIVRE",
        "ECOLE"
    ],

    apprenti: [
        "CLAVIER",
        "ORDINATEUR",
        "INTERNET"
    ],

    confirme: [
        "PROGRAMMATION",
        "DEVELOPPEUR",
        "APPLICATION"
    ],

    expert: [
        "JAVASCRIPT",
        "ALGORITHME",
        "TECHNOLOGIE"
    ],

    maitre: [
        "INFORMATIQUE",
        "DEVELOPPEMENT",
        "PROGRAMMATEUR"
    ]

};


// ==========================================
// VARIABLES
// ==========================================

let niveau = 1;

let xp = 0;

let vies = 3;

let motActuel = "";

let motsPartie = {};

let temps;

let chronometre;


// ==========================================
// ELEMENTS HTML
// ==========================================

const affichageXP =
    document.querySelector("#xp");

const affichageGrade =
    document.querySelector("#grade");

const affichageTemps =
    document.querySelector("#temps");

const motMelange =
    document.querySelector("#motMelange");

const reponse =
    document.querySelector("#reponse");

const message =
    document.querySelector("#message");

const affichageNiveau =
    document.querySelector("#niveau");

const boutonValider =
    document.querySelector("#valider");

const boutonNouvellePartie =
    document.querySelector("#nouvellePartie");

const affichageVies =
    document.querySelector("#vies");


// ==========================================
// MELANGER LES LETTRES
// ==========================================

function melangerMot(mot) {

    let lettres = mot.split("");

    lettres.sort(function() {

        return Math.random() - 0.5;

    });

    return lettres.join("");

}


// ==========================================
// DETERMINER LE GRADE
// ==========================================

function obtenirGrade() {

    if (xp < 300) {

        return "Débutant";

    }

    else if (xp < 600) {

        return "Apprenti";

    }

    else if (xp < 1000) {

        return "Confirmé";

    }

    else if (xp < 1500) {

        return "Expert";

    }

    else {

        return "Maître 👑";

    }

}



// ==========================================
// MELANGER LES MOTS POUR UNE NOUVELLE PARTIE
// ==========================================

function preparerNouvellePartie() {

    motsPartie = {

        debutant: [...mots.debutant],

        apprenti: [...mots.apprenti],

        confirme: [...mots.confirme],

        expert: [...mots.expert],

        maitre: [...mots.maitre]

    };


    // Mélanger chaque grade

    for (let categorie in motsPartie) {

        motsPartie[categorie].sort(function() {

            return Math.random() - 0.5;

        });

    }

}




function choisirMot() {

    if (niveau <= 3) {

        motActuel =
            motsPartie.debutant[niveau - 1];

    }

    else if (niveau <= 6) {

        motActuel =
            motsPartie.apprenti[niveau - 4];

    }

    else if (niveau <= 9) {

        motActuel =
            motsPartie.confirme[niveau - 7];

    }

    else if (niveau <= 12) {

        motActuel =
            motsPartie.expert[niveau - 10];

    }

    else {

        motActuel =
            motsPartie.maitre[niveau - 13];

    }

}


// CHRONOMETRE

function demarrerChronometre() {

    clearInterval(chronometre);

    temps = 20;

    affichageTemps.textContent =
        temps;

    boutonValider.disabled = false;

    reponse.disabled = false;


    chronometre = setInterval(function() {

        temps--;

        affichageTemps.textContent =
            temps;


        // Temps écoulé
        if (temps <= 0) {

            clearInterval(chronometre);

            message.textContent =
                '⏰ Temps écoulé ! Le mot était "' +
                motActuel +
                '".';

            boutonValider.disabled = true;

            reponse.disabled = true;

        }

    }, 1000);

}


// ==========================================
// AFFICHER UN NOUVEAU MOT
// ==========================================

function afficherMot() {

    choisirMot();


    let motMelangeActuel =
        melangerMot(motActuel);


    motMelange.textContent =
        motMelangeActuel;


    reponse.value = "";

    message.textContent = "";


    vies = 3;

    affichageVies.textContent =
        vies;


    reponse.disabled = false;

    boutonValider.disabled = false;

    reponse.focus();


    demarrerChronometre();

}


// ==========================================
// VERIFIER LA REPONSE
// ==========================================

boutonValider.addEventListener(
    "click",
    function() {

        let reponseJoueur =
            reponse.value
                .trim()
                .toUpperCase();


        // ======================================
        // BONNE REPONSE
        // ======================================

        if (reponseJoueur === motActuel) {

            clearInterval(chronometre);


            // Ajouter 100 XP
            xp += 100;


            affichageXP.textContent =
                xp;


            // Mettre à jour le grade
            affichageGrade.textContent =
                obtenirGrade();


            message.textContent =
                "🎉 Bravo ! Bonne réponse !";


            // Passer au niveau suivant
            niveau++;


            affichageNiveau.textContent =
                niveau;


            // Continuer jusqu'au niveau 15
            if (niveau <= 15) {

                boutonValider.disabled = true;

                reponse.disabled = true;


                setTimeout(function() {

                    afficherMot();

                }, 1000);

            }


            // Fin du jeu
            else {

                message.textContent =
                    "🏆 Félicitations ! Tu as terminé tous les niveaux !";


                boutonValider.disabled = true;

                reponse.disabled = true;

            }

        }


        // ======================================
        // MAUVAISE REPONSE
        // ======================================

        else {

            vies--;


            affichageVies.textContent =
                vies;


            // Plus aucune vie
            if (vies <= 0) {

                clearInterval(chronometre);


                message.textContent =
                    '💀 Game Over ! Le mot était "' +
                    motActuel +
                    '".';


                boutonValider.disabled = true;

                reponse.disabled = true;

            }


            // Il reste des vies
            else {

                message.textContent =
                    "❌ Mauvaise réponse ! Il te reste " +
                    vies +
                    " vie(s).";

            }

        }

    }
);


// ==========================================
// NOUVELLE PARTIE
// ==========================================

boutonNouvellePartie.addEventListener(
    "click",
    function() {

        // Arrêter le chronomètre
        clearInterval(chronometre);


        // Réinitialiser le jeu
        niveau = 1;

        xp = 0;

        vies = 3;

        motActuel = "";
        
        preparerNouvellePartie();


        // Réinitialiser l'affichage
        affichageNiveau.textContent =
            1;

        affichageXP.textContent =
            0;

        affichageGrade.textContent =
            "Débutant";

        affichageVies.textContent =
            3;


        reponse.disabled = false;

        boutonValider.disabled = false;


        // Recommencer
        afficherMot();

    }
);


// ==========================================
// DEMARRER LE JEU
// ==========================================

preparerNouvellePartie();

afficherMot();