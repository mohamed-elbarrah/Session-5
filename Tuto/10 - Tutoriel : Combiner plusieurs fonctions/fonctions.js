// Declaration
function calculerSomme(notes) {
  let somme = 0;

  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }
  return somme;
}

function trouverMax(notes) {
  let max = notes[0];

  for (let i = 0; i < notes.length; i++) {
    if (notes[i] > max) {
      max = notes[i];
    }
  }
  return max;
}

function calculerMoyenne(notes) {
  let somme = calculerSomme(notes);

  return somme / notes.length;
}

// appel
let notes = [12, 14, 16];

let moyenne = calculerMoyenne(notes);
let noteMax = trouverMax(notes);

// afichage
console.log(`=== BILAN DE CLASSE ===`);
console.log(`la moyenne : ${moyenne} / 20`);
console.log(`la Meilleure note :  ${noteMax} / 20`);
