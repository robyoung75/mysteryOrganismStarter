// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function, returns an object with properties specimenNum and dna.
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
  };
}

// console.log(pAequorFactory(1, mockUpStrand()));
/* logs 
{ specimenNum: 1,
  dna:
  [ 'A', 'A', 'A', 'C', 'T', 'T', 'A', 'T', 'A', 'T', 'A', 'T', 'C', 'C', 'G' ]
}
*/




