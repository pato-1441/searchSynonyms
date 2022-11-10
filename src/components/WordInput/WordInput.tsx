import { useState } from "react";

type Props = {};

const WordInput = (props: Props) => {
  const [word, setWord] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="wordInput" className="text-2xl">
        Search Synonyms App
      </label>
      <input
        id="wordInput"
        onChange={(e) => setWord(e.target.value)}
        value={word}
        type="text"
        className="text-black px-2 py-1 rounded bg-gray-200 hover:bg-white focus:bg-white"
        placeholder="Insert a word to search for synonyms"
      />
    </div>
  );
};

export default WordInput;
