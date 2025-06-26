import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { applyCase } from '../utils/utils';



function TextForm({ heading, theme }) {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [activeCase, setActiveCase] = useState('none');

    useEffect(() => {
        updateCounts(text);
    }, [text]);

    const updateCounts = (inputText) => {
        const words = inputText.split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
        setCharCount(inputText.length);
    };

    const handleCaseButtonClick = (caseType) => {
        if (!text.length && caseType !== 'none') {
            alert("Enter some text first!");
            return;
        }
        setText(applyCase(text, caseType)); // applyCase is in the outer scope
        setActiveCase(caseType);
    };

    const handleUtilityButtonClick = async (actionType) => {
        if (actionType === 'clear') {
            setText("");
            setActiveCase('none');
        } else if (actionType === 'copy') {
            if (!text.length) {
                alert("Nothing to copy!");
                return;
            }
            try {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert("Text copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy text: ", err);
                alert("Failed to copy text. Please try again or copy manually.");
            }
        } else if (actionType === 'paste') {
            try {
                const pastedText = await navigator.clipboard.readText();
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
            newText = applyCase(newText, activeCase); // applyCase is in the outer scope
        }
        setText(newText);
    };

    const getTextAreaClasses = () => {
        let classes = "form-control w-full p-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors duration-200";
        if (theme === 'dark') {
            classes += " bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400";
        } else if (theme === 'blue') {
            classes += " bg-blue-100 text-blue-900 border-blue-300 focus:ring-blue-400";
        } else if (theme === 'green') {
            classes += " bg-green-100 text-green-900 border-green-300 focus:ring-green-400";
        } else if (theme === 'red') {
            classes += " bg-red-100 text-red-900 border-red-300 focus:ring-red-400";
        } else if (theme === 'purple') {
            classes += " bg-purple-100 text-purple-900 border-purple-300 focus:ring-purple-400";
        } else if (theme === 'orange') {
            classes += " bg-orange-100 text-orange-900 border-orange-300 focus:ring-orange-400";
        }
        else {
            classes += " bg-white text-gray-900 border-gray-300 focus:ring-blue-500";
        }
        return classes;
    };

    const getSummaryTextClasses = () => {
        if (theme === 'dark') {
            return "text-gray-100";
        } else if (theme === 'blue') {
            return "text-blue-800";
        } else if (theme === 'green') {
            return "text-green-800";
        } else if (theme === 'red') {
            return "text-red-800";
        } else if (theme === 'purple') {
            return "text-purple-800";
        } else if (theme === 'orange') {
            return "text-orange-800";
        }
        else {
            return "text-gray-800";
        }
    };

    return (
        <div className="container mx-auto p-4 rounded-lg">
            <h3 className={`text-2xl font-semibold mb-4 ${getSummaryTextClasses()}`}>{heading}</h3>
            <textarea
                className={getTextAreaClasses()}
                placeholder='Write something...'
                value={text}
                onChange={handleOnChange}
                id="textFormTextArea"
                rows="8"
            ></textarea>

            {/* Case Conversion Buttons */}
            <div className='flex flex-wrap gap-3 mt-4'>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${activeCase === 'uppercase' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}
                    onClick={() => handleCaseButtonClick('uppercase')}
                >
                    Upper Case
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${activeCase === 'lowercase' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}
                    onClick={() => handleCaseButtonClick('lowercase')}
                >
                    Lower Case
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${activeCase === 'sentencecase' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}
                    onClick={() => handleCaseButtonClick('sentencecase')}
                >
                    Sentence Case
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${activeCase === 'none' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}
                    onClick={() => handleCaseButtonClick('none')}
                >
                    No Style
                </button>
            </div>

            {/* Utility Buttons */}
            <div className='flex flex-wrap gap-3 mt-3'>
                <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => handleUtilityButtonClick('copy')}
                >
                    Copy Text
                </button>
                <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition-colors duration-200"
                    onClick={() => handleUtilityButtonClick('paste')}
                >
                    Paste Text
                </button>
                <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                    onClick={() => handleUtilityButtonClick('clear')}
                >
                    Clear Text
                </button>
            </div>

            <div className={`mt-5 p-4 rounded-lg shadow-inner ${
                theme === 'dark' ? 'bg-gray-800' :
                theme === 'blue' ? 'bg-blue-100' :
                theme === 'green' ? 'bg-green-100' :
                theme === 'red' ? 'bg-red-100' :
                theme === 'purple' ? 'bg-purple-100' :
                theme === 'orange' ? 'bg-orange-100' :
                'bg-gray-50'
            }`}>
                <h4 className={`text-xl font-semibold mb-2 ${getSummaryTextClasses()}`}>Your Text Summary</h4>
                <p className={`${getSummaryTextClasses()}`}>
                    It has **{wordCount}** words and **{charCount}** characters.
                </p>
            </div>
        </div>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string,
    theme: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
    heading: "Enter your text",
};

export default TextForm;
