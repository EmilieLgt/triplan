const AbstractRepository = require("./AbstractRepository");

class assocationRepository extends AbstractRepository {
  constructor() {
    super({ table: "operation_association" });
  }

  // The C of CRUD - Create operation
  async create(association) {
    const [result] = await this.database.query(
      `insert into ${this.table} (account_id, travel_id) values (?, ?)`,
      [association.account_id, association.travel_id]
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

  async readWithTravel(travelId) {
    const [rows] = await this.database.query(
      `SELECT a.id, a.picture, a.firstname, a.lastname
      FROM operation_association oa
      LEFT JOIN account a ON oa.account_id = a.id
      WHERE oa.travel_id = ?`,
      [travelId]
    );
    return rows;
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

module.exports = assocationRepository;
