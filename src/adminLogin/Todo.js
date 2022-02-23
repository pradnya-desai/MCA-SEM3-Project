
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Todo = (props) => {
  
  return (



  


    <div>
        <div className='todo_style'>
            <FontAwesomeIcon icon={faTimes}
            onClick={() => props.onSelect(props.id)} className="deleteIcon"
            />
            <ol className='todo-ol'>
         <li className='todo-li'>{props.text}</li></ol>
         </div>
    </div>
  )
}

export default Todo