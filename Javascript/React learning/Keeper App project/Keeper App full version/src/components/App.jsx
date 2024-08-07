import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {
  const [items, setItems] = useState([]);

  function addNote(newNote) {
    setItems((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
        console.log("hello");
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
