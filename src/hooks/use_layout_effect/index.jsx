import { useLayoutEffect, useRef, useState } from "react";

const LayoutEffectExample = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef();
  useLayoutEffect(() => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  }, []);
  return (
    <center>
      <div
        style={{ backgroundColor: "green", height: "100px", width: "50%" }}
        ref={boxRef}
      >
        Measure Me!
      </div>
      <p>The Size of div is: {boxWidth}</p>
    </center>
  );
};

export default LayoutEffectExample;
