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
        state: "planning",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
      },
      {
        city: "London",
        date_start: "2024-12-22",
        date_end: "2024-12-26",
        picture:
          "https://www.nosailleurs.com/wp-content/uploads/2023/03/visiter-londres-en-3-jours-1.jpg",
        state: "planning",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
      },
      {
        city: "Berlin",
        date_start: "2025-05-22",
        date_end: "2025-05-26",
        picture: "https://www.civitatis.com/f/alemania/berlin/berlin.jpg",
        state: "planning",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
      },
      {
        city: "New York",
        date_start: "2025-07-22",
        date_end: "2025-08-24",
        picture:
          "https://static.nationalgeographic.fr/files/styles/image_3200/public/newyorkcity.jpg?w=1600",
        state: "planning",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
      },
      {
        city: "New-Zealand",
        date_start: "2025-02-12",
        date_end: "2024-02-28",
        picture:
          "https://www.agriculture-strategies.eu/wp-content/uploads/2021/09/new-zealand-225540_1920.jpg",
        state: "project",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
      },
    ];
    travels.forEach((travel) => {
      this.insert(travel);
    });
  }
}

module.exports = TravelSeeder;
