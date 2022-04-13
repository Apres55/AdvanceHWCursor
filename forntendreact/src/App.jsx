import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';

const initTodos = [
  {
    value: "Buy milk",
    id: 'milk'
  },
  {
    value: "learn react",
    id: 'react'
  },
  {
    value: "start sport",
    id: 'sport'
  },
  ];

function App() {
  const [todos, setTodos] = useState(initTodos)

  
    const removeListItem = (id) => {
      setTodos(todos.filter((todo) => {
        return todo.id !== id;
      }));
    }

    const clearListHandler = () => {
      setTodos([]);
    }


  return (
    <div className="App">
      <h1>To do List</h1>
      <TodoList todos={todos} removeListItem = {removeListItem}/>
      <button onClick={clearListHandler}>Delete all</button>
    </div>
  );
}

export default App;
