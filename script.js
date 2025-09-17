const nomProduit = document.getElementById("nom_produit");
const quantité = document.getElementById("id_quantite");
const prixHt = document.getElementById("id_prix_ht");
const monBouton = document.getElementById("id_calculer");
const resultat = document.getElementById("resultat");

monBouton.addEventListener("click", function(event) {
    event.preventDefault();
    if (nomProduit.value.trim() !== "" && quantité.value.trim() !== "" && prixHt.value.trim() !== "") {
        resultat.innerText = quantité.value*prixHt.value;
    } else {
        resultat.innerText = "Veuillez remplir tous les champs obligatoires";
    }
})