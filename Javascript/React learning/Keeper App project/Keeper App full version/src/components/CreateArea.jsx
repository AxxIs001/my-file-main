import React from "react";

function CreateArea(props) {
  const [notes, setNotes] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setNotes((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    props.onAdd(notes);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={notes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={notes.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
