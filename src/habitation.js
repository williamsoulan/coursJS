// class Bouteille {

//     // constructeur
//     constructor(nom_bouteille,contenance_bouteille,marque_bouteille, type_bouteille) {
//         // attribut
//         this.nom = nom_bouteille;
//         this.contenance = contenance_bouteille;
//         this.marque = marque_bouteille;
//         this.type = type_bouteille;
//     }
// }

// const eau = new Bouteille("eau", 50, "Vitel", "plastique");
// const soda = new Bouteille("canette coca", 33, "Coca Cola", "aluminium");

class Habitation {
    constructor(nom_maison, largeur_maison, longueur_maison, nombre_etage) {
        this.nom = nom_maison;
        this.largeur = largeur_maison;
        this.longueur = longueur_maison;
        this.nbrEtage = nombre_etage;
    }
    superficie() {
        return this.longueur * this.largeur * this.nbrEtage;
    }
}

const villa = new Habitation("villa", 15, 8, 3);
const maison = new Habitation("maison", 20, 12, 1);
const appartement = new Habitation("appartement", 10, 8, 1);

console.log(villa.superficie());
console.log(maison.superficie());
console.log(appartement.superficie());

console.log(`L'habitation ${villa.nom} à une superficie de ${villa.superficie()} m².`)
console.log(`L'habitation ${maison.nom} à une superficie de ${maison.superficie()} m².`)
console.log(`L'habitation ${appartement.nom} à une superficie de ${appartement.superficie()} m².`)