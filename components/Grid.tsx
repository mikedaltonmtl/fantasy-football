import Row from "./Row";

export default function Grid({ puzzle, step, guess }) {

  // Only show the words that have been guessed and the clue to the next word
  const completedWords = puzzle.slice(0, step);
  // The guess needs to be 5 letters long to render the divs, pad with spaces
  // WOW! they though of that in ECMAScript2017!!!!!!
  const paddedGuess = guess.padEnd(5, ' ');

  return (
    <div>
      {step < 6 && <h2 className="text-center mb-4">{puzzle[step].clue}</h2>}

      {completedWords.map(wordObject => {
        return <Row key={wordObject.id} word={wordObject.word} guessed={true} />;
      })}

      {step < 6 && <Row word={paddedGuess} guessed={false} />}
      {step === 6 && (
        <h1>Congratulations!</h1>
      )}
    </div>
  );
}
