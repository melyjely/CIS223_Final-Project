import { useState } from "react";

export function NewBookLog({ onSubmit }) {
  const [newBook, setNewBook] = useState("");

  const [author, setAuthor] = useState("");

  const [rating, setRating] = useState(2.5);

  const [date, setDate] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (newBook === "") return; // if empty string, then return / do nothing
    onSubmit(newBook, author, rating, date); // create log for the book in the list

    setNewBook(""); // erase fields for next entry
  }
  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <div className="form-row">
        <h1>Log your Books</h1>
        <label htmlFor="book">Title</label>
        <input
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          type="book"
          id="book"
        />
      </div>
      <div className="form-row">
        <label htmlFor="author">Author</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="author"
          id="author"
        />
      </div>
      <div className="form-row">
        <label htmlFor="rating">Rating: {rating}</label>
        <input
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
          type="range"
          id="rating"
          min="0"
          max="5"
          step="0.25"
        />
      </div>
      <div className="form-row">
        <label htmlFor="date">Date Finished</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="date"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
