import React, {useState} from "react";
import "./App.css";
import {TodoTable} from "./components/TodoTable";
import {NewTodoForm} from "./components/NewTodoForm";

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "Eric" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User Three" },
    { rowNumber: 4, rowDescription: "Wash Car", rowAssigned: "User Four" }
  ]);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1; 
  
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
  
    setTodos(todos => [...todos, newTodo]);
  };
  
  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="App">
      <div className="mt-5 container">
        <div className="card">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className="btn btn-primary">
            {showAddTodoForm ? "Close New Todo" : "Add Todo"} 
          </button>
        {showAddTodoForm &&
          <NewTodoForm addTodo={addTodo}/>
        }
        </div>
      </div>
    </div>
  );
}