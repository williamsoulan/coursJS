export default class compteBancaire {

    constructor(nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }

    retrait(montant) {
        if (this.solde >= montant) {
            console.log(`Retrait de : ${montant} pour ${this.nom}`);
            return this.solde -= montant;
        } else {
            throw new Error(`----> ${this.nom}, retrait de : ${montant} refusé avec solde :  ${this.solde}`);
        }
    }

    depot(montant) {
        if (montant > 0) {
            console.log(`Ajout de : ${montant} pour ${this.nom}`);
            return this.solde += montant;
        } else {
            throw new Error(`----> ${this.nom}, ajout de : ${montant} refusé`);
        }
    }

    virement(destinataire, montant) {
        if (this.solde >= montant ) {
            console.log(`Virement de: ${montant} de: ${this.nom} vers: ${destinataire.nom}`);
            this.retrait(montant);
            destinataire.depot(montant);
        } else {
            throw new Error(`Solde de ${this.nom} insuffisant pour le virement de ${montant} à ${destinataire.nom}`);
        }
    }

    display() {
        console.log(`titulaire: ${this.nom}, solde: ${this.solde}`)
    }
}
