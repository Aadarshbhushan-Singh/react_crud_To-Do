import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ViewTask = () => {
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

    
    const loadUser = async ()=>{
        const result=await axios.get(`https://my-json-server.typicode.com/Aadarshbhushan-Singh/json_file/tasks/${uid}`);
        setTask(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">View A Task</h2>
                <form>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your UserId"
                            name="userId"
                            value={userId}
                            
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your ID"
                            name="id"
                            value={id}
                            
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Title"
                            name="title"
                            value={title}
                            
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Status"
                            name="completed"
                            value={completed}
                            
                        />
                    </div>
                    
                </form>
                <Link className="btn btn-primary btn-block" to="/home">Go Back</Link>
            </div>
        </div>
    )
}


export default ViewTask;
