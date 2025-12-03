import { useState } from "react";

export function NewBookLog({ onSubmit }) {
  // property destructured = { onSubmit }

  // changing the JSX = declaring what the app will do
  // In order to modify variables you need to use state

  // useState = hook
  // - takes a default value -> an empty string ""
  // - two values: what the value of the thing is & a function for updating value
  // - cannot update a state variable the way we normally would in JS & also it is a const
  // - update the input when it changes *see line 37*
  // - when you change a variable the component is rerendered every time

  const [newBook, setNewBook] = useState("");

  const [author, setAuthor] = useState("");

  const [rating, setRating] = useState(2.5);

  const [date, setDate] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (newBook === "") return; // if empty string, then return / do nothing

    // prop called
    onSubmit(newBook, author, rating, date); // create log for the book in the list

    setNewBook(""); // erase fields for next entry
  }
  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      {/* "class" cannot be used here since it is a reserved keyword so we need to replace that js keyword with "className" */}
      <div className="form-row">
        {/* React components can only return one element, if you was to return multiple, you can wrap everything in a div or a fragment. Ex. "<></>" */}
        <h1>Log your Books</h1>

        {/* normally would use "for" but since we are using JSX we use "htmlFor" */}
        <label htmlFor="book">Title</label>
        <input
          value={newBook}
          // onChange -> every time a key is pressed calls this
          // when a key is pressed, newBook is set to the value in the field rather than staying as an empty string
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
        <label htmlFor="rating">Rating</label>
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
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
