// Declaration
function calculerSurface(longueur, largeur) {
  return longueur * largeur;
}

function estGrand(surface) {
  return surface >= 100;
}

// appel
let surface = calculerSurface(12, 4);
let grand = estGrand(surface);

// afichage
console.log(`Surface calculee:  ${surface} m²`);
console.log(`Grand piece: ${grand}`);
