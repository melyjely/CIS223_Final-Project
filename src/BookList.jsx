import { BookEntry } from "./BookEntry";

export function BookList({ books: books, deleteBook }) {
  
  return (
    <ul className="list">
      {books.length === 0 && "Nothing logged yet!"}

      {/* add logged book to list */}
      {books.map((book) => {
        return (
          <BookEntry
            {...book}
            key={book.id}
            
            deleteBook={deleteBook}
          />
        );
      })}
    </ul>
  );
}
