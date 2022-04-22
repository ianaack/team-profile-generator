const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(officeNumber) {
    return (this.officeNumber = officeNumber);
  }

  getRole() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      officeNumber: this.officeNumber,
    };
  }
}

module.exports = Manager;
