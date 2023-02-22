import React, { useState } from 'react';

const InsertTodo = ({onAddTodo}) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
    }
    const onClick = () => {
        onAddTodo(text);
        setText('');
    }
    return (
        <div>
            <input name='text'onChange={onChange} value={text}/>
            <button onClick={onClick}>+</button>
        </div>
    );
};

export default InsertTodo;