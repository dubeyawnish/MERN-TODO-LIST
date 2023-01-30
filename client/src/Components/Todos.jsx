
import { getAllTodos } from "../redux/actions/index.js";
import{useDispatch,useSelector} from 'react-redux';
import { useEffect } from "react";
import Todo from "./Todo.jsx";

const Todos =()=>{
    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos);
    useEffect(() => {
    
    
     dispatch(getAllTodos());
    }, [])
    
    return(
<article>
    <ul>
        {
            todos.map(todo=>(
                <Todo
                key={todo._id}
                todo={todo}
                />
            ))
        }
    </ul>
</article>


    )
}
    
 export default Todos;