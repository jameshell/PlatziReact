
//import './App.css';
import React from 'react';
// To import freely
// import TodoCounter from './TodoCounter';

// To import with restrictions
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";


const todos = [
  {
    text: 'Cortar Cebolla',
    isComplete: false
  },
  {
    text: 'Tomar el curso de Intro a React',
    isComplete: false
  },
  {
    text: 'Llorar con la llorona',
    isComplete: false
  }
];
function App() {
  return (
      <React.Fragment>
        <TodoCounter/>
          <TodoSearch/>
        <TodoList>
          {
            todos.map(todo => (<TodoItem key={todo.text} text={todo.text}/>))
          }
        </TodoList>
        <CreateTodoButton/>
      </React.Fragment>
  );
}

export default App;
