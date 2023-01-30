



const Todo =({todo})=>{

const toggleTodo=()=>{
    
}

    return(
  <li className="task" onClick={()=>toggleTodo}>
    <span>{todo.data}</span>

    <span className="icon"><i className="fas fa-trash"></i></span>
    <span className="icon"><i className="fas fa-pen"></i></span>


  </li>


    )
}
export default Todo;