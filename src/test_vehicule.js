import Vehicule from './vehicule.js';

const voiture = new Vehicule("Mercedes CLK", 4, 250);
const moto = new Vehicule("Honda CBR", 2, 280);

console.log(voiture);
console.log(moto);

voiture.detect();
moto.detect();

console.log(voiture.detect());
console.log(moto.detect());

voiture.boost();
console.log(voiture.vit);

voiture.plusRapide(voiture);
console.log(voiture.plusRapide(voiture))