const AbstractSeeder = require("./AbstractSeeder");

class AccountSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "account", truncate: true });
  }

  run() {
    const accounts = [
      {
        firstname: "John",
        lastname: "Smith",
        email: "john.smith@gmail.com",
        password: "azerty1",
        picture:
          "https://charts-static.billboard.com/img/2016/10/niall-horan-wlr-344x344.jpg",
      },
      {
        firstname: "Emma",
        lastname: "Johnson",
        email: "emma.johnson@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        firstname: "William",
        lastname: "Brown",
        email: "william.brown@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        firstname: "Maria",
        lastname: "Oliveiro",
        email: "maria.oliveiro@gmail.com",
        password: "azerty1",
        picture:
          "https://img.novydenik.com/wp-static/2023/10/OliviaRodrigoatVicePresidentsWestWingoffice2-e1697390525811.jpg",
      },
      {
        firstname: "James",
        lastname: "Williams",
        email: "james.williams@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/14.jpg",
      },
      {
        firstname: "Sabrina",
        lastname: "Olsen",
        email: "sabrina.olsen@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/14.jpg",
      },
      {
        firstname: "Liam",
        lastname: "Davis",
        email: "liam.davis@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/16.jpg",
      },
      {
        firstname: "Sophia",
        lastname: "Wilson",
        email: "sophia.wilson@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        firstname: "Noah",
        lastname: "Moore",
        email: "noah.moore@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/17.jpg",
      },
      {
        firstname: "Mia",
        lastname: "Anderson",
        email: "mia.anderson@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        firstname: "Lucas",
        lastname: "Thomas",
        email: "lucas.thomas@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/18.jpg",
      },
      {
        firstname: "Isabella",
        lastname: "Jackson",
        email: "isabella.jackson@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/7.jpg",
      },
      {
        firstname: "Mason",
        lastname: "White",
        email: "mason.white@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/19.jpg",
      },
      {
        firstname: "Charlotte",
        lastname: "Harris",
        email: "charlotte.harris@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        firstname: "Ethan",
        lastname: "Martin",
        email: "ethan.martin@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        firstname: "Amelia",
        lastname: "Thompson",
        email: "amelia.thompson@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/9.jpg",
      },
      {
        firstname: "Alexander",
        lastname: "Garcia",
        email: "alexander.garcia@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/21.jpg",
      },
      {
        firstname: "Harper",
        lastname: "Martinez",
        email: "harper.martinez@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        firstname: "Benjamin",
        lastname: "Robinson",
        email: "benjamin.robinson@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        firstname: "Evelyn",
        lastname: "Clark",
        email: "evelyn.clark@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/11.jpg",
      },
      {
        firstname: "George",
        lastname: "King",
        email: "george.king@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/23.jpg",
      },
      {
        firstname: "Charlotte",
        lastname: "Wright",
        email: "charlotte.wright@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        firstname: "Henry",
        lastname: "Scott",
        email: "henry.scott@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/25.jpg",
      },
      {
        firstname: "Lily",
        lastname: "Green",
        email: "lily.green@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/26.jpg",
      },
      {
        firstname: "Oscar",
        lastname: "Baker",
        email: "oscar.baker@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/27.jpg",
      },
      {
        firstname: "Grace",
        lastname: "Adams",
        email: "grace.adams@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/28.jpg",
      },
      {
        firstname: "Theo",
        lastname: "Phillips",
        email: "theo.phillips@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/29.jpg",
      },
      {
        firstname: "Chloe",
        lastname: "Turner",
        email: "chloe.turner@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/30.jpg",
      },
      {
        firstname: "Arthur",
        lastname: "Evans",
        email: "arthur.evans@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/31.jpg",
      },
      {
        firstname: "Isabelle",
        lastname: "Collins",
        email: "isabelle.collins@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      {
        firstname: "Freddie",
        lastname: "Stewart",
        email: "freddie.stewart@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/33.jpg",
      },
      {
        firstname: "Sophie",
        lastname: "Sullivan",
        email: "sophie.sullivan@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/34.jpg",
      },
      {
        firstname: "Archie",
        lastname: "Reed",
        email: "archie.reed@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        firstname: "Emily",
        lastname: "Parker",
        email: "emily.parker@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/36.jpg",
      },
      {
        firstname: "Ethan",
        lastname: "Cook",
        email: "ethan.cook@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/37.jpg",
      },
      {
        firstname: "Sienna",
        lastname: "Morgan",
        email: "sienna.morgan@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/38.jpg",
      },
      {
        firstname: "Jack",
        lastname: "Bell",
        email: "jack.bell@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        firstname: "Ava",
        lastname: "Murphy",
        email: "ava.murphy@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/40.jpg",
      },
      {
        firstname: "Logan",
        lastname: "Cooper",
        email: "logan.cooper@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/41.jpg",
      },
      {
        firstname: "Maya",
        lastname: "Richardson",
        email: "maya.richardson@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/42.jpg",
      },
    ];

    accounts.forEach((account) => {
      const accountsWithRefName = {
        ...account,
        refName: `account_${account.email}`,
      };
      this.insert(accountsWithRefName);
    });
  }
}

module.exports = AccountSeeder;
