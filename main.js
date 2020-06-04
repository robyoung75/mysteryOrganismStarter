// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// console.log(returnRandBase()); // logs a random dnaBase

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function, returns an object with properties specimenNum and dna.

// mutate() i = a random number 0 - 14. base, calling the returnRandBase function gives the random base. The random number is used
// to select a random index from the dna array. If the random index is equal to the letter the letter is changed resulting in
// mutation. I return the mutated dna strand.



const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {  
      let i = Math.floor(Math.random() * 15); // generates a random number 0 - 14;      
      if (this.dna[i] === "A") {
        this.dna[i] = "T";
      } else if (this.dna[i] === "T") {
        this.dna[i] = "A";
      } else if (this.dna[i] === "C") {
        this.dna[i] = "G";
      } else {
        this.dna[i] = "C";
      }
      return this.dna;
    },
    compareDNA(pAequor) {
      let counter = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          counter++;
        }        
      } 
      console.log(`pAequor1 and pAequor have ${(counter / this.dna.length * 100).toFixed(0)}% of their elements in common`);      
    },
    willLikelySurvive() {
      let gCounter = 0;
      let cCounter = 0;
      let otherCounter = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === "G") {
          gCounter++;
          //console.log(gCounter);
        } else if(this.dna[i] === "C") {
          cCounter++;
          //console.log(cCounter);
        } else {
          otherCounter++;
        }
      }
      if ((gCounter / 15) * 100 >= 60 || (cCounter / 15) * 100 >= 60) {
        return true;
      } else {
        return false;
      }
      //console.log(gCounter);
      //console.log(cCounter);
    }    
  }
} 

let sample = [];
let i = 0;
while (sample.length < 30) {
  let benchMark = pAequorFactory(i, mockUpStrand());
  if (benchMark.willLikelySurvive() === true) {
    i++;
    sample.push(benchMark);    
    //console.log(sample);
    //console.log(i);
  }
}


let test1 = pAequorFactory(1, mockUpStrand()); // creates new object test1.
let test2 = pAequorFactory(2, mockUpStrand()); // creates new object test2.
console.log(sample); // logs sample, the DNA chains with a likelyhood of survival.
//console.log(test1); // logs test1 object.
//console.log(test1.mutate()); // Logs object test1 method, mutate();
//test1.compareDNA(test1) // call on object test1 with an arguement of test1 returns 100%. test2 as an argument will log another value.





