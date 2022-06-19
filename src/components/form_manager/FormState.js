import React from 'react';
import {useState} from 'react';

import './FormState.css';
import TodoForm from './TodoForm'

const FormState = (props) =>{

    const [display_mode,setDisplayMode] = useState(props.display_mode);

    
    const saveTodoDataHandler = (todo_info) =>{
       setDisplayMode('buttons'); 
       let next_op ='add';
        if (todo_info.id)
        {
            next_op ='update';
        }
        const todo_obj = {
            ...todo_info,
            id: todo_info.id ? todo_info.id: Math.random().toString()
        }
        if (next_op=='add')
        {
            props.onAddTodo(todo_obj);
        }
        else
        {
            props.onUpdateTodo(todo_obj);
        }        
    };

    
    const onCancelClick = event =>{
        setDisplayMode('buttons');
        props.onCancel();
    }
    

    const onButtonClick = (event) =>{
        setDisplayMode('add_mode');
     }

    
     
    let content =<button  onClick={onButtonClick} >Add New Todo</button>;
    
       
    if ( display_mode=='add_mode' )
    {

        content = <TodoForm onSaveTodoData={saveTodoDataHandler}  onCancel={onCancelClick} display={display_mode} />;  
    }
    else if (  props.display_mode=='edit_mode' )
    {
        content = <TodoForm onSaveTodoData={saveTodoDataHandler}  onCancel={onCancelClick} display={props.display_mode} report_cb={props.report_cb}/>;  
    }
    

    return <div className="form-state">       
        {content}
    </div>
};

export default FormState;