import {useDispatch, useSelector} from 'react-redux';
import {sum, min, del, mul, ent, cls, upd, pon} from './../../actions.js'
import './KeyPad.css';

const KeyPad = () => {
    const value = useSelector((state) => state.value);
    const dispatch = useDispatch();

    const handleNumberClick = (number) => {
        dispatch(upd(value + number));
    };
    const handleOperatorClick = (operator) => {
        switch (operator) {
            case '+':
                dispatch(upd(value));
                dispatch(sum(value));
                break;

            case '/':
                dispatch(upd(value));
                dispatch(del(value));
                break;

            case '-':
                dispatch(upd(value));
                dispatch(min(value));
                break;

            case '*':
                dispatch(upd(value));
                dispatch(mul(value));
                break;

            case '.':
                dispatch(upd(value));
                dispatch(pon(value));
                break;

            default:
                break;
        };
    };

    const handleClearClick = () => {
        dispatch(cls());
    };

    const handleEqualsClick = () => {
        dispatch(ent());
    };
    return (
        <div className="keypad">
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button></button>
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button></button>
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>            
            <button onClick={handleClearClick}>C</button>
            <button></button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleOperatorClick('.')}>.</button>
            <button onClick={handleEqualsClick}>=</button>
            
        </div>
    )
}

export default KeyPad;