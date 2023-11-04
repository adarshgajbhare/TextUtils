import React, { useState } from "react";

export default function TextForm(props) {
    const handleClick = () => {
        let upperText = text.toUpperCase();
        setConvertedText(upperText);
        props.showAlert("Converted to UpperCase!!", "success");
    };

    const handleClickToLower = () => {
        let lower = text.toLowerCase();
        setConvertedText(lower);
        props.showAlert("Converted to LowerCase!!", "success");
    };

    const handleClickToCopy = () => {
        var textToCopy = document.getElementById("output");
        textToCopy.select();
        navigator.clipboard.writeText(textToCopy.value);
        props.showAlert("Text Copied!!", "success");
    };
    const handleClickToClear = () => {
        setConvertedText("");
        setText("");
        props.showAlert("Text Cleared!!", "success");
    };
    const handleClickExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setConvertedText(newText.join(" "));
        props.showAlert("Removed Extra Space!!", "success");
    };
    const handleClickToReverse = () => {
        let reverse = text.split("").reverse().join("");
        setConvertedText(reverse);
        props.showAlert("Text Reversed!!", "success");
    };

    const handleOnChnage = (event) => {
        console.log("event clicked");
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    const [Convertedtext, setConvertedText] = useState("");

    // Funtions above

    return (
        <div className="container">
            <div className="containh1">
                <div className="headingh1">
                    <h1> Input Text</h1>
                </div>
                <div className="headingh2">
                    <h1>Output</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            value={text}
                            onChange={handleOnChnage}
                            id="mybox"
                            rows="8"
                            style={{
                                backgroundColor: props.mode === "light" ? "white" : "grey",
                                color: props.mode === "light" ? "black" : "white",
                            }}
                        ></textarea>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            value={Convertedtext}
                            onChange={handleOnChnage}
                            id="output"
                            rows="8"
                            style={{
                                backgroundColor: props.mode === "light" ? "white" : "grey",
                                color: props.mode === "light" ? "black" : "white",
                            }}
                        ></textarea>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6" id="btn-box">
                    <button
                        className="btn btn-primary mx-2"
                        id="btn"
                        onClick={handleClick}>
                        UpperCase
                    </button>
                    <button
                        className="btn btn-primary mx-2"
                        id="btn"
                        onClick={handleClickToLower}>
                        LowerCase
                    </button>
                    <button
                        className="btn btn-primary mx-2"
                        id="btn"
                        onClick={handleClickToReverse}>
                        Reverse
                    </button>

                    <button
                        className="btn btn-primary mx-2"
                        id="btn"
                        onClick={handleClickToCopy}>
                        Copy
                    </button>
                    <button
                        className="btn btn-primary mx-2 "
                        id="btn"
                        onClick={handleClickExtraSpace}>
                        Remove Space
                    </button>
                    <button
                        className="btn btn-primary mx-2"
                        id="btn"
                        onClick={handleClickToClear}>
                        Clear
                    </button>
                </div>
            </div>

            <div className="summary" style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "light" ? "black" : "white",
            }}>
                <div className="textDetails">
                    <h1>Text Details</h1>
                </div>
                <div className="details" >
                    {text.trim() !== "" ? (
                        <div>
                            <p>
                                {text.match(/\S+/g)?.length || 0} words and {text.replace(/\s/g, '').length} characters
                            </p>
                            <p>
                                On average, it will take {text.match(/\S+/g)?.length ? (0.008 * text.match(/\S+/g).length) : 0} Minutes.
                            </p>
                        </div>
                    ) : (
                        <p>No text entered.</p>
                    )}
                </div>
            </div>

        </div>
    );
}
