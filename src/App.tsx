import Footer from "./components/Footer/Footer";
import WordInput from "./components/WordInput/WordInput";

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-stone-900 text-white text-xl">
      <WordInput />
      <Footer />
    </div>
  );
};

export default App;
