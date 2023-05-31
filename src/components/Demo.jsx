import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick, submitArrow } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    alert("Submitted");
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setArticle({ ...article, url: e.target.value });
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        {/* input form  */}
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => handleInputChange(e)}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn
            peer-focus:border-gray-700 peer-focus:text-gray-700
          "
          >
            <img src={submitArrow} alt="send_icon" className="w-4" />
          </button>
        </form>

        {/* url history  */}

        {/* results display  */}
      </div>
    </section>
  );
};

export default Demo;
