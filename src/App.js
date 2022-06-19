
import FormState from './components/form_manager/FormState';
import TodoList from './components/todos/TodoList';
import TodoDeletedList from './components/todos/TodoDeletedList';
import React, {useState} from 'react';


const App = () => {
  
  const [todolist,setTodoList] = useState([]); 
  const [deletedlist,setDeletedList] = useState([]);
  const [ form_display_mode, setFormDisplayMode] = useState('buttons');
  const [ obj_for_update, setObjForUpdate] = useState({id:'',title:'',description:'',is_done:0}); 
  
const formDisplayChange = mode =>{
  setFormDisplayMode(mode);
}



 const deleteTodoHandler = todo=>{
    setTodoList(prevTodos=>{  
      let found_index = prevTodos.findIndex(obj => obj.id === todo.id);
      if (found_index !== -1)
      {
        prevTodos.splice(found_index,1);
      }
      return [...prevTodos];               
 });
    
   setDeletedList(prevDeleted=>{
    return [todo,...prevDeleted];    
   });

 }


 const restoreTodoHandler = todo=>{
   console.log('In App.js restoreTodoHandler, object:');
   console.log(todo);
   let obj_for_update; 

   setTodoList(prevDeleted=>{
    return [todo,...prevDeleted];    
   });

   setDeletedList(prevDeleted=>{   
    let found_index = prevDeleted.findIndex(obj => obj.id === todo.id);
      if (found_index !== -1)
      {
        prevDeleted.splice(found_index,1);
      }

    return [...prevDeleted];    
   });
 }

 const editTodoHandler = todo=>{
    setFormDisplayMode('edit_mode');
    setObjForUpdate(todo);
 }

 const reportObjForUpdate =()=>{
    return  obj_for_update;
 }
   
  const addTodoHandler = todo=>{
    setTodoList(prevTodos=>{  
         return [todo,...prevTodos];               
    });
    setFormDisplayMode('buttons');  
  }

  const updateTodoHandler = todo=>{
      setTodoList(prevTodos=>{
        let found_index = prevTodos.findIndex(obj => obj.id === todo.id);
        if (found_index !== -1)
        {
          prevTodos[found_index].title = todo.title;
          prevTodos[found_index].description = todo.description;
          prevTodos[found_index].is_done = todo.is_done;
        }
        return [...prevTodos]; 
      });
      setFormDisplayMode('buttons');          
    }

    const cancelHandler = ()=>{
      setFormDisplayMode('buttons'); 
    }
  

  return (
    <div>
      <FormState onAddTodo={addTodoHandler} onUpdateTodo={updateTodoHandler}  onCancel={cancelHandler} display_mode={form_display_mode} onDisplayChange={formDisplayChange} report_cb={reportObjForUpdate}/>  
      <div id="parent">
         <div id="active-list"><h4>Todo List</h4><TodoList items={ todolist } onDeleteTodo={deleteTodoHandler} onEditTodo={editTodoHandler}/></div>
         <div id="deleted-list"><h4>Deleted List</h4><TodoDeletedList items={deletedlist} onRestoreTodo={restoreTodoHandler}/></div>            
      </div>
    </div>
  );
}

export default App;
