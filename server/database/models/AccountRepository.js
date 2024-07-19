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
    const query = `select id, firstname, lastname, picture from ${this.table} where firstname like ? OR lastname like ?`;
    const likeInput = `%${input}%`;
    const [rows] = await this.database.query(query, [likeInput, likeInput]);
    return rows;
  }

  async readByEmail(email) {
    const [accountRows] = await this.database.query(
      `
      SELECT
        a.id,
        a.firstname,
        a.lastname,
        a.email,
        a.password,
        a.picture
      FROM
        account a
      WHERE
        a.email = ?
      `,
      [email]
    );
    return accountRows;
  }

  async readWithTrips(id) {
    const [rows] = await this.database.query(
      `SELECT
        a.firstname,
        a.lastname,
        a.email,
        a.password,
        a.picture,
        t.id AS travel_id,
        t.city,
        t.random,
        t.date_start,
        t.date_end,
        t.state
        t.picture AS travel_picture
      FROM
        account a
       LEFT JOIN travel t ON a.id = t.account_id   
       WHERE
        a.id = ? 
      `,
      [id]
    );
    return rows[0];
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
