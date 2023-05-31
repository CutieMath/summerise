import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sums_logo" className="w-20 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/CutieMath/summerise")}
          className="black_btn"
        >
          GitHub Repo
        </button>
      </nav>

      <h1 className="head_text">
        Summarise websites with <br className="max-md:hidden" />
        <span className="pink_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Transform lengthy articles into concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
