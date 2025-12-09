import { BookEntry } from "./BookEntry";

export function BookList({ books: books, deleteBook }) {
  
  return (
    <ul className="list">
      {/* short circuiting */}
      {books.length === 0 && "Nothing logged yet!"}

      {/* loops through and adds books into a map */}
      {books.map((book) => {
        return (
          <BookEntry
          // pass the properties of book spread out instead of writing "book.title" & "book.id"
            {...book}
            // need a key (unique identifier) so that react knows what book to update
            // performance optimization
            key={book.id}
            
            deleteBook={deleteBook}
          />
        );
      })}
    </ul>
  );
}
