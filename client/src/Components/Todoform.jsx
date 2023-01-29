import { useState } from "react";

const Todoform = ()=>{
    const[text,setText]=useState("Hello");
    const onSubmitForm=()=>{

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