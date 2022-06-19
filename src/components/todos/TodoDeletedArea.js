
import './TodoItemArea.css';

const TodoDeletedArea = (props)=> {
  
  const restoreTodoHandler = event=>{
    console.log('In restoreTodoHandler');
    props.onRestoreTodo(props);
    
  }

  
  return (
    <li>
    <div className="todo-item-area">
      <div >
        <span><u>{props.title}</u></span>
        <div>{props.description}</div>
        <div>is done:{props.is_done?'yes':'no'}</div>
      </div>
      <div className="todo-item-buttons">
        <button className="todo-item-button" onClick={restoreTodoHandler} >Restore todo</button>
      </div>
    </div>
    </li>
  );
}

export default TodoDeletedArea;
