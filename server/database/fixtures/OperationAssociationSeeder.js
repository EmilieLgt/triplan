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
        account_id: this.getRef("account_james.williams@gmail.com").insertId,
        travel_id: 2,
      },
    ];
    associations.forEach((association) => {
      this.insert(association);
    });
  }
}

module.exports = OperationAssociationSeeder;
