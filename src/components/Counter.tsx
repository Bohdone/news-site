import React, {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {

    const [state, setState] = useState(0)

    const increment = () => {
      setState(state + 1)
    }

    const decrement = () => {
        setState(state - 1)
    }

    return (
        <div className={classes.btn}>
            <h1>{state}</h1>

            <button className={'btn'} onClick={increment}>+</button>
            <button className={'btn'} onClick={decrement}>-</button>
        </div>
    );
};