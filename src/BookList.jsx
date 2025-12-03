import { BookEntry } from "./bookEntry";

export function BookList({ books: books, deleteBook }) {
  // toggleTodo removed ^
  return (
    <ul className="list">
      {books.length === 0 && "Nothing logged yet!"}

      {/* add logged books to list */}
      {books.map((book) => {
        return (
          <BookEntry
            {...book}
            key={book.id}
            // toggleTodo={toggleTodo}
            deleteBook={deleteBook}
          />
        );
      })}
    </ul>
  );
}
