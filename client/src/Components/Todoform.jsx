import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todoform = ()=>{

    const[text,setText]=useState("Hello");
    const dispatch=useDispatch();



    const onSubmitForm=(e)=>{
           e.preventDefault();
           dispatch(addNewTodo(text));
    }

    const onInputChange =(e)=>{
        console.log(e.target.value);
        setText(e.target.value);
        //console.log(text);
    }
    return (
        <form className="form" onSubmit={onSubmitForm}>
            <input
            placeholder="Enter new Todo..."
            className="input"
            onChange={onInputChange}
            />
        </form>
    );
}

export default Todoform;