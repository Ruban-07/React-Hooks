import { useInsertionEffect } from "react";

const InsertionEffectExample = () => {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
    .dynamic-style{
    color: while;
    background-color: blue;
    padding: 10px;
    }
    `;
    document.head.appendChild(style);
    console.log("Style Applied!");

    return () => {
      console.log("Style Cleared!");
      document.head.removeChild(style);
    };
  });
  return (
    <center>
      <div className="dynamic-style">Styled with UseInsertionEffect</div>
    </center>
  );
};

export default InsertionEffectExample;
