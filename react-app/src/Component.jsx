/*applying useState*/

import React, {useState} from "react";

function Component(){
    const [value, setValue] = useState(0);

    const Increment = () => {
        setValue(value + 1);
    }
    const Decrement = () => {
        setValue(value - 1);
    }
    const Reset = () => {
        setValue(value - value);
    }

    return(
        <div>
        <p>Counter: {value}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Component