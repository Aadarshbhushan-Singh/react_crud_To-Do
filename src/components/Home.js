import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);


    const loadTasks = async () => {
        const result = await axios.get("https://my-json-server.typicode.com/Aadarshbhushan-Singh/json_file/tasks");
        setTask(result.data.reverse());

    }

    const deleteTask= async uid=>{
        await axios.delete(`https://my-json-server.typicode.com/Aadarshbhushan-Singh/json_file/tasks/${uid}`);
        loadTasks();
    }
    return (
        <div className='container'>
            <h1>Home page</h1>
            <Table striped bordered hover size="sm" className='table border shadow'>
                <thead>
                    <tr>
                        
                        <th className='col-md-1'>SN</th>
                        <th className='col-md-1'>UserId</th>
                        <th className='col-md-1'>ID</th>
                        <th className='col-md-3'>Title</th>
                        <th className='col-md-1'>Completed</th>
                        <th className='col-md-2'>Action</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        task.map((t, index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{t.userId}</td>
                                <td>{t.id}</td>
                                <td>{t.title}</td>
                                <td>{t.completed}</td>

                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/tasks/view/${t.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/tasks/edit/${t.id}`}>Edit</Link>
                                    <Link className="btn btn-danger mx-2" onClick={()=>deleteTask(t.id)}>Delete</Link>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
