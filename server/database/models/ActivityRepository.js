const AbstractRepository = require("./AbstractRepository");

class activityRepository extends AbstractRepository {
  constructor() {
    super({ table: "activity" });
  }

  // The C of CRUD - Create operation
  async create(activity) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, category, price, neighborhood, link, comment, account_id, travel_id) values (?, ?, ?, ?, ?, ? , ?, ?)`,
      [
        activity.name,
        activity.category,
        activity.price,
        activity.neighborhood,
        activity.link,
        activity.comment,
        activity.account_id,
        activity.travel_id,
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

  async update(activity) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, category = ?, price = ?, neighborhood = ?, link = ? , comment = ?, account_id = ?, travel_id = ? where id = ?`,
      [
        activity.name,
        activity.category,
        activity.price,
        activity.neighborhood,
        activity.link,
        activity.comment,
        activity.account_id,
        activity.travel_id,
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

module.exports = activityRepository;
