import { useEffect, useState } from "react";
// import { BookList } from "./BookList";
import { NewBookLog } from "./NewBookLog";
import { ToBeRead } from "./ToBeRead";

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

  function addBook(title, author) {
    // add ", author, rating, date" ?
    setBooks((currentTBR) => {
      // return the current list + the new entry
      return [
        ...currentTBR,
        {
          id: crypto.randomUUID(),
          title,
          author,
          completed: false,
        },
      ];
    });
  }

  function finishBook(title, author) {
    // add "rating, date" ?
    setBooks((finishedBooks) => {
      // return the current list + the finished book
      return [
        ...finishedBooks,
        {
          id: crypto.randomUUID(),
          title,
          author,
          // rating,
          // date,
          completed: false,
        },
      ];
    });
  }

  // Tutorial START
  function toggleRead(id, completed) {
    setBooks((currentTBR) => {
      return currentTBR.map((book) => {
        if (book.id === id) {
          return { ...book, completed };
        }
        return book;
      });
    });
  }
  // END

  // remove book entry
  function deleteBook(id) {
    setBooks((currentTBR) => {
      return currentTBR.filter((book) => book.id !== id);
    });
  }

  return (
    <>
      {/* form to log book */}
      <div id="form">
        <NewBookLog onSubmit={addBook} />
      </div>

      <div id="paperList">
        {/* <section> */}
          <h1 className="header">To Be Read</h1>
          {/* entries are then added to the book log list */}
          <ToBeRead
            onSubmit={finishBook}
            books={books}
            toggleRead={toggleRead}
            deleteBook={deleteBook}
          />
        {/* </section> */}

        {/* <section> */}
          {/* <h1 className="header">Finished Books</h1> */}
          {/* <BookList
          finishedBooks={finishedBooks}
          toggleRead={toggleRead}
          deleteBook={deleteBook}
          /> */}
        {/* </section> */}
      </div>
      {/* removed "toggleRead={toggleRead}"^ */}
    </>
  );
}
