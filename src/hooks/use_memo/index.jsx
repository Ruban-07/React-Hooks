import { useEffect, useMemo, useState } from "react";

const MemoExample = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const darkThemeStyle = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "black" : "white",
      color: darkTheme ? "white" : "black",
    };
  }, [darkTheme]);

  useEffect(() => {
    console.log("Theme Changed!");
  }, [darkThemeStyle]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDarkTheme((theme) => !theme)}>
        Change Theme
      </button>
      <div style={darkThemeStyle}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num) => {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {
    /* empty */
  }
  return num * 2;
};
export default MemoExample;
