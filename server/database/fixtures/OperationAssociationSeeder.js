const AbstractSeeder = require("./AbstractSeeder");
const AccountSeeder = require("./AccountSeeder");
const TravelSeeder = require("./AA_TravelSeeder");

class OperationAssociationSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "operation_association",
      truncate: true,
      dependencies: [AccountSeeder, TravelSeeder],
    });
  }

  run() {
    const associations = [
      {
        account_id: this.getRef("account_emma.johnson@gmail.com").insertId,
        travel_id: 2,
      },
      {
        account_id: this.getRef("account_harper.martinez@gmail.com").insertId,
        travel_id: 2,
      },
      {
        account_id: this.getRef("account_william.brown@gmail.com").insertId,
        travel_id: 2,
      },
      {
        account_id: this.getRef("account_emma.johnson@gmail.com").insertId,
        travel_id: 3,
      },
      {
        account_id: this.getRef("account_emma.johnson@gmail.com").insertId,
        travel_id: 4,
      },
      {
        account_id: this.getRef("account_emma.johnson@gmail.com").insertId,
        travel_id: 1,
      },
    ];
    associations.forEach((association) => {
      this.insert(association);
    });
  }
}

module.exports = OperationAssociationSeeder;
