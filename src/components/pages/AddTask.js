import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

export const AddTask = () => {
    let history = useHistory();

    const [task, setTask] = useState({
        userId: "",
        id: "",
        title: "",
        completed: ""
    });

    const { userId, id, title, completed } = task;

    const onInputChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value });
        
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/tasks", task);
        history.push("/");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Task</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your UserId"
                            name="userId"
                            value={userId}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your ID"
                            name="id"
                            value={id}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Title"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Status"
                            name="completed"
                            value={completed}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add Task</button>
                </form>
            </div>
        </div>
    )
}


export default AddTask;
