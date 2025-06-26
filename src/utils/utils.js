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
        case 'none':
        default:
            return inputText;
    }
};

module.exports = { applyCase }