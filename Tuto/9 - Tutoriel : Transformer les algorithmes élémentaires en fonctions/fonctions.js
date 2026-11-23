// Declaration
function calculerMoyenne(notes) {
  let some = 0;

  for (let i = 0; i < notes.length; i++) {
    some += notes[i];
  }
  return some / notes.length;
}

// appel
let groupeA = [12, 14, 16];
let groupeB = [10, 18, 11, 13];

let moyenneA = calculerMoyenne(groupeA);
let moyenneB = calculerMoyenne(groupeB);

// afichage
console.log(`la moyenne du groupe A est ${moyenneA}`);
console.log(`la moyenne du groupe B est ${moyenneB}`);

