// ClozeCard constructor that accepts two arguments, text and cloze. 
class ClozeCard {
    constructor(text, cloze) {
        // Log an error when the cloze deletion is not included in the full text. 
        if (text.indexOf(cloze) < 0) {
            return console.error("Error - cloze not found in text.");
        } 

        this.cloze = cloze;
        this.fullText = text;
        this.partial = this.partial (cloze, text);
    }

// Partial method that will return only partial text.
    partial(cloze, fullText) {
        for (var i = 0; i < fullText.length; ++i) {
            if (fullText.substring(i, i + cloze.length) == cloze) {
                fullText = fullText.substring(0, i) + "..." + fullText.substring(i + cloze.length, fullText.length);
            }
        }
        return fullText;
    };
}

// Testing using question from instructions. 
// var firstPresident = new ClozeCard ("George Washington is the first president of the US.", "George Washington");
// console.log(firstPresident); 

module.exports = ClozeCard;