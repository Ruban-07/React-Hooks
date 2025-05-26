import { useState, useTransition } from "react";

const TransitionExample = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isTranisitionPending, startTranisition] = useTransition();

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const handleItems = (e) => {
    const value = e.target.value;
    setQuery(value);
    startTranisition(() => {
      const filteredList = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filteredList);
    });
  };
  return (
    <center>
      <div>
        <h3>Search Item</h3>
        <input
          type="text"
          value={query}
          onChange={handleItems}
          placeholder="Search items..."
        />
        {isTranisitionPending && <p>Loading...</p>}
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </center>
  );
};

export default TransitionExample;
