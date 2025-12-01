import { BookEntry } from "./bookEntry";

export function ToBeRead({ books: books, toggleRead, deleteBook }) {
  // toggleRead removed ^
  return (
    <ul className="list">
      {books.length === 0 && "Nothing on your list yet!"}

      {/* add logged books to list */}
      {books.map((book) => {
        return (
          <BookEntry
            {...book}
            key={book.id}
            toggleRead={toggleRead}
            deleteBook={deleteBook}
          />
        );
      })}
    </ul>
  );
}
