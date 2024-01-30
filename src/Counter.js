import { useReducer } from "react";

const CounterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count:state.count + 1 };
        case 'DECREMENT':
            return { count:state.count - 1 };  
        default:
            return state;      
    }

};

function Counter() {
    const initialState = { count:0 };
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    return (
        <div>
            <h1>Count App</h1>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>

        </div>
    );
}

export default Counter;