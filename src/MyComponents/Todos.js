import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem"

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>

      {/* // check if todos are available */}
      {props.todos.length === 0 ? "No Todo Items Available" :
        // if not available, render todos
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)

        })}

    </div>
  )
}
