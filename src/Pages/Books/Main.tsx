import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Button } from "@material-tailwind/react";

const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [bookData, setData] = useState<any[]>([]);

  const searchBook = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${
          import.meta.env.VITE_BOOK_KEY
        }&maxResults=40`
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="header font-montserrat ">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2 font-montserrat sm:flex-col overflow-visible ">
          <h2>Find Your Book</h2>
          <div className="search font-montserrat  ">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              className="font-montserrat"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <div onClick={searchBook}>
              <Button variant="outlined" className="border-s-violet-50 ml-5">
                {" "}
                Search
              </Button>
            </div>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      <div className="container1">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
