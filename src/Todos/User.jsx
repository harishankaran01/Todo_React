import React, { useState, useRef, useEffect, useId } from 'react'
import Display from './Display';
import { RiCalendarTodoLine } from "react-icons/ri";
import { nanoid } from 'nanoid';

export default function User() {
    let [tasks, setTasks] = useState([]);
    let [iD, setID] = useState(null);
    let [singleTask, setSingleTask] = useState("");
    let inputRef = useRef();
    useEffect(() => {
       setTasks( JSON.parse(localStorage.getItem("todos")) || []) 
       inputRef.current.focus();
    }, [])
    function updateit() {
        if(singleTask == null ||singleTask ==  undefined||singleTask == ""){
            alert("Enter the task");
            return 0;
        }
        setTasks(prev =>{
           return[...prev,singleTask]
        })
       let update=[...tasks,singleTask];
       console.log(update);
       
        localStorage.setItem("todos",JSON.stringify(update));
        setSingleTask("");
        setID(null);

    }
    function deleteTask(taskss) {
        setTasks(prev => prev.filter(task => task != taskss));
        let update=[...tasks];
        let values=update.filter(value=> value!=taskss)
        console.log(values);
        localStorage.setItem("todos",JSON.stringify(values));
    }
    function editTask(tasks) {
        setID(tasks);
        setSingleTask(tasks);
        deleteTask(tasks)
        inputRef.current.focus();
    }

    let displayTask = tasks.map(task => <Display task={task} deleteTask={deleteTask} editTask={editTask} key={nanoid()} />)

    return (
        <div className="todos">
            <div className="head"><h1>To Do List </h1><RiCalendarTodoLine size={25} color='#ebc22a'/></div>
            
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
