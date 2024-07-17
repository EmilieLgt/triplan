const AbstractSeeder = require("./AbstractSeeder");
const AccountSeeder = require("./AccountSeeder");
const TravelSeeder = require("./AA_TravelSeeder");

class ActivitySeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "activity",
      truncate: true,
      dependencies: [AccountSeeder, TravelSeeder],
    });
  }

  run() {
    const activities = [
      {
        name: "Regent's Park",
        category: "Park and nature",
        price: "Free",
        neighborhood: "Westminster/Camden",
        link: "https://www.londres.fr/regents-park",
        comment: "",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
        travel_id: 2,
      },
    ];
    activities.forEach((activity) => {
      this.insert(activity);
    });
  }
}

module.exports = ActivitySeeder;
