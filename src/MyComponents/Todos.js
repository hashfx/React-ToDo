import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem"

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className="text-center my-3">Todos List</h3>

      {/* // check if todos are available */}
      {props.todos.length===0 ? "No Todo Items Available" :
      // if not available, render todos
      props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })}

    </div>
  )
}
