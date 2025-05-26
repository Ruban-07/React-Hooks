import { useId } from "react";

const UseIdExample = () => {
  const id1 = useId();
  const id2 = useId();

  return (
    <center>
      <div>
        <label htmlFor={id1}>Enter your first name:</label>
        &nbsp;
        <input id={id1} type="text" />
        <br />
        <label htmlFor={id2}>Enter your last name:</label>
        &nbsp;
        <input id={id2} type="text" />
      </div>
    </center>
  );
};

export default UseIdExample;
