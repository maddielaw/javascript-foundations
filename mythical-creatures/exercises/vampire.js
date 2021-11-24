class Vampire {
    constructor(name, pet) {
        this.name = name;
        this.thirsty = true;
        this.pet = pet;
        if (pet === undefined) {
            this.pet = "bat";
        } else {
            this.pet = pet;
        }
        this.ouncesDrank = 0;
    }
    drink() {
        this.thirsty = false;
        if (this.ouncesDrank >= 50) {
            return "I'm too full to drink anymore!"
        } else {
            this.ouncesDrank += 10
        }
    }
}



module.exports = Vampire;