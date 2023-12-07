import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);

  const changeHandler = (event) => {
    setTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = [...todo, task];
    if (task === "") {
      alert("Enter your task");
    } else {
      setTodo(newTodo);
      setTask("");
    }
    // setTodo(newTodo)
    // setTask("")
    // console.log(task)
  };
  const deleteHandler = (indexValue) => {
    const deleteTodo = todo.filter((item, index) => index !== indexValue);

    setTodo([...deleteTodo]);
  };

  const editHandler = (index) => {
    setTask(todo[index]);
    setEditedIndex(index);
  };
  const updateTodo = () => {
    const updatedTodos = [...todo];
    updatedTodos[editedIndex] = task;
    setTodo(updatedTodos);
    setEditedIndex(null);
    setTask("");
  };

  return (
    <div class="bgcont">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Todo Application</h1>

          {editedIndex === null ? (
            <form onSubmit={submitHandler}>
              <input
                class="inputField"
                type="text"
                placeholder="Enter your Task here..."
                name="task"
                value={task}
                onChange={changeHandler}
              />
              <input type="submit" value="Add" name="Add" />
              <h3>Your Tasks goes here</h3>
            </form>
          ) : (
            <div>
              <input
                class="inputField"
                type="text"
                placeholder="Edit your Task..."
                name="task"
                value={task}
                onChange={changeHandler}
              />
              <button onClick={updateTodo}>Update</button>
              <button
                onClick={() => {
                  setEditedIndex(null);
                  setTask("");
                }}
              >
                Cancel
              </button>
            </div>
          )}

          <TodoList
            todoItem={todo}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
