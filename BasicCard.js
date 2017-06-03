class BasicCard {
    constructor (front, back) {
        this.front = front;
        this.back = back;
    }

    displayFront () {
        if (this.front) {
            console.log(this.back); 
        } 
    }

    displayBack () {
        if (this.back) {
            console.log(this.front); 
        }
    }
}

var firstPresident = new BasicCard ("Who was the first president of the United States?", "George Washington");

firstPresident.displayBack ();
firstPresident.displayFront();