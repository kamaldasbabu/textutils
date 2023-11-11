import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const clickToUpperCase = () => {

        if(!text.length) {
            alert("Enter some text");
            return;
        }

        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickToLowerCase = () => {

        if(!text.length) {
            alert("Enter some text");
            return;
        }

        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const clickToSentenceCase = () => {

        if(!text.length) {
            alert("Enter some text");
            return;
        }
        const rg = /(^\w{1}|\.\s*\w{1})/gi;
        const myString = text.replace(rg, function (toReplace) {
            return toReplace.toUpperCase();
        });
 
        setText(myString);
    }





    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("")

    return (
        <>

            <div className="container mb-3">
                <h3>{props.heading}</h3>
                {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
                <textarea className="form-control" placeholder='Write something' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>

                <div className='d-flex me-auto mt-3'>
                    <button type="button" className="btn btn-outline-primary mr-5" onClick={clickToUpperCase} >Upper Case</button>
                    <button type="button" className="btn btn-outline-success mr-5" onClick={clickToLowerCase} >Lower Case</button>
                    <button type="button" className="btn btn-outline-secondary mr-5" onClick={clickToSentenceCase} >Sentence Case</button>
                </div>

            </div>


        </>
    );

}


TextForm.propsType = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Enter your text"
}