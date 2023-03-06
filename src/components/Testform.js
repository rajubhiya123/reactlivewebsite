import React, { useState } from 'react'
export default function TestForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        // console.log("UpperCase Was Clicked")
        setText(newText);
        props.showAlert(" Convert to Uppercase","Success");

        
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        // console.log("UpperCase Was Clicked")
        setText(newText);
        props.showAlert(" Convert to lowercase","Success")
    }

    const handleOnCopy = () => {
        let newText = document.getElementById("myBox")
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert(" Text-Copy","Success");
    }


    const handleOnCancel = (event) => {
        // let newText = useState("");
        setText(event.target.value)
        props.showAlert("Cancel","Success");
    }




    //  OR For Cancel
    // const handleOnCancel = (event) => {
    //     let newText="";
    //     setText(newText)
    // }





    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to change the state

    return (
        <>
            <div className="container"style={{color:props.mode==='dark'?'yellow':'red'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'light',color:props.mode==='dark'?'green':'red'}} rows="10"> </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                {/* <button className="btn btn-danger mx-2" onClick={handleSeClick}>Convert to Sentence Case</button> */}
                <button className="btn btn-danger mx-2" onClick={handleOnCancel}>Cancel</button>
                <button className="btn btn-danger mx-2" onClick={handleOnCopy}>Copy Text</button>
                
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length-1} Words and {text.length} chracters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>

            </div>
        </>


    )
}
