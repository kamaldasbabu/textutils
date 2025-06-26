import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [activeCase, setActiveCase] = useState('none'); // 'none', 'uppercase', 'lowercase', 'sentencecase'

    // Update word and character counts whenever the text changes
    useEffect(() => {
        updateCounts(text);
    }, [text]);

    const updateCounts = (inputText) => {
        const words = inputText.split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
        setCharCount(inputText.length);
    };

    const applyCase = (inputText, caseType) => {
        switch (caseType) {
            case 'uppercase':
                return inputText.toUpperCase();
            case 'lowercase':
                return inputText.toLowerCase();
            case 'sentencecase':
                if (!inputText.length) return "";
                const newText = inputText.toLowerCase();
                const rg = /(^\w{1}|\.\s*\w{1})/gi;
                return newText.replace(rg, (toReplace) => toReplace.toUpperCase());
            case 'none': // For the "No Style" button
                return inputText;
            default:
                return inputText;
        }
    };

    const handleCaseButtonClick = (caseType) => {
        // Prevent action if text area is empty, except for 'none'
        if (!text.length && caseType !== 'none') {
            alert("Enter some text first!");
            return;
        }

        setText(applyCase(text, caseType));
        setActiveCase(caseType);
    };

    const handleUtilityButtonClick = async (actionType) => {
        if (actionType === 'clear') {
            setText("");
            setActiveCase('none'); // Reset active case when clearing
        } else if (actionType === 'copy') {
            if (!text.length) {
                alert("Nothing to copy!");
                return;
            }
            try {
                await navigator.clipboard.writeText(text);
                alert("Text copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy text: ", err);
                alert("Failed to copy text. Please try again.");
            }
        } else if (actionType === 'paste') {
            try {
                const pastedText = await navigator.clipboard.readText();
                // Apply current active case to pasted text if not 'none'
                const processedPastedText = activeCase !== 'none' ? applyCase(pastedText, activeCase) : pastedText;
                setText(prevText => prevText + processedPastedText);
                alert("Text pasted!");
            } catch (err) {
                console.error("Failed to paste text: ", err);
                alert("Failed to paste text. Please ensure clipboard access is granted and there is text to paste.");
            }
        }
    };

    const handleOnChange = (event) => {
        let newText = event.target.value;
        if (activeCase !== 'none') {
            newText = applyCase(newText, activeCase);
        }
        setText(newText);
    };

    return (
        <>
            <div className="container mb-3">
                <h3>{props.heading}</h3>
                <textarea
                    className="form-control"
                    placeholder='Write something'
                    value={text}
                    onChange={handleOnChange}
                    id="exampleFormControlTextarea1"
                    rows="8"
                ></textarea>

                {/* Case Conversion Buttons */}
                <div className='d-flex flex-wrap gap-2 mt-3'>
                    <button
                        type="button"
                        className={`btn ${activeCase === 'uppercase' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleCaseButtonClick('uppercase')}
                    >
                        Upper Case
                    </button>
                    <button
                        type="button"
                        className={`btn ${activeCase === 'lowercase' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={() => handleCaseButtonClick('lowercase')}
                    >
                        Lower Case
                    </button>
                    <button
                        type="button"
                        className={`btn ${activeCase === 'sentencecase' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                        onClick={() => handleCaseButtonClick('sentencecase')}
                    >
                        Sentence Case
                    </button>
                    <button
                        type="button"
                        className={`btn ${activeCase === 'none' ? 'btn-info' : 'btn-outline-info'}`}
                        onClick={() => handleCaseButtonClick('none')}
                    >
                        No Style
                    </button>
                </div>

                {/* Utility Buttons */}
                <div className='d-flex flex-wrap gap-2 mt-3'>
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleUtilityButtonClick('copy')}
                    >
                        Copy Text
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => handleUtilityButtonClick('paste')}
                    >
                        Paste Text
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => handleUtilityButtonClick('clear')}
                    >
                        Clear Text
                    </button>
                </div>

                <div className="container my-3">
                    <h4>Your Text Summary</h4>
                    <p>
                        It has **{wordCount}** words and **{charCount}** characters.
                    </p>
                </div>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string,
};

TextForm.defaultProps = {
    heading: "Enter your text",
};