export function BookEntry({
  completed,
  id,
  title,
  author,
  rating,
  date,
  // toggleTodo,
  deleteBook,
}) {
  return (
    <li>
      {/* Tutorial START */}
      <label>
        {/* <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        /> */}
        {title}
      </label>
      {/* Tutorial END */}

      <label> by {author}</label>
      <label> Rating: {rating}</label>
      <label> Finished on {date} </label>
      {/* date format changes when logged */}

      <button onClick={() => deleteBook(id)} className="btn">
        Delete
      </button>
    </li>
  );
}
