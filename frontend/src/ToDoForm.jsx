import Plus from "./assets/Plus.jsx";

const ToDoForm = ({ newItem, setNewItem, addTodo }) => {
  return (
    <div className="todo">
      <form onSubmit={addTodo} className="new-task">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="input"
          placeholder="get sum shit done lil bro. write a todo"
        />
        <button className="button">
          <Plus />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
