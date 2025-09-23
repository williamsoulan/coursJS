import compteBancaire from './banque'

const alex = new compteBancaire("Alex", 0);
const clovis = new compteBancaire("Clovis", 0);
const marco = new compteBancaire("Marco", 0);

const clients = [alex, clovis, marco]

alex.depot(1000);
clovis.depot(1000);
marco.depot(1000);
alex.retrait(100);
marco.virement(clovis, 300);

try {
alex.retrait(1200);
} catch(error) {
    console.log(error.message)
}

alex.display();
clovis.display();
marco.display();
