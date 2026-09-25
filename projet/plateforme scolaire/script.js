
// ========================================
// RÉCUPÉRER LES ÉLÉMENTS
// ========================================

let boutonsProfil = document.querySelectorAll(".profil");

let formulaireProfil = document.querySelector("#formulaire-profil");


// ========================================
// FONCTION DE VÉRIFICATION
// ========================================

function verifierFormulaire(formulaire) {

    let champs = formulaire.querySelectorAll("input");

    // Vérifier les champs vides
    for (let champ of champs) {

        if (champ.value.trim() === "") {

            alert("⚠️ Veuillez remplir tous les champs.");

            return false;
        }
    }


    // Vérifier l'email
    let email = formulaire.querySelector('input[type="email"]');

    if (!email.value.includes("@")) {

        alert("⚠️ Veuillez entrer une adresse email valide.");

        return false;
    }


    // Vérifier le mot de passe
    let motDePasse = formulaire.querySelector('input[type="password"]');

    if (motDePasse.value.length < 6) {

        alert("⚠️ Le mot de passe doit contenir au moins 6 caractères.");

        return false;
    }


    return true;
}


// ========================================
// AFFICHER LE FORMULAIRE
// ========================================

function afficherFormulaire(profil) {

    // ====================================
    // ÉTUDIANT
    // ====================================

    if (profil === "etudiant") {

        formulaireProfil.innerHTML = `

            <h2>🎓 Inscription Étudiant</h2>

            <form id="formulaireEtudiant" novalidate>

                <label>Nom :</label>
                <input type="text" name="nom" placeholder="Votre nom">

                <label>Prénom :</label>
                <input type="text" name="prenom" placeholder="Votre prénom">

                <label>Date de naissance :</label>
                <input type="date" name="dateNaiss">

                <label>Email :</label>
                <input type="email" name="email" placeholder="Votre email">

                <label>Classe :</label>
                <input type="text" name="classe" placeholder="Votre classe">

                <label>Matricule :</label>
                <input type="text" name="matricule" placeholder="Votre matricule">

                <label>Mot de passe :</label>
                <input type="password" name="motDePasse" placeholder="Votre mot de passe">

                <button type="submit">
                    Créer mon compte
                </button>

            </form>
        `;
    }


    // ====================================
    // PARENT
    // ====================================

    if (profil === "parent") {

        formulaireProfil.innerHTML = `

            <h2>👨‍👩‍👧 Inscription Parent</h2>

            <form id="formulaireParent" novalidate>

                <label>Nom :</label>
                <input type="text" name="nom" placeholder="Votre nom">

                <label>Prénom :</label>
                <input type="text" name="prenom" placeholder="Votre prénom">

                <label>Email :</label>
                <input type="email" name="email" placeholder="Votre email">

                <label>Téléphone :</label>
                <input type="tel" name="telephone" placeholder="Votre numéro de téléphone">

                <label>Nom de l'enfant :</label>
                <input type="text" name="nomEnfant" placeholder="Nom de votre enfant">

                <label>Classe de l'enfant :</label>
                <input type="text" name="classeEnfant" placeholder="Classe de votre enfant">

                <label>Mot de passe :</label>
                <input type="password" name="motDePasse" placeholder="Votre mot de passe">

                <button type="submit">
                    Créer mon compte
                </button>

            </form>
        `;
    }


    // ====================================
    // ENSEIGNANT
    // ====================================

    if (profil === "enseignant") {

        formulaireProfil.innerHTML = `

            <h2>👨‍🏫 Inscription Enseignant</h2>

            <form id="formulaireEnseignant" novalidate>

                <label>Nom :</label>
                <input type="text" name="nom" placeholder="Votre nom">

                <label>Prénom :</label>
                <input type="text" name="prenom" placeholder="Votre prénom">

                <label>Email :</label>
                <input type="email" name="email" placeholder="Votre email">

                <label>Téléphone :</label>
                <input type="tel" name="telephone" placeholder="Votre numéro de téléphone">

                <label>Matière enseignée :</label>
                <input type="text" name="matiere" placeholder="Ex : Mathématiques">

                <label>Mot de passe :</label>
                <input type="password" name="motDePasse" placeholder="Votre mot de passe">

                <button type="submit">
                    Créer mon compte
                </button>

            </form>
        `;
    }


    // ====================================
    // RÉCUPÉRER LE FORMULAIRE
    // ====================================

    let formulaire = formulaireProfil.querySelector("form");


    // ====================================
    // GÉRER LE BOUTON CRÉER UN COMPTE
    // ====================================

    formulaire.addEventListener("submit", function(event) {

        event.preventDefault();

        // Vérifier les informations
        let valide = verifierFormulaire(formulaire);

        if (!valide) {
           return;
        }

        // Récupérer les informations du formulaire
        let donnees = new FormData(formulaire);

        // Transformer les données en objet
        let compte = Object.fromEntries(donnees);

        // Ajouter le profil
        compte.profil = profil;
    
        // Récupérer les comptes déjà enregistrés
        let comptes = JSON.parse(localStorage.getItem("comptes")) || [];

        // Ajouter le nouveau compte
        comptes.push(compte);

        // Enregistrer tous les comptes
        localStorage.setItem("comptes", JSON.stringify(comptes));

        localStorage.setItem(
         "utilisateurConnecte",
         JSON.stringify(compte)
        );

        let notification = document.querySelector("#notification");

        notification.textContent = "🎉 Inscription réussie !";

        notification.style.display = "block";

        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 8000);

        localStorage.setItem(
            "utilisateurConnecte",
            JSON.stringify(compte)
        );

        window.location.href = "dashboard.html";
    });

}


// ========================================
// CLIQUER SUR UN PROFIL
// ========================================

boutonsProfil.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        let profil = bouton.dataset.profil;

        // Cacher les boutons
        document.querySelector(".choix").style.display = "none";

        // Afficher le formulaire
        afficherFormulaire(profil);

    });

});

