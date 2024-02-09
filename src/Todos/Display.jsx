import React from 'react';
import { TiDelete } from "react-icons/ti";
import { MdEditNote } from "react-icons/md";

export default function Display(props) {

    return (
        props!=null || undefined ?
            <div key={props.task.id} className='task'>
                <div className="p">
                <p>{props.task.task}</p>
                </div>
               
                <div className='btns'>
                    <div  className='edit' onClick={() => { props.editTask(props.task.id, props.task.task) }}><button >Edit</button><MdEditNote size={25}/></div>
                    <div className='delete'onClick={() => { props.deleteTask(props.task.id) }}><button  >Delete</button> <TiDelete size={25}/></div>
                </div>
            </div> :<h1>No Tasks</h1>
    )
}
