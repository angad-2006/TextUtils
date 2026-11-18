import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convered to uppercase!" , "success");
  }
   const handleLoClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convered to lowercase!" , "success");
  }
  const handleClearClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText ='';
    setText(newText)
    props.showAlert("Text cleared" , "success");
  }
  const handleOnchange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clickboard" , "success");
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text}   onChange={handleOnchange}   style={{
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    color: props.mode === 'dark' ? 'white' : '#042743'
  }}
    id="mybox" rows="8" >
    </textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}word and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}