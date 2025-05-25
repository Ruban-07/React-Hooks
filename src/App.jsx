import React from "react";
import StateExample from "./hooks/use_state";
import EffectExample from "./hooks/use_effect";
import ContextExample from "./hooks/use_context";
import ReducerExample from "./hooks/use_reducer";
import RefExample from "./hooks/use_ref";

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
      <mark>
        <strong>UseRef</strong>
      </mark>
      <RefExample />
      <hr />
    </div>
  );
};

export default App;
