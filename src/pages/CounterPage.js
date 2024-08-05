import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";
import { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_VALUE_RESET_COUNT_TO_ADD = "ADD-VALUE-RESET-COUNT-TO-ADD";
const UPDATE_COUNT_TO_ADD = "UPDATE-COUNT-TO-ADD";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            state.count = state.count + 1;
            return
        case DECREMENT:
            state.count = state.count - 1;
            return
        case ADD_VALUE_RESET_COUNT_TO_ADD:
            return {
                ...state,
                count: state.count + state.countToAdd,
                countToAdd: 0
            };
        case UPDATE_COUNT_TO_ADD:
            return { ...state, countToAdd: action.payload };
        default:
            return state;
    }
}

function CounterPage() {

    const [state, dispatch] = useReducer(produce(reducer), { count: 0, countToAdd: 0 });

    const handleIncrement = () => { dispatch({ type: INCREMENT }); console.log(state.count) }
    const handleDecrement = () => { dispatch({ type: DECREMENT }); console.log(state.count) }
    const handleChange = (e) => {
        const valueToAdd = parseInt(e.target.value) || 0;
        dispatch({
            type: UPDATE_COUNT_TO_ADD,
            payload: valueToAdd
        });
    }
    const handleAddCount = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_VALUE_RESET_COUNT_TO_ADD });
        console.log(state.count);
    }

    return (
        <Panel>
            <h1 className="m-5">Counter Page</h1>
            <h1 className="m-5">Current Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button className="m-5" onClick={handleIncrement}>Increment</Button>
                <Button className="m-5" onClick={handleDecrement}>Decrement</Button>
            </div>
            <form onSubmit={handleAddCount} className="m-5">
                <input className="border border-gray-600" type="number" name="countToAdd" value={state.countToAdd || ""} onChange={handleChange} />
                <Button className="m-5" >Add</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;