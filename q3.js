

const User = require('./q2'); // Import User class from q2.js

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData() {
    return `Admin ${this.name} can edit website data.`;
  }
}

// Export Admin class for testing or importing in other files
module.exports = Admin;
