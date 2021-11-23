class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.numMeals = 0;
    }
    greet() {
        return `Hi, ${this.rider}!`;
    }

    eat() {
        this.numMeals ++;
        if (this.numMeals >= 3) {
              this.hungry = false;
          } 
    }
}


module.exports = Dragon;