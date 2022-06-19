import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';  // useState hook

function App() {
  const onDelete = (todo) => {
    console.log("onDelete Clicked for: ", todo)
    // deleting following way does not wor in React
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)  // deletes 1 item from the list

    // delete todo items
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  // 
  const [todos, setTodos] = useState([  // setTodos is a function to update todos
    {
      sno: 1,
      title: "Todo1",
      desc: "Yay, First"
    },
    {
      sno: 2,
      title: "Todo 2",
      desc: "Great"
    },
    {
      sno: 3,
      title: "Third Todo",
      desc: "Do it"
    }
  ]);
  return (
    <>
      <Header title="Todos List App" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
