import React, { useState } from "react";
import Modal from "./Modal";

interface BookItem {
  volumeInfo: {
    title: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };
  saleInfo: {
    listPrice?: {
      amount: number;
    };
  };
}

interface CardProps {
  book: BookItem[];
}

const Card: React.FC<CardProps> = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState<BookItem | null>(null);

  return (
    <>
      {book.map((item) => {
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        const amount =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <React.Fragment key={item.volumeInfo.title}>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </React.Fragment>
          );
        }
        return null;
      })}
    </>
  );
};

export default Card;
