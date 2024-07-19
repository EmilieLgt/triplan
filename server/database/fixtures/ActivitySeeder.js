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
        comment: "Big park with nice gardens",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA1111").insertId,
      },
      {
        name: "Jardin du Luxembourg",
        category: "Park and nature",
        price: "Free",
        neighborhood: "6th arr.",
        link: "https://www.louvre.fr/visiter/plan-acces-transports",
        comment: null,
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA0000").insertId,
      },
      {
        name: "Centre Pompidou",
        category: "Art",
        price: "15€",
        neighborhood: "4th arr.",
        link: "https://www.louvre.fr/visiter/plan-acces-transports",
        comment: null,
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA0000").insertId,
      },
      {
        name: "No-Glu",
        category: "Food",
        price: "20€-30€",
        neighborhood: "7th arr.",
        link: "https://www.louvre.fr/visiter/plan-acces-transports",
        comment: null,
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA0000").insertId,
      },
      {
        name: "Louvres",
        category: "Art",
        price: "22€",
        neighborhood: "1st arr.",
        link: "https://www.louvre.fr/visiter/plan-acces-transports",
        comment: "Nice !",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA0000").insertId,
      },
      {
        name: "Tower of London",
        category: "Other",
        price: "£25",
        neighborhood: "Tower Hamlets",
        link: "https://www.hrp.org.uk/tower-of-london/",
        comment: "A must-visit!",
        account_id: this.getRef("account_john.smith@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA1111").insertId,
      },
      {
        name: "British Museum",
        category: "Art",
        price: "Free",
        neighborhood: "Bloomsbury",
        link: "https://www.britishmuseum.org/",
        comment: "i'd love to see the egyptian collection",
        account_id: this.getRef("account_emma.johnson@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA1111").insertId,
      },
      {
        name: "Borough Market",
        category: "Other",
        price: "Varies",
        neighborhood: "Southwark",
        link: "https://boroughmarket.org.uk/",
        comment: "Great place for foodies!",
        account_id: this.getRef("account_emma.johnson@gmail.com").insertId,
        travel_id: this.getRef("travel_AAAA1111").insertId,
      },
    ];
    activities.forEach((activity) => {
      this.insert(activity);
    });
  }
}

module.exports = ActivitySeeder;
