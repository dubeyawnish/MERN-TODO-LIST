import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todoform = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();



    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        //console.log(e.target.value);
        setText(e.target.value);
        //console.log(text);
    }
    return (
        <form className="form" onSubmit={onSubmitForm}>
            <input
                placeholder="Enter new Todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    );
}

export default Todoform;