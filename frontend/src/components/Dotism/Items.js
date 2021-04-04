import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="item">

      <input type="checkbox" onClick={handleClick}/>
      <div className="para">{props.content}</div>
      
    </div>
  );
}

export default Note;
