
import './TodoItemArea.css';

const TodoItemArea = (props)=> {
  
  const deleteTodoHandler = event=>{
    props.onDeleteTodo(props);
    
  }

  const editTodoHandler = event=>{
    console.log('In editTodoHandler');
    props.onEditTodo(props);
    
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
        <button className="todo-item-button" onClick={editTodoHandler} >Edit todo</button>
        <button className="todo-item-button" onClick={deleteTodoHandler} >Delete Todo</button>
      </div>
    </div>
    </li>
  );
}

export default TodoItemArea;
