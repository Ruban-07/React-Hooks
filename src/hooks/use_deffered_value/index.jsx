import { useDeferredValue, useState } from "react";

const DefferedValueExample = () => {
  const [query, setQuery] = useState("");
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const defferedQuery = useDeferredValue(query);
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(defferedQuery.toLowerCase())
  );

  return (
    <center>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query !== defferedQuery && <p>Loading...</p>}
        <ul>
          {filteredItems.map((items) => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </center>
  );
};

export default DefferedValueExample;
