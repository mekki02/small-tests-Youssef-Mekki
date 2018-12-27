/* Language Chosen : JavaScript*/

/* 
Raisonnement de l'algorithme :
Supposant que les interrupteurs ont des indices de 1 jusqu'à 100.
Un interrupteur d'indice i subit un 'switch' à une itération j qui est parmis les diviseurs de l'indice i.
Si on part de l'état initial où les interrupteur sont tous à l'état OFF, à la fin de 100 itérations un interrupteur a subit 
le nombre des diviseurs de son indices.
Donc un interrupteur est ON s'il a subit un nombre impair de switch. 
L'algorithme consiste à la recherche du nombre de diviseur de l'indice de l'interrupteur puis incrémenter le nombre ON si 
le nombre de diviseur est impair.
*/

function solution() {
  let ON = 0;
  for (let i = 1; i <= 100; i++) {
    let nbDiviseur_i = chercherNombreDiviseur(i);
    if (nbDiviseur_i % 2 === 1) ON++;
  }
  console.log(ON);
  return ON;
}

function chercherNombreDiviseur(N) {
  let nombreDiviseur = 2;
  if (N === 1) nombreDiviseur = 1;
  else {
    for (let i = 2; i <= parseInt(N / 2); i++) {
      if (N % i === 0) nombreDiviseur++;
    }
  }
  return nombreDiviseur;
}
