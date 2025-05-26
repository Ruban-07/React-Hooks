import { forwardRef, useImperativeHandle, useRef } from "react";

const ImperativeHandleExaple = () => {
  const inputRef = useRef();
  return (
    <center>
      <div>
        <h3>Input Handling</h3>
        <CustomInputField ref={inputRef} />
        <button onClick={() => inputRef.current.focusInput()}>Focus</button>
        <button onClick={() => inputRef.current.clearInput()}>Clear</button>
      </div>
    </center>
  );
};

const CustomInputField = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    },
  }));
  return <input type="text" ref={inputRef} />;
});

export default ImperativeHandleExaple;
