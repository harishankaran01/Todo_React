import React from 'react';
import { TiDelete } from "react-icons/ti";
import { MdEditNote } from "react-icons/md";

export default function Display(props) {
    return (
        
            <div className='task'>
                <div className="p">
                <p>{props.task}</p>
                </div>
               
                <div className='btns'>
                    <div  className='edit' onClick={() => { props.editTask(props.task) }}><button >Edit</button><MdEditNote size={25}/></div>
                    <div className='delete'onClick={() => { props.deleteTask(props.task) }}><button  >Delete</button> <TiDelete size={25}/></div>
                </div>
                </div>
        
    )
}
