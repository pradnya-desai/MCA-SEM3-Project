import React from 'react'
import { useState } from 'react';
import Todo from './Todo.js'
const TodoList = () => {


    
const [inputlist, setInputList] = useState("");
const [items, setItems] = useState([]);
const itemEvent = (e) => {
    setInputList(e.target.value);
}

const listOfItems = () => {
   setItems((prevItems) => {
       return [...prevItems, inputlist];
    });
setInputList("");
   }
   const deleteItems = (id) => {
    setItems((prevItems) => {
        return prevItems.filter((item, index) => {
    return index !== id;
        });
    });

}
  return (
    <div>
<h3>Save All Your Pending Work In this To-do List</h3>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
 <h5> <strong>You Have following pending tasks today</strong>  <br/>&nbsp;
{items.map((item, index) => {
        return <p key={index}>{item}</p>
    })}
 &nbsp;</h5>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className='main_div-todo'>
<div className='center_div-todo'>
<br/>

<input className='todo-input' value={inputlist}
onChange={itemEvent} type="text" placeholder='add an item'/>
<button className='todo-button' onClick={listOfItems}>+</button>
    </div>

<ol className='todo-ol'>
{items.map((itemvalue,index) => {
  return  <Todo key={index} id={index} text={itemvalue} onSelect={deleteItems} />;
})}
</ol>

</div>
    </div>
  )
}

export default TodoList
