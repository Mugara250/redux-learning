import { useReducer } from "react";

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return --state;
    default:
      return 0;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>The current count is: {state}</p>
      <button
        className="bg-amber-300 py-1.5 px-2 cursor-pointer hover:bg-amber-400"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="bg-amber-300 ml-4 py-1.5 px-2 cursor-pointer hover:bg-amber-400"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;
