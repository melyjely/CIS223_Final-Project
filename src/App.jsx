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
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(books));
  }, [books]);

  // END

  function addBook(title) {
    // add ", author, rating, date" ?
    setBooks((currentBooks) => {
      return [
        ...currentBooks,
        {
          id: crypto.randomUUID(),
          title,
          // author,
          // rating,
          // date,
          completed: false,
        },
      ];
    });
  }

  // Tutorial START
  function toggleTodo(id, completed) {
    setBooks((currentBooks) => {
      return currentBooks.map((book) => {
        if (book.id === id) {
          return { ...book, completed };
        }
        return book;
      });
    });
  }
  // END

  function deleteBook(id) {
    setBooks((currentBooks) => {
      return currentBooks.filter((book) => book.id !== id);
    });
  }

  return (
    <>
      <NewBookLog onSubmit={addBook} />
      <h1 className="header">Reading Log</h1>
      <BookList books={books} toggleTodo={toggleTodo} deleteBook={deleteBook} />
    </>
  );
}
