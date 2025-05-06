function printWord3(sentence) {
  // Validate end of sentence.
  if (!sentence.endsWith('.')) {
    throw new Error("Sentence must end in period.");
  }
  // Validate length of word.
  function isNonBlank(word) {
    return word !== '';
  }
  const sentenceArray = sentence
    .split(' ')
    .filter(isNonBlank);
  if (sentenceArray.length < 5) {
    throw new Error(`Length of sentence must be at least five. Your sentence-length: ${sentenceArray.length}`);
  }
  console.log(`Word 3 of the given sentence is: '${sentenceArray[2]}'`);
}

const mySentence1 = "The sun is shining bright today.";
const mySentence = "Bacon and eggs are delicious.";
console.log(`printWord3('${mySentence}'):`);
printWord3(mySentence);
