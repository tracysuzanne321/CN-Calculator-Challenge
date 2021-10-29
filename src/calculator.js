import { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
    // an array of buttons and map through them
    const numberedButtons = Array.from({length:10},(_,i) => i + 0);
    const operationButtons = ['+','-','/','*','c','=']
    const buttons = [...numberedButtons,...operationButtons]
    // a useState hook for my input
    const [input,setInput] = useState("");

    const clickHandler = (event) => {
        const value = event.target.outerText;
        switch(value) {
            case 'c': {
                setInput("")
                break;
            }
            case '=': {
                const result = evaluate(input);
                setInput(result);
                break;
            }
            default: {
                setInput(input+value);
                break;
            }
        }
    }

    return (
        <div className='container'>
            <h1>Calculator</h1>
            <div className= 'form-container'>
                <div className= 'input-box'>
            <h2 className="input-text">
                {input}
            </h2>
            </div>
            <div className= 'buttons'>
                {buttons.map(operation => <button key={operation} onClick={clickHandler}>{operation}</button>)}
            </div>
            </div>
        </div>
    )
}

export default Calculator  