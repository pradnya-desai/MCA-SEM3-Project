
// import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// const Todo = (props) => {
  
//   return (



  


//     <div>
//         <div className='todo_style'>
//             <FontAwesomeIcon icon={faTimes}
//             onClick={() => props.onSelect(props.id)} className="deleteIcon"
//             />
//             <ol className='todo-ol'>
//          <li className='todo-li'>{props.text}</li></ol>
//          </div>
//     </div>
//   )
// }

// export default Todo



import { faEdit,faPlus,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react'
import swal from 'sweetalert';


// to get the data from LS

const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);


    const addItem = () => {
        if (!inputData) {
            swal("Oops!", "Please enter a value", "error" );
        } else if(inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
                 setToggleSubmit(true);

                 setInputData('');

                 setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }

    
    // delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }

// edit the item
//     When user clikc on edit button 

// 1: get the id and name of the data which user clicked to edit
// 2: set the toggle mode to change the submit button into edit button
// 3: Now update the value of the setInput with the new updated value to edit. 
// 4: To pass the current element Id to new state variable for reference 
    
    
    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);

    }
    

    // remove all 
    const removeAll = () => {
         setItems([]);
    }

    // add data to localStorage
    useEffect(() => {
       localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <>
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <h5> <strong>You Have following pending tasks today</strong>  <br/>&nbsp;
 { items.map((elem) => {
                                return (
                                    <div key={elem.id}>
                                        <h5>{elem.name}</h5>

                                  </div>
                                )
                            })
              }
</h5>
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>
            <div className="main-div">
      
                <div className="child-div">
                    <figure>
                        {/* <img src={todo} alt="todologo" /> */}
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" className="input-todo" placeholder="✍ Add Items..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) }
                        />
                        {
                            toggleSubmit ? <FontAwesomeIcon className="fa fa-plus add-btn" title="Add Item" icon={faPlus} onClick={addItem}/> :
                                 <FontAwesomeIcon icon={faEdit} className="fa fa-edit edit-btn" onClick={addItem}/>
                        }
                       
                    </div>

                    <div className="showItems">
                        
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3 className="todo-element">{elem.name}</h3>
                                        <div className="todo-btn">
                                        <FontAwesomeIcon icon={faEdit} className="fa-edit edit-btn"  onClick={() => editItem(elem.id)}/>&nbsp; &nbsp;
                                            <FontAwesomeIcon icon={faTrashAlt} className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}/>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn-todo effect04" data-sm-link-text="Remove All" onClick={removeAll}><span className="span-todo"> CHECK LIST </span> </button>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Todo
