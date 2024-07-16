const AbstractSeeder = require("./AbstractSeeder");
const AccountSeeder = require("./AccountSeeder");

class TravelSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "travel", truncate: true, dependencies: [AccountSeeder] });
  }

  run() {
    const travels = [
      {
        city: "Paris",
        date_start: "2024-10-01",
        date_end: "2024-10-15",
        picture:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
      },
    ];
    travels.forEach((account) => {
      this.insert(account);
    });
  }
}

module.exports = TravelSeeder;
