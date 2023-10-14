export default function Row({ word, guessed }) {
  const boxFormat = guessed ? "bg-[#6AAA64] text-white" : "border-2 border-gray-500";

  return (
    <div className="flex justify-center">
      {word.split('').map((letter, i) => {
        return (
          <div key={i} className={`${boxFormat} block w-[52px] h-[52px] leading-[52px] m-1 text-center uppercase font-extrabold text-[2em]`}>
            {letter}
          </div>
        );
      })}
    </div>
  );
}
