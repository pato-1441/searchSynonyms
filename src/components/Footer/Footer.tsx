import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 mb-6 flex gap-2 font-semibold">
      <button className="text-base px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-lg">
        Github
      </button>
      <button className="text-base px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-lg">
        LinkedIn
      </button>
    </div>
  );
};

export default Footer;
