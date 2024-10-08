import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(options) {
  return (
    <Entry
      key={options.id}
      name={options.name}
      emoji={options.emoji}
      mean={options.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
