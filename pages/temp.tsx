import wordList from "../app/targetWords";

export default function Temp({ nbWords, ladder }) {
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
  let ladder: string[] = [];
  const test = ['teens'];

  console.log('testing word', test);


  test.forEach(currentWord => {
    let allPossibles: string[] = [];
    
    for (let i = 0; i < 5; i++) {
      const possibles = wordList.filter(word => {
        return word.slice(0, i) === currentWord.slice(0, i)
            && word.slice(i + 1, 5) === currentWord.slice(i + 1, 5)
            && word !== currentWord
            && !ladder.includes(word);
      });

      console.log('i', i, 'p.length', possibles.length);

      if (possibles.length > 0) {
        allPossibles = allPossibles.concat(possibles);
        console.log('allPossibles', allPossibles, 'index', i);
        console.log('possibles', possibles, 'index', i);

        for (let j = 0; j < possibles.length; j++) {
          console.log('possible for index', i, ':', possibles[j]);
        }
      } else {
        console.log('no possibles for index', i);
      }
    }
    console.log('final possibles', allPossibles);
    ladder = ladder.concat(allPossibles);
    if (ladder.length === 0) {
      console.log('delete:', currentWord);
    } else {
      console.log(currentWord, ladder.length);
    }
    ladder = [];
    return ladder;
  });

  return { props: { nbWords, ladder } };
});
