type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 mb-6 flex gap-2 font-semibold">
      <a
        target="_blank"
        href="https://github.com/pato-1441"
        className="text-base px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-lg"
      >
        Github
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/patoalbornoz/"
        className="text-base px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-lg"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Footer;
