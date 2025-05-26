import React from "react";
import StateExample from "./hooks/use_state";
import EffectExample from "./hooks/use_effect";
import ContextExample from "./hooks/use_context";
import ReducerExample from "./hooks/use_reducer";
import RefExample from "./hooks/use_ref";
import ImperativeHandleExample from "./hooks/use_imperative_handle";
import LayoutEffectExample from "./hooks/use_layout_effect";
import InsertionEffectExample from "./hooks/use_insertion_effect";
import UseIdExample from "./hooks/use_id";
import TransitionExample from "./hooks/use_transition";

const App = () => {
  return (
    <div>
      {/* <mark>
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
      <mark>
        <strong>UseImperativeHandle</strong>
      </mark>
      <ImperativeHandleExample />
      <hr />
      <mark>
        <strong>UseLayoutEffect</strong>
      </mark>
      <LayoutEffectExample />
      <hr />
      <mark>
        <strong>UseInsertionEffect</strong>
      </mark>
      <InsertionEffectExample />
      <hr />
      <mark>
        <strong>UseId</strong>
      </mark>
      <UseIdExample />
      <hr /> */}
      <mark>
        <strong>UseTransition</strong>
      </mark>
      <TransitionExample />
      <hr />
    </div>
  );
};

export default App;
