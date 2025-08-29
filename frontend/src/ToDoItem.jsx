import { set } from "mongoose";
import Trash from "./assets/trash.jsx";

const ToDoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditValue(todo.title);
  };

  const handleSave = () => {
    if (editValue.trim() && editValue !== todo.title) {
      updateTodo(todo._id, editValue);
    }
    setIsEditing(false);
  };

  return (
    <div className="tasks">
      <input className="check" type="checkbox" />
      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
          />
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <div className="integer-urna">{todo.title}</div>
          <button onClick={handleEdit} className="edit-btn">
            Edit
          </button>
        </>
      )}
      <button onClick={() => deleteTodo(todo._id)} className="trash">
        <Trash />
      </button>
    </div>
  );
};

export default ToDoItem;
