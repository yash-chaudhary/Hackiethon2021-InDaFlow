import React, { useState } from "react";


function TextArea(props) {
  const [note, setNote] = useState({
    content: ""
  });



  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="item">

        <input type="text" 
        name="content" 
        placeholder="New Item" 
        autocomplete="off" 
        onChange={handleChange} 
        value={note.content} />  

        <button className="addbutton" onClick={submitNote}>ADD</button>
        
        {/* <Fab >
         Add
        </Fab> */}
      </form>
    </div>
  );
}

export default TextArea;
