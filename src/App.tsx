import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-stone-900 text-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Search Synonyms App</h1>
        <input type="text" placeholder="Insert a word" />
      </div>
    </div>
  );
};

export default App;
