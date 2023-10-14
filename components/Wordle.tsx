import { useState, useEffect } from "react";
import Grid from "./Grid";

const puzzle = [
  {id: 1, word: "BENCH", clue: "Long seat for several people"},
  {id: 2, word: "BEACH", clue: "Strip of land covered with sand"},
  {id: 3, word: "PEACH", clue: "Fruit with pinkish skin"},
  {id: 4, word: "PEACE", clue: "Tranquility"},
  {id: 5, word: "PLACE", clue: "Put in a particular position"},
  {id: 6, word: "PLANE", clue: "Flying vehicle with wings"}
];

export default function Wordle() {

  const [guess, setGuess] = useState("");
  const [step, setStep] = useState(0);


  useEffect(() => {
    console.log(guess, 'length', guess.length);
    const handleKeyup = function(e) {
      if (guess.length === 5 && e.key === 'Enter') {
        console.log('Submit guess');

        if (guess.toUpperCase() === puzzle[step].word.toUpperCase()) {
          setStep(prev => prev + 1);
          setGuess("");
        }
        return;
      }
      if (guess.length > 0 && e.key === 'Backspace') {
        setGuess(prev => prev.slice(0, prev.length - 1));
        return;
      }
      if (guess.length < 5 && e.key.match(/^[a-zA-Z]{1}$/)) {
        setGuess(prev => prev + e.key.toUpperCase());
      }
    };

    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [guess]);

  return (
    <div className="w-full max-w-2xl px-4 md:px-24 mt-20">
      {/* When the puzzle is coming in from an API we need to wait for it to load before rendering */}
      {puzzle && <Grid puzzle={puzzle} step={step} guess={guess} />}
      <p className="mt-4">Current guess: {guess}</p>
    </div>
  );
}
