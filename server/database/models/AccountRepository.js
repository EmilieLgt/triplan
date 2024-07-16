const AbstractRepository = require("./AbstractRepository");

class AccountRepository extends AbstractRepository {
  constructor() {
    super({ table: "account" });
  }

  // The C of CRUD - Create operation
  async create(account) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, picture) values (?, ?, ?, ?, ?)`,
      [
        account.firstname,
        account.lastname,
        account.email,
        account.password,
        account.picture,
      ]
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async researchByLetters(input) {
    const query = `select firstname, lastname, picture from ${this.table} where firstname like ? OR lastname like ?`;
    const likeInput = `%${input}%`;
    const [rows] = await this.database.query(query, [likeInput, likeInput]);
    return rows;
  }

  async update(account) {
    const [result] = await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, password = ?, picture = ? where id = ?`,
      [
        account.firstname,
        account.lastname,
        account.email,
        account.password,
        account.picture,
        account.id,
      ]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = AccountRepository;
