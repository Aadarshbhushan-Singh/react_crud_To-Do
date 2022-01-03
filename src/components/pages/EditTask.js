import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

export const EditTask = () => {
    let history = useHistory();
    const {uid}=useParams(); 

    const [task, setTask] = useState({
        userId: "",
        id: "",
        title: "",
        completed: ""
    });

    useEffect(()=>{
        loadUser();
    }, []);

    const { userId, id, title, completed } = task;

    const onInputChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value });
        
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://my-json-server.typicode.com/Aadarshbhushan-Singh/json_file/tasks/${uid}`, task);
        history.push("/");
    };

    const loadUser = async ()=>{
        const result=await axios.get(`https://my-json-server.typicode.com/Aadarshbhushan-Singh/json_file/tasks/${uid}`);
        setTask(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A Task</h2>
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
                    <button className="btn btn-primary btn-block">Edit Task</button>
                </form>
            </div>
        </div>
    )
}


export default EditTask;
