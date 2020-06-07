// DNA Mutation Object:

// factory function pAequorFactory, returns an object with properties specimenNum and dna.

/*
.mutate() method: is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. 
Then .mutate() will return the object’s dna. For example, if the randomly selected base is the 1st base and it is 'A', the base 
must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

i = a random number 0 - 14. base, calling the returnRandBase function gives the random base. The random number is used
to select a random index from the dna array. If the random index is equal to the letter the letter is changed resulting in
mutation. I return the mutated dna strand.
*/

/*
compareDNA() method: The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna 
and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message 
that states the percentage of DNA the two objects have in common
*/

/*
willLikelySurvive() method: returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. 
Otherwise, .willLikelySurvive() returns false.
*/

/*
.complementStrand() method to the factory function’s object that returns the complementary DNA strand. 
The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. 
Use the .compareDNA() to find the two most related instances of pAequor.
*/


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
      console.log(`Test pAequor and pAequor have ${(counter / this.dna.length * 100).toFixed(0)}% of their elements in common`);      
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
    },
    complementStrand(pAequor) {
      let newComplementDNA = [];
      for (let i = 0; i < 15; i++) {
        if (pAequor.dna[i] === "T") {
          this.dna[i] = "A";
          newComplementDNA.push(this.dna[i]);
        } else if (pAequor.dna[i] === "A") {
          this.dna[i] = "T";
          newComplementDNA.push(this.dna[i]);
        } else if (pAequor.dna[i] === "G") {
          this.dna[i] = "C";
          newComplementDNA.push(this.dna[i]);
        } else {
          this.dna[i] = "G";
          newComplementDNA.push(this.dna[i]);
        }              
      }
     //console.log(newComplementDNA); 
     return newComplementDNA;      
    } //end of object properties   
  } 
}

// creates 30 instances of pAequor
let sample = [];
let i = 0;
while (sample.length < 30) {
  let benchMark = pAequorFactory(i, mockUpStrand());
  if (benchMark.willLikelySurvive() === true) {
    i++;
    sample.push(benchMark);    
  }
}

let pAequor1 = pAequorFactory(1, mockUpStrand()); // creates new object test1.
let pAequor2 = pAequorFactory(2, mockUpStrand()); // creates new object test2.

//console.log(pAequor1); // logs pAequor1 object.
console.log(pAequor1.dna); // logs object pAequor1 dna.
console.log(pAequor1.mutate()); // Logs object pAequor1 method, mutate();
//pAequor1.compareDNA(pAequor1) // call on object pAequor1 with an arguement of pAequor1 returns 100%. test2 as an argument will log another value.
//console.log(sample); // logs sample, the DNA chains with a likelyhood of survival.
//pAequor1.complementStrand(pAequor1); // call on object pAequor1 with an argument of pAequor1. Logs a complemtary DNA strand.






