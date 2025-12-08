import { useEffect, useState } from "react";
import { BookList } from "./BookList";
import { NewBookLog } from "./NewBookLog";

// Tutorial START
export default function App() {
  const [books, setBooks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // Notes:
  // storing information in local storage
  // hooks need to be called at the top of the function
  // always runs the same # of hooks
  // cannot be in conditional statements, for loops, ifs

  // Save the current list to local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(books));
  }, [books]);

  // END

  function addBook(title, author, rating, date) {
    // add ", author, rating, date" ?
    setBooks((currentBooks) => {
      // return the current list + the new entry
      return [
        ...currentBooks,
        {
          id: crypto.randomUUID(),
          title,
          author,
          rating,
          date,
        },
      ];
    });
  }


  // remove book entry
  function deleteBook(id) {
    setBooks((currentBooks) => {
      return currentBooks.filter((book) => book.id !== id);
    });
  }

  return (
    <>
      {/* form to log book */}
      <NewBookLog onSubmit={addBook} />

      <div id="paperList">
        <h1 className="header">Book Log</h1>
        {/* entries are then added to the book log list */}
        <BookList books={books} deleteBook={deleteBook} />
      </div>
      {/* removed "toggleTodo={toggleTodo}"^ */}
    </>
  );
}
