import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }

    const handleLowClick = ()=>{
        console.log("LowerCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }

    const handleExtraSpaces = ()=>{
        console.log("Extra Spaces was clicked")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed","success")
    }

    const handleCopy = ()=>{
        console.log("Copy was clicked")
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to the clipboard","success")
    }

    const handleClearClick = ()=>{
        console.log("Clear was clicked")
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter text here");
  return (
    <>
    <div className="container" style={{color : props.mode === "light" ? "black" : "white"}}>
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12" style={{color : props.mode === "light" ? "black" : "white", backgroundColor : props.mode === "light" ? "white" : "#363636"}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        </div>
    </div>

    <div className="container my-3 fcolor" style={{color : props.mode === "light" ? "black" : "white"}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Letters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here!"}</p>
    </div>
    </>
  )
}
