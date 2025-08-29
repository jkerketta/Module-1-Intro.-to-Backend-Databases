import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
