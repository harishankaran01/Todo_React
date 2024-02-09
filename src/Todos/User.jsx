import React, { useState, useRef, useEffect, useId } from 'react'
import Display from './Display';
import { RiCalendarTodoLine } from "react-icons/ri";


export default function User() {
    let [tasks, setTasks] = useState([]);
    let [iD, setID] = useState(null);
    let [singleTask, setSingleTask] = useState("");
    let inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    function updateit() {
        if(singleTask=== null || undefined||""){
            alert("Enter the task");
            return 0;
        }
        console.log(singleTask);
        if (iD == null) {
            setTasks(prev => {
                return [
                    ...prev,
                    {
                        id: tasks.length + 1,
                        task: singleTask
                    }
                ]
            })
        }
        else {
            setTasks(prev => {
                return [
                    ...prev,
                    {
                        id: iD,
                        task: singleTask
                    }
                ]
            })
            setID(null);
        }
        setSingleTask("");

    }
    function deleteTask(id) {
        setTasks(prev => prev.filter(task => task.id != id));
    }
    function editTask(id, task) {
        setID(id);
        setSingleTask(task);
        setTasks(prev => prev.filter(task => task.id != id));
        inputRef.current.focus();
    }

    let displayTask = tasks.map(task => <Display task={task} deleteTask={deleteTask} editTask={editTask} key={task.id} />)

    return (
        <div className="todos">
            <div className="head"><h1>To Do List </h1><RiCalendarTodoLine size={25} color='rebeccapurple'/></div>
            
            <div className='input'>
                <input ref={inputRef} type="text" value={singleTask} onChange={(e) => setSingleTask(e.target.value)} placeholder='Have you planned..?' />
                <button onClick={updateit} className='comic-button'>
                  <span>  {iD != null ? "Update" : "Add"}</span></button>
            </div>
            <div className="taskss">
  {displayTask}
            </div>
          

        </div>
    )
}
