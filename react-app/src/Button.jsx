
import { useState } from 'react';

function Button (){
    const messages = [
    "Don't 🤚",
    "I said no 😤",
    "Bro, stop 😠",
    "💀💀",
    "Last warning 😡",
    "FF 🏳️🏳️"
  ];

    const [index, setIndex] = useState(0);
        
    const handleClick = (e) => {
    const nextIndex = (index + 1) % messages.length;
    e.target.textContent = messages[nextIndex];
    setIndex(nextIndex);

    if (nextIndex === messages.length - 1) {
    e.target.disabled = true;
    }
  };

    return(
        <button  className='clickmeBtn' onClick={(e) => handleClick(e)}>Click me!🙏😭</button>
    );
}

export default Button