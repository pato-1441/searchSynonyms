import React, { useState } from "react";

type Props = {};

interface Synonym {
  word: string,
  score: number
}

const WordInput = (props: Props) => {
  let [wordInput, setWordInput] = useState<string>("");

  const [synonyms, setSynonyms] = useState<Array<Synonym>>([]);
  console.log(synonyms);

  const getSynonyms = async (e: React.FormEvent, word: string) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}&max=15`
    );
    const synonyms = await response.json();
    setWordInput(word)
    return setSynonyms(synonyms);
  };

  return (
    <div>
      <div>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => getSynonyms(e, wordInput)}
        >
          <label htmlFor="wordInput" className="text-2xl">
            Search Synonyms App
          </label>
          <div className="flex justify-between gap-2">
            <input
              id="wordInput"
              onChange={(e) => setWordInput(e.target.value)}
              value={wordInput}
              type="text"
              className="text-black px-2 py-1 rounded bg-gray-200 hover:bg-white focus:bg-white"
              placeholder="Insert a word to search for synonyms"
            />
            <button type="submit" className="px-2 py-1 rounded bg-gray-600">
              Go
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        {synonyms.length === 0 && <h2>- Results: 0</h2>}
        {synonyms.length > 0 && <h2 className="font-semibold">Results: {synonyms.length}</h2>}
        {synonyms.length > 0 &&
          synonyms.map((synonym) => (
            <ul>
              <li key={synonym.word}>- <span className='cursor-pointer hover:underline' onClick={(e)=>getSynonyms(e,synonym.word)}>{synonym.word}</span></li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default WordInput;
