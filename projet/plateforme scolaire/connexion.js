// Récupérer le formulaire
let formulaireConnexion = document.querySelector("#formulaireConnexion");

// Récupérer la zone de message
let message = document.querySelector("#message");


formulaireConnexion.addEventListener("submit", function(event) {

    event.preventDefault();

    // Récupérer les informations saisies
    let email = document.querySelector("#email").value.trim();
    let motDePasse = document.querySelector("#motDePasse").value;


    // Vérifier les champs
    if (email === "" || motDePasse === "") {

        message.textContent = "⚠️ Veuillez remplir tous les champs.";

        return;
    }


    // Récupérer les comptes
    let comptes = JSON.parse(localStorage.getItem("comptes")) || [];


    console.log("Comptes enregistrés :", comptes);

  
    console.log("Email saisi :", email);
    console.log("Mot de passe saisi :", motDePasse);
    console.log("Email enregistré :", comptes[0].email);
    console.log("Mot de passe enregistré :", comptes[0].motDePasse);

 
    // Rechercher le compte
    let compte = comptes.find(function(compte) {

        return compte.email === email &&
               compte.motDePasse === motDePasse;

    });


    


  if (compte) {

        message.textContent = "✅ Connexion réussie !";

        console.log("Compte connecté :", compte);

        // Enregistrer l'utilisateur connecté
        localStorage.setItem(
            "utilisateurConnecte",
            JSON.stringify(compte)
        );

        // Rediriger vers le tableau de bord
        window.location.href = "dashboard.html";

    } else {

        message.textContent = "❌ Email ou mot de passe incorrect.";

    }

});