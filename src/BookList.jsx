// export function BookList({
//   finishedBooks: finishedBooks,
//   toggleRead,
//   deleteBook,
// }) {
//   // toggleRead removed ^
//   return (
//     <ul className="list">
//       {finishedBooks.length === 0 && "Nothing finished yet!"}

//       {/* add logged finishedBooks to list */}
//       {finishedBooks.map((book) => {
//         return (
//           <ToBeRead
//             {...book}
//             key={book.id}
//             toggleRead={toggleRead}
//             deleteBook={deleteBook}
//           />
//         );
//       })}
//     </ul>
//   );
// }
