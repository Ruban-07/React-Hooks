import { useEffect, useRef, useState } from "react";

const RefExample = () => {
  const inputRef = useRef();
  const onLogButtonClick = () => {
    inputRef.current.focus();
    // inputRef.current.value = "I will be there!"; use it to assign the value to input field
    return console.log(inputRef.current.value);
  };
  const [count, setCount] = useState(0);
  const effect = useEffect(() => {
    console.log("Page Re-Rendered");
    previousCount.current = count;
  }, [count]);
  const previousCount = useRef();

  return (
    <center>
      <div>
        <h3>Input References</h3>
        <input type="text" ref={inputRef} />
        <button onClick={onLogButtonClick}>Log it!</button>
        <br />
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => (prev = prev + 1))}>
          Increment
        </button>
        <p>Previous Count: {previousCount.current}</p>
      </div>
    </center>
  );
};

export default RefExample;
