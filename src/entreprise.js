export class Employee {

    constructor(nom, prenom, age, salaireMensuel) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaireMensuel;
    }

    coutAnnuel() {
        let n = 12;
        let xxx = 1.9;

        return this.salaire * n * xxx;
    }
}

export class Pme {

    constructor(nom, equipe, revenus, fraisFixes, fraisAchats) {
        this.nom = nom;
        this.equipe = equipe;
        this.revenus = revenus;  
        this.ff = fraisFixes;
        this.fa = fraisAchats; 
    }

    // coutAnnuelEmployee() {
    //     let total = 0;

    //     for (let i = 0; i < this.equipe.length; i++) {
    //     total += this.equipe[i].coutAnnuel();
    //     }
    //     return total;
    // }

    coutAnnuelEmployee() {
        let total = 0;

        for (let employe of this.equipe) {
        total +=  employe.coutAnnuel()
        }
        
        return total;
    }

    bilanAnnuelPme() {
        return this.revenus - (this.coutAnnuelEmployee() + this.ff + this.fa);
    }

    bilanCalculed() {
        console.log(`${this.nom} : Cout Initial : ${this.ff+this.fa}`);
        console.log(`${this.nom} : Cout Total Equipe : ${this.coutAnnuelEmployee()}`);
        console.log(`${this.nom} : VENTES : ${this.revenus}`);
        console.log(`${this.nom} : BILAN : ${this.bilanAnnuelPme()}`)
    }
}