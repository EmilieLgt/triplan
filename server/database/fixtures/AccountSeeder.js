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
        picture: "https://randomuser.me/api/portraits/men/15.jpg",
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
        firstname: "Olivia",
        lastname: "Taylor",
        email: "olivia.taylor@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        firstname: "James",
        lastname: "Williams",
        email: "james.williams@gmail.com",
        password: "azerty1",
        picture: "https://randomuser.me/api/portraits/men/14.jpg",
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
