import CompteBancaire from "./compteBancaire.js";

const comptes = [];
const message = document.getElementById("message")
const creer = document.getElementById("bt_create");
const nom = document.getElementById("nom");

creer.addEventListener("click", function() {
    if (nom.value != "") {
        comptes.push(new CompteBancaire(nom.value, 0));
        console.log(comptes)
    } else {
         message.innerText = ("Remplissez les champs obligatoires");
    }
});

const crediter = document.getElementById("crediter");
const montant = document.getElementById("montant");
const compte = document.getElementById("compte");


crediter.addEventListener("click", function() {
    for (let i = 0; i < comptes.length; i++) {
        if (compte.value !== "" && montant.value !== "") {
            if (compte.value == comptes[i].nom) {
                comptes[i].solde += parseInt(montant.value);
                return console.log(comptes);
            }

        } else {
            message.innerText = ("Remplissez les champs obligatoires");
        }
    }
})

const retirer = document.getElementById("retirer");

retirer.addEventListener("click", function() {
    for (let i = 0; i < comptes.length; i++) {
        if (compte.value !== "" && montant.value !== "") {
            if (compte.value == comptes[i].nom && comptes[i].solde >= montant.value) {
                comptes[i].solde -= parseInt(montant.value);
                return console.log(comptes);
            } else {
                message.innerText = ("Solde insuffisant");
            }
        } else {
            message.innerText = ("Remplissez les champs obligatoires");
        }
    }
})

const virement = document.getElementById("bt_virement");
const source = document.getElementById("source");
const cible = document.getElementById("cible");
const montantVirement = document.getElementById("montant_virement")

virement.addEventListener("click", function() {
    for (let i = 0; i < comptes.length; i++) {
        if (source.value !== "" && cible.value !== "" && cible.value !== "") {
            if (source.value == comptes[i].nom && comptes[i].solde >= montantVirement.value) {
                    comptes[i].solde -= parseInt(montantVirement.value);
                    for (let j = 0; j < comptes.length; j++) {
                        if (cible.value == comptes[j].nom) {
                            comptes[j].solde += parseInt(montantVirement.value);
                            return console.log(comptes);
                        }
                    };
            } else {
                message.innerText = ("Solde insuffisant");
            }
        } else {
            message.innerText = ("Remplissez les champs obligatoires");
        }
    }   
});