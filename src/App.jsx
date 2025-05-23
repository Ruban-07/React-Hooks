import React from "react";
import StateExample from "./hooks/use_state";
import EffectExample from "./hooks/use_effect";
import ContextExample from "./hooks/use_context";
import ReducerExample from "./hooks/use_reducer";

const App = () => {
  return (
    <div>
      <mark>
        <strong>UseState</strong>
      </mark>
      <StateExample />
      <hr />
      <mark>
        <strong>UseEffect</strong>
      </mark>
      <EffectExample />
      <hr />
      <mark>
        <strong>UseContext</strong>
      </mark>
      <ContextExample />
      <hr />
      <mark>
        <strong>UseReducer</strong>
      </mark>
      <ReducerExample />
      <hr />
    </div>
  );
};

export default App;
