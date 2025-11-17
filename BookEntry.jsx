export function BookEntry({ completed, id, title, toggleTodo, deleteBook }) {
  return (
    <li>
      {/* Tutorial START */}
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      {/* Tutorial END */}
      <label>{author}</label>
      <label>{rating}</label>
      <label>{date}</label>

      <button onClick={() => deleteBook(id)} className="btn">
        Delete
      </button>
    </li>
  );
}
