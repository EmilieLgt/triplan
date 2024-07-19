const AbstractSeeder = require("./AbstractSeeder");
const AccountSeeder = require("./AccountSeeder");

class OperationFriendSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "operation_friend",
      truncate: true,
      dependencies: [AccountSeeder],
    });
  }

  run() {
    const associations = [
      {
        status: "Pending",
        account_id1: this.getRef("account_james.williams@gmail.com").insertId,
        account_id2: this.getRef("account_john.smith@gmail.com").insertId,
      },
      {
        status: "Pending",
        account_id1: this.getRef("account_sabrina.olsen@gmail.com").insertId,
        account_id2: this.getRef("account_john.smith@gmail.com").insertId,
      },
      {
        status: "Accepted",
        account_id1: this.getRef("account_john.smith@gmail.com").insertId,
        account_id2: this.getRef("account_emma.johnson@gmail.com").insertId,
      },
      {
        status: "Accepted",
        account_id1: this.getRef("account_harper.martinez@gmail.com").insertId,
        account_id2: this.getRef("account_john.smith@gmail.com").insertId,
      },
      {
        status: "Accepted",
        account_id1: this.getRef("account_william.brown@gmail.com").insertId,
        account_id2: this.getRef("account_john.smith@gmail.com").insertId,
      },
    ];
    associations.forEach((association) => {
      this.insert(association);
    });
  }
}

module.exports = OperationFriendSeeder;
