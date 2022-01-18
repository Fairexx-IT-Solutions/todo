import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value 
        :  '' );
    const [date, setDate] = useState('');
    

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
  
        setInput(e.target.value);
        setDate(new Date().toLocaleTimeString());
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
             id: Math.floor(Math.random()*10000),
             text: input,
             time: date

        });

        setInput('')
    };
    return (
        <form className="todo-form" 
        onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                 <input type="text" 
                 placeholder="Update your task" value={input}
                 name="text" className="todo-input"
                 onChange={handleChange}
                 ref={inputRef}
                 />
                 <button className="todo-button">Update Now</button>
                 </>
                 ) :
                  (
                    <>
                    <input type="text" 
                    placeholder="Enter a task here" value={input}
                    name="text" className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-button">Add Now</button>
                    </>
                 )
                };
           
        </form>
    )
}

export default TodoForm
