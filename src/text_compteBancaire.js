import CompteBancaire from "./compteBancaire.js";
import DOMPurify from 'dompurify';

const comptes = [];
const message = document.getElementById("message")
const creer = document.getElementById("bt_create");
const nom = document.getElementById("nom");

creer.addEventListener("click", function() {
    const nomSecurise = DOMPurify.sanitize(nom.value);

    if (nomSecurise !== "") {
        comptes.push(new CompteBancaire(nomSecurise, 0));
        console.log(comptes);
    } else {
         message.innerText = ("Remplissez les champs obligatoires");
    }
});

const crediter = document.getElementById("crediter");
const montant = document.getElementById("montant");
const compte = document.getElementById("compte");

crediter.addEventListener("click", function() {
    const compteSecurise = DOMPurify.sanitize(compte.value);
    const montantSecurise = DOMPurify.sanitize(montant.value);

    for (let i = 0; i < comptes.length; i++) {
        if (compteSecurise !== "" && montantSecurise !== "") {
            if (compteSecurise == comptes[i].nom) {
                comptes[i].solde += parseInt(montantSecurise);
                return console.log(comptes);
            }

        } else {
            message.innerText = ("Remplissez les champs obligatoires");
        }
    }
})

const retirer = document.getElementById("retirer");

retirer.addEventListener("click", function() {
    const compteSecurise = DOMPurify.sanitize(compte.value);
    const montantSecurise = DOMPurify.sanitize(montant.value);

    for (let i = 0; i < comptes.length; i++) {
        if (compteSecurise !== "" && montantSecurise !== "") {
            if (compteSecurise == comptes[i].nom && comptes[i].solde >= montantSecurise) {
                comptes[i].solde -= parseInt(montantSecurise);
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
    const sourceSecurise = DOMPurify.sanitize(source.value);
    const cibleSecurise = DOMPurify.sanitize(cible.value);
    const virementSecurise = DOMPurify.sanitize(montantVirement.value);

    for (let i = 0; i < comptes.length; i++) {
        if (sourceSecurise !== "" && cibleSecurise !== "") {
            if (sourceSecurise == comptes[i].nom && comptes[i].solde >= virementSecurise) {
                    comptes[i].solde -= parseInt(virementSecurise);
                    for (let j = 0; j < comptes.length; j++) {
                        if (cibleSecurise == comptes[j].nom) {
                            comptes[j].solde += parseInt(virementSecurise);
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