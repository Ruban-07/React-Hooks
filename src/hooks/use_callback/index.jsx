import { useCallback, useState } from "react";
import List from "./List";

const CallbackExample = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((darkTheme) => !darkTheme)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default CallbackExample;
