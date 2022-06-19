
import TodoItemArea from './TodoItemArea';
import './TodoList.css';

const TodoList = props =>{
 
    if ( props.items==null || props.items.length===0){
        return <h2 className="todo-list__fallback">No todos found</h2>
    }

    return <ul className="todo-list">
      {  props.items.map( (todo)=>(
        <TodoItemArea 
        key = {todo.id}
        title={todo.title} 
        description={todo.description} 
        is_done={todo.is_done} 
        id={todo.id}
        onDeleteTodo={props.onDeleteTodo}
        onEditTodo={props.onEditTodo}
        />) ) 
      }
    </ul>
};

export default TodoList;