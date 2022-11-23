import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 mb-6 flex gap-2 font-semibold">
      <div className="text-base px-2 py-1 bg-neutral-800 rounded-lg">
        Github
      </div>
      <div className="text-base px-2 py-1 bg-blue-500 rounded-lg">
        LinkedIn
      </div>
    </div>
  );
};

export default Footer;
