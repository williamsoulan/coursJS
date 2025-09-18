export default class Vehicule {

    constructor(nomVehicule, nbrRoue, vitesse) {
        this.nom = nomVehicule;
        this.roue = nbrRoue;
        this.vit = vitesse;   
    }

    detect() {
        if (this.roue == 2) {
            return "moto";
        } else {
            return "voiture";
        }
    }

    boost() {
        return this.vit += 50;
    }
     
    plusRapide(vehicule) {
        if (this.vit > vehicule.vit) {
            return `Le vehicule ${this.nom} est le plus rapide`;
        } else  if (this.vit == vehicule.vit) {
            return `${this.nom} et ${vehicule.nom} ont la même vitesse`;
        } else {
            return `Le vehicule ${vehicule.nom} est le plus rapide`;
        }
    }
}