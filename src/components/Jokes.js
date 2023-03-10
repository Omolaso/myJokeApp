import React from "react";
import axios from "axios";
import laugh from "../images/laugh.svg";
import useSWR from "swr";
import Spinner from "./Spinner";
import ErrorMsg from "./ErrorMsg";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Jokes = () => {
  const { data, error, isLoading } = useSWR(
    "https://api.chucknorris.io/jokes/random",
    fetcher,
    { suspense: true, refreshInterval: 3500 }
  );

  const { value } = data;

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMsg />;

  return (
    <section>
      <div className="container">
        <h2>
          My Joke App
          <span>
            <img src={laugh} className="image2" alt="laugh" />
          </span>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: value }} id="joke" />
        {/* <button type="button">Next</button> */}
      </div>
    </section>
  );
};

export default Jokes;
