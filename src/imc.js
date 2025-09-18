export default class Imc {

    constructor(nomPersonne, poidsPersonne, taillePersonne) {
        this.nom = nomPersonne;
        this.poids = poidsPersonne;
        this.taille = taillePersonne;   
    }

    calculImc() {
        return Math.round((this.poids / (this.taille*this.taille)) * 100) / 100;
    }

    display() {
        console.log(`${this.nom} (${this.poids} kg, ${this.taille} M) a un IMC de : ${this.calculImc()}`);
    }

}
