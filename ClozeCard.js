class ClozeCard {
    constructor(text, cloze) {
        if (text.indexOf(cloze) < 0) {
            return console.error("Error - cloze not found in text.");
        } 

        this.cloze = cloze;
        this.fullText = text;
        this.partial = this.partial (cloze, text);
    }

    partial(cloze, fullText) {
        for (var i = 0; i < fullText.length; ++i) {
            if (fullText.substring(i, i + cloze.length) == cloze) {
                fullText = fullText.substring(0, i) + "..." + fullText.substring(i + cloze.length, fullText.length);
            }
        }
        console.log(fullText);
        return fullText;
    };

}


var firstPresident = new ClozeCard ("George Washington is the first president of the US.", "George Washington");
console.log(firstPresident); 

