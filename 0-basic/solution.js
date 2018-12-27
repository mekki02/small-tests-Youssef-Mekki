/* Language Chosen : JavaScript*/ 

function solution() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("number = ",i, "||output :","babasport");
    else if (i % 3 === 0) console.log("number = ",i, "||output :","baba");
    else if (i % 5 === 0) console.log("number = ",i, "||output :","sport");
    else console.log("number = ",i, "||output :",i);
  }
}