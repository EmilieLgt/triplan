const tables = require("../../database/tables");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await tables.account.readByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user[0].password !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const account = {
      id: user[0].id,
      lastname: user[0].lastname,
      firstname: user[0].firstname,
      email: user[0].email,
      picture: user[0].picture,
    };
    return res.status(200).json({
      account,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred", error });
  }
};
module.exports = {
  login,
};
