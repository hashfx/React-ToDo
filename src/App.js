import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';  // useState hook
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  // when the app is initialised, check for existing todos from the local storage
  let initTodo;
  if (localStorage.getItem("todos") === null) {  // if NULL
    initTodo = []  // initialise an empty array
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("onDelete Clicked for: ", todo)
    // deleting following way does not work in React
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)  // deletes 1 item from the list

    // delete todo items
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    console.log("Deleted: ", todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  // add todo with their title and desc to todos list
  const addTodo = (title, desc) => {
    console.log("addTodo Working for ", title, desc)
    let sno;  // define sno at global block level
    // if there is no prior todo
    if (todos.length === 0) {
      sno = 0  // set sno(todo)=0
    } else {  // set todo sno as formula
      sno = todos[todos.length - 1].sno + 1  // serial number of ({serial number of last todo}+1)
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    // update added todo to DOM
    setTodos([...todos, myTodo])  // add new todo to existing array of todos
    console.log(myTodo)  // display myTodo

  }

  /*  // default manually added todos
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
  */

  // using local storage to store and retrieve todos
  // when the app is initialised
  const [todos, setTodos] = useState(initTodo);  // pass empty array to todos
  useEffect(() => {  // saves todos to local storage
    // save todo to local storage as they are added
    localStorage.setItem("todos", JSON.stringify(todos))  // set todos to "todos"
  }, [todos])  // as soon as todos is changed, run above useEffect
  return (
    <>
      <Header title="Todos List" searchBar={false} />
      <AddTodo AddTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
