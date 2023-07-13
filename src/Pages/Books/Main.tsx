import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [bookData, setData] = useState<any[]>([]);

  const searchBook = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyB-ZEU7i5BwwBRZGiquvEVNOOSysUBY0Fk" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header font-montserrat">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      <div className="container1">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
