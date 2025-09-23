import CompteBancaire from "./compteBancaire.js";

const comptes = [];

const creer = document.getElementById("bt_create");
const nom = document.getElementById("nom");

creer.addEventListener("click", function() {
    if (nom.value != "") {
        comptes.push(new CompteBancaire(nom.value, 0));
        console.log(comptes)
    } else {
        console.log("erreur")
    }
});

const crediter = document.getElementById("crediter");
const montant = document.getElementById("montant");
const compte = document.getElementById("compte");

crediter.addEventListener("click", function() {
    for (let i = 0; i < comptes.length; i++) {
        if (compte.value == comptes[i]) {
            comptes[i].solde += parseInt(montant.value);
            return console.log(comptes);
        }
    }
})

