import {useState} from 'react';

import './TodoForm.css';

const TodoForm = (props) =>{
    let edit_obj;
    let submit_label ='Add Todo';
   
    if ( props.display=='edit_mode')
    {
        edit_obj = props.report_cb();
        submit_label = 'Update Todo';
    }
    else
    {
        edit_obj = {title:'',description:'',is_done:0,id:''};
    }

    const [enteredTitle, setEnteredTitle] = useState(edit_obj.title);
	const [enteredDesc, setEnteredDesc] = useState(edit_obj.description);
	const [enteredIsDone, setIsDone] = useState(edit_obj.is_done);
    const [idVal, setIdVal] = useState(edit_obj.id);
    const [titleisValid,setIsValidTitle] = useState(true);
    const [descisValid,setIsValidDesc] = useState(true);

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const descChangeHandler = (event) =>{
       setEnteredDesc(event.target.value);
    };

    const is_done_ClickHandler = (event) =>{
        
        const is_done = event.target.checked ? 1:0;
        setIsDone(is_done);
    };

    const submitHandler = (event)=>{
        event.preventDefault();
        if (enteredTitle.trim().length===0 )
        {
            setIsValidTitle(false);
            return;
        }
        else if (enteredDesc.trim().length===0)
        {
            setIsValidDesc(false);
            return;
        }

        const todoData = {
            title: enteredTitle,
            description : enteredDesc,
            is_done: +enteredIsDone,
            id: idVal
          };
          
          setEnteredTitle('');
          setEnteredDesc('');
          setIsDone(0);
          setIdVal('');
        props.onSaveTodoData(todoData);
        
    };

    const cancelHandler = event=>{
        event.preventDefault();
        props.onCancel();
    }

        
  return <form onSubmit={submitHandler}>
        <div className="todo_form__controls">
            <div className="todo_form__control"> 
               <label style={{color:!titleisValid?'red':'black'}}>Title:</label>
               <input type="text"  value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="todo_form__control"> 
               <label style={{color:!descisValid?'red':'black'}}>Description:</label>
               <textarea  rows="2" cols="25" value={enteredDesc} onChange={descChangeHandler}></textarea>
            </div>
            <div className="todo_form_checkbox"> 
               <label>Is Done:</label>
               <input type="checkbox"  value={enteredIsDone} checked={enteredIsDone}  onChange={is_done_ClickHandler}/>
            </div>
        </div>
        <div className="todo_form__actions">
            <input type="hidden"  value={idVal}></input>
            <button type="submit">{submit_label}</button>
            <button onClick={cancelHandler}>Cancel</button>
        </div>
        </form>;
};

export default TodoForm;