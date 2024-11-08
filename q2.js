

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    viewData() {
      return `Name: ${this.name}, Email: ${this.email}`;
    }
  }
  
  // Export User class for testing or importing in other files
  module.exports = User;
  