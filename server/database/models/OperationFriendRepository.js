const AbstractRepository = require("./AbstractRepository");

class OperationFriendRepository extends AbstractRepository {
  constructor() {
    super({ table: "operation_friend" });
  }

  // The C of CRUD - Create operation
  async create(friendRequest) {
    const [result] = await this.database.query(
      `insert into ${this.table} (status, account_id1, account_id2) values (?, ?, ?)`,
      [
        friendRequest.status,
        friendRequest.account_id1,
        friendRequest.account_id1,
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

  async readFromRequest(id) {
    const [friends] = await this.database.query(
      `select opf.account_id2, opf.status, a.picture, a.firstname, a.lastname 
       FROM ${this.table} opf
       JOIN account a ON opf.account_id2 = a.id
       WHERE opf.account_id1 = ?`,
      [id]
    );
    return friends;
  }

  async readPostRequest(id) {
    const [friends] = await this.database.query(
      `SELECT opf.account_id1, opf.status, a.picture, a.firstname, a.lastname
       FROM ${this.table} opf
       JOIN account a ON opf.account_id1 = a.id
       WHERE opf.account_id2 = ?`,
      [id]
    );
    return friends;
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

module.exports = OperationFriendRepository;
