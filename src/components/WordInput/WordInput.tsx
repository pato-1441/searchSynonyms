import React, { useState } from "react";

type Props = {};

interface Synonym {
  word: string;
  score: number;
}

const WordInput = (props: Props) => {
  let [wordInput, setWordInput] = useState<string>("");

  const [synonyms, setSynonyms] = useState<Array<Synonym>>([]);

  const getSynonyms = async (e: React.FormEvent, word: string) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}&max=20`
    );
    const synonyms = await response.json();
    setWordInput(word);
    return setSynonyms(synonyms);
  };

  return (
    <div className="mt-32">
      <div>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => getSynonyms(e, wordInput)}
        >
          <label
            htmlFor="wordInput"
            className="text-center font-semibold text-2xl"
          >
            Search Synonyms App
          </label>
          <div className="flex justify-between gap-2">
            <div className="rounded bg-white hover:bg-white focus:bg-white flex">
              <input
                id="wordInput"
                onChange={(e) => setWordInput(e.target.value)}
                value={wordInput}
                type="text"
                className="rounded text-black px-2 py-1"
                placeholder="fire"
              />
              {wordInput.length > 0 && (
                <button
                  onClick={() => setWordInput("")}
                  className="px-2 py-1 text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            <button
              type="submit"
              className="px-2 py-1 rounded bg-gray-600 hover:bg-gray-500"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        {synonyms.length === 0 && <h2>Results: 0</h2>}
        {synonyms.length > 0 && (
          <h2 className="">Results: {synonyms.length}</h2>
        )}
        <ul className="grid grid-cols-2 gap-2 mt-2">
          {synonyms.length > 0 &&
            synonyms.map((synonym) => (
              <li
                key={synonym.word}
                className="rounded bg-gray-600 px-2 py-1 cursor-pointer"
              >
                <div className="flex justify-between items-center" onClick={(e) => getSynonyms(e, synonym.word)}>
                  <span>
                    {synonym.word}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WordInput;
