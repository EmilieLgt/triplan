const AbstractRepository = require("./AbstractRepository");

class TravelRepository extends AbstractRepository {
  constructor() {
    super({ table: "travel" });
  }

  // The C of CRUD - Create operation
  async create(travel) {
    const [result] = await this.database.query(
      `insert into ${this.table} (city, date_start, date_end, picture, state, account_id) values (?, ?, ?, ?, ?, ?)`,
      [
        travel.city,
        travel.date_start,
        travel.date_end,
        travel.picture,
        travel.state,
        travel.account_id,
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

  // Read all trips from one user

  async readByUser(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE account_id = ?`,
      [id]
    );
    return rows;
  }

  async update(travel) {
    const [result] = await this.database.query(
      `update ${this.table} set city = ?, date_start = ?, date_end = ?, picture = ?, state = ?, account_id = ? where id = ?`,
      [
        travel.city,
        travel.date_start,
        travel.date_end,
        travel.state,
        travel.picture,
        travel.account_id,
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

module.exports = TravelRepository;
