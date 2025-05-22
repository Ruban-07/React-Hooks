import { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(0);
  const counterIncrement = () => {
    setCount((previousValue) => previousValue + 1);
    console.log(count);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={counterIncrement}>Increase Count</button>
    </div>
  );
};

export default StateExample;