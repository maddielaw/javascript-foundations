class Hobbit {
    constructor(creds) {
        this.name = creds.name;
        this.age = 0;
        this.adult = false;
        this.old = false;
        this.hasRing = false;
    }
    celebrateBirthday() {
        this.age ++;
        if (this.age >= 33 && this.age < 101) {
            this.adult = true;
        } else if (this.age >= 101) {
            this.old = true;
        } else {
            this.adult = false;
        }
    }
    getRing() {
        if (this.name === "Frodo") {
            this.hasRing = true;
            return "Here is the ring!"
        } else {
            this.hasRing = false;
            return "You can't have it!"
        }
    }
}

module.exports = Hobbit




