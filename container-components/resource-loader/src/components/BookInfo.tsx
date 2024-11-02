import React from "react";

export interface Book {
    id: string;
    name: string;
    price: number;
    title: string;
    pages: number;
}

export interface BookInfoProps {
    book?:Book;
}

const BookInfo: React.FC<BookInfoProps> = ({ book }) => {
    const { name, price, title, pages } = book || {};

    return book ? (
        <React.Fragment>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>{`Title: ${title}`}</h3>
            <p>{`Number of Pages: ${pages}`}</p>
        </React.Fragment>
    ) : (
        <h1>{"Loading..."}</h1>
    );
};

export default BookInfo;
