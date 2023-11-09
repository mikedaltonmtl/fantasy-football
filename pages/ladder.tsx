import wordList from "../app/targetWords";

export default function ladder({ nbWords, ladder }) {
  const puzzle = ladder.map(word => {
    return <li key="word">{word}</li>;
  });

  return (
    <main className="p-6">
      <p>ladder:</p>
      <ul>{puzzle}</ul>
      <p>word count: {nbWords}</p>
    </main>
  );
}

export const getServerSideProps = (() => {
  const nbWords = wordList.length;

  const getFirstWord = function() {
    const randomWordIndex = Math.floor(Math.random() * nbWords);
    return wordList[randomWordIndex];
  };

  const addWord = function(currentWord) {
    let allPossibles: string[] = [];

    for (let i = 0; i < 5; i++) {
      const possibles = wordList.filter(word => {
        return word.slice(0, i) === currentWord.slice(0, i)
          && word.slice(i + 1, 5) === currentWord.slice(i + 1, 5)
          && word !== currentWord
          && !ladder.includes(word);
      });

      if (possibles.length > 0) {
        allPossibles = allPossibles.concat(possibles);
      }
    } // end of for loop

    // If no possible next word could be found, return false
    if (allPossibles.length === 0) {
      console.log(currentWord, 'killed the ladder :(');
      return false;
    }

    // Choose next word at random from all possible array
    const chosenWord = allPossibles[Math.floor(Math.random() * allPossibles.length)];

    // Choose last possible word to cut down on first-letter changes (too easy)
    // const chosenWord = allPossibles[allPossibles.length - 1];

    console.log('word:', currentWord);
    console.log('allPossibles:', allPossibles);
    console.log('chosen: ', chosenWord);

    return chosenWord;
  };
  // add first word to ladder
  let ladder = [getFirstWord()];
  console.log('word:', ladder[0]);

  while (ladder.length < 5) {
    // Try to get the next word
    const nextWord = addWord(ladder[ladder.length - 1]);
    if (nextWord) {
      // Next word found, add to ladder
      ladder.push(nextWord);
    } else {
      // No word found, start again
      ladder = [getFirstWord()];
      console.log('reset:', ladder[0]);
    }
  }
  console.log('----------------');
  return { props: { nbWords, ladder } };
});

