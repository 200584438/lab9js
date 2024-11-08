

class Player {
    constructor(name) {
      this.name = name;
      this.lvl = 1;
      this.points = 0;
    }
  
    gainXp(xp) {
      if (xp >= 1 && xp <= 10) {
        this.points += xp;
        if (this.points >= 10) {
          this.lvl += 1;
          this.points -= 10;
        }
      }
    }
  
    describe() {
      return `Name: ${this.name}, Level: ${this.lvl}, Points: ${this.points}`;
    }
  }
  
  
  module.exports = Player;
  