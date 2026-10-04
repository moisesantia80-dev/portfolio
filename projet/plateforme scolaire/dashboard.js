let utilisateur = JSON.parse(
    localStorage.getItem("utilisateurConnecte")
);


// Vérifier si un utilisateur est connecté
if (!utilisateur) {

    window.location.href = "connexion.html";

} else {

    // Afficher le nom
    let bienvenue = document.querySelector("#bienvenue");

    bienvenue.textContent =
        "🎉 Inscription réussie ! Bienvenue " +
        utilisateur.prenom +
        " " +
        utilisateur.nom +
        " 👋";


    // Récupérer la zone du profil
    let contenuProfil = document.querySelector("#contenu-profil");


    // ==============================
    // ÉTUDIANT
    // ==============================

    if (utilisateur.profil === "etudiant") {

        contenuProfil.innerHTML = `
            <h2> Espace Étudiant</h2>

            <p><strong>Email :</strong> ${utilisateur.email}</p>

            <p><strong>Classe :</strong> ${utilisateur.classe}</p>

            <p><strong>Matricule :</strong> ${utilisateur.matricule}</p>
        `;
    }


    // ==============================
    // ENSEIGNANT
    // ==============================

    if (utilisateur.profil === "enseignant") {

        contenuProfil.innerHTML = `
            <h2> Espace Enseignant</h2>

            <p><strong>Email :</strong> ${utilisateur.email}</p>

            <p><strong>Téléphone :</strong> ${utilisateur.telephone}</p>

            <p><strong>Matière :</strong> ${utilisateur.matiere}</p>
        `;
    }


    // ==============================
    // PARENT
    // ==============================

    if (utilisateur.profil === "parent") {

        contenuProfil.innerHTML = `
            <h2> Espace Parent</h2>

            <p><strong>Email :</strong> ${utilisateur.email}</p>

            <p><strong>Téléphone :</strong> ${utilisateur.telephone}</p>

            <p><strong>Enfant :</strong> ${utilisateur.nomEnfant}</p>

            <p><strong>Classe :</strong> ${utilisateur.classeEnfant}</p>
        `;
    }

}


// ==============================
// DÉCONNEXION
// ==============================

let boutonDeconnexion =
    document.querySelector("#deconnexion");


boutonDeconnexion.addEventListener("click", function() {

    localStorage.removeItem("utilisateurConnecte");

    window.location.href = "connexion.html";

});