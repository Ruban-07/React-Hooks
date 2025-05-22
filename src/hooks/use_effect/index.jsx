import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showPedro, setPedro] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  useEffect(() => console.log("Pedro bro"), [showPedro]);
  return (
    <div>
      <button onClick={() => setPedro((prev) => !prev)}>Toggle</button>
      <h1>POSTS</h1>
      <ul>
        {data.map((dataItem) => (
          <li key={dataItem.id}>{dataItem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EffectExample;
