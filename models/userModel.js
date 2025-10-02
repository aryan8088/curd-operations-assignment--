const { executeQuery } = require("../config/db");

const User = {
  getAll: () => executeQuery("SELECT * FROM dbo.[Users]"),
  getById: (id) => executeQuery(`SELECT * FROM dbo.[Users] WHERE id=${id}`),
  create: ({ name, email }) =>
    executeQuery(
      `INSERT INTO dbo.[Users] (name, email, created_at) VALUES ('${name}', '${email}', GETDATE())`
    ),
  update: (id, { name, email }) =>
    executeQuery(
      `UPDATE dbo.[Users] SET name='${name}', email='${email}' WHERE id=${id}`
    ),
  delete: (id) => executeQuery(`DELETE FROM dbo.[Users] WHERE id=${id}`)
};

module.exports = User;
