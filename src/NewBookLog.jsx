import { useState } from "react";

export function NewBookLog({ onSubmit }) {
  const [newBook, setNewBook] = useState("");

  const [author, setAuthor] = useState("");

  // const [rating, setRating] = useState(2.5);


  function handleSubmit(e) {
    e.preventDefault();
    if (newBook === "") return; // if empty string, then return / do nothing
    // onSubmit(newBook, author);
    onSubmit(newBook, author); // create log for the book in the list

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

        <label htmlFor="author">Author</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="author"
          id="author"
        />
        {/* <label htmlFor="rating">Rating</label>
        <input
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
          type="range"
          id="rating"
          min="0"
          max="5"
        />
        <label htmlFor="date">Date Finished</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="date"
        /> */}
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
