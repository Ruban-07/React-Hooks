import { useReducer } from "react";

const counterOperation = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "double":
      return { count: state.count * 2 };
    default:
      return console.log("No Action Type Found!");
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(counterOperation, { count: 0 });
  return (
    <center>
      <div>
        <h2>Complex Counter App</h2>
        <h5>Count: {state.count}</h5>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        &nbsp;
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        &nbsp;
        <button onClick={() => dispatch({ type: "double" })}>*</button>
      </div>
    </center>
  );
};

export default ReducerExample;
