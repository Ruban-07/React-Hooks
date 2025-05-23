import { createContext, useState, useContext } from "react";

// Global Context
const GlobalStateContext = createContext(null);

// Parent Component
const ContextExample = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ toggleStatus, setToggleStatus }}>
      <center>
        <div>
          <h3>Toggle Switch</h3>
          <ToggleButton />
          <ToggleStatus />
        </div>
      </center>
    </GlobalStateContext.Provider>
  );
};

// Toggle Button Child
const ToggleButton = () => {
  const { setToggleStatus } = useContext(GlobalStateContext);
  return (
    <button onClick={() => setToggleStatus((tStatus) => !tStatus)}>
      Toggle
    </button>
  );
};

// Toggle Status Child
const ToggleStatus = () => {
  const { toggleStatus } = useContext(GlobalStateContext);
  return (
    <h4>
      Current Status is: <mark>{toggleStatus ? "ON" : "OFF"}</mark>
    </h4>
  );
};

export default ContextExample;
