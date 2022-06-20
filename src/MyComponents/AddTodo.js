import React, { useState } from 'react';  // useState hook

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")  // initial state = null
    const [desc, setDesc] = useState("")  // changes existing value as per new input

    // submit button method
    const submit = (e) => {
        e.preventDefault();  // prevents refresh of page on submit event
        // if title or desc is null
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        } else {  // run only if no alert is shown
            addTodo(title, desc)  // adds todo to todos list
            setTitle("")  // set title to blank after adding todo
            setDesc("")  // set title to blank after adding todo
        }
    }
    return (
        <div className="container my-3">
            <h3>Add Todo Items</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    {/* e.target.value: change value of event e */}
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="className" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
