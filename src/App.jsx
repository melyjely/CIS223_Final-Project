import { useEffect, useState } from "react";
import { BookList } from "./BookList";
import { NewBookLog } from "./NewBookLog";


// Tutorial START
// React components are created with functions that begin with a capital letter
export default function App() {
  // function version of useState, whatever you return is your default value
  // pass a function instead
  // use saved storage
  // checking local storage & getting value if it exists
  // else defaults to an empty arr
  // hooks need to be called at the top of the function!!!!
  const [books, setBooks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // Notes:
  // storing information in local storage
  // always runs the same # of hooks
  // hooks need to be called at the top of the function!!!!
  // cannot be in conditional statements, for loops, ifs
  // format is usually:
  // 1. hooks
  // 2. helper functions/parsing of data
  // 3. return JSX
  // Save the current list to local storage

  // useEffect
  // - doesn't return anything
  // - take a function as an arg
  // - "run this func every time the objects in the arr of second property change"

  // Save the current list to local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(books));
  }, [books]);

  // END TUTORIAL CODE

  // this function needs to be in the App component because the books state is here (line 15)
  function addBook(title, author, rating, date) {
    setBooks((currentBooks) => {
      // return the current list + the new entry
      // pass a function to the set state & function return the the value you want the new state to be
      // takes one argument - the current value
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

  // remove book entry from list
  function deleteBook(id) {
    // goes through all the books and finds the one that needs to be deleted
    setBooks((currentBooks) => {
      return currentBooks.filter((book) => book.id !== id);
    });
  }

  return (
    <>
      {/* form to log book */}
      {/* import component, rendered almost as if normal html */}
      {/* custom component syntax: capital letter */}
      <NewBookLog onSubmit={addBook} />
      {/* prop = onSubmit */}

      <div id="paperList">
        <h1 className="header">Book Log</h1>
        {/* entries are then added to the book log list */}
        <BookList books={books} deleteBook={deleteBook} />
      </div>
    </>
  );
}
