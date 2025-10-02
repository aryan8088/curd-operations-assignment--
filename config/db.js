const sql = require("msnodesqlv8");
require("dotenv").config();

// Build connection string from .env
const connectionString = `Server=${process.env.DB_SERVER};Database=${process.env.DB_DATABASE};Trusted_Connection=Yes;Driver={${process.env.DB_DRIVER}}`;

// Function to execute SQL queries
const executeQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    sql.query(connectionString, query, params, (err, rows) => {
      if (err) return reject(err);

      //formatting
      const data = rows.map(row => {
        const obj = {};
        for (let key in row) {
          if (row.hasOwnProperty(key)) {
            if (key === "created_at" && row[key]) {
              // Format date 
              const date = new Date(row[key]);
              obj[key] =
                date.toLocaleDateString("en-GB") + ", " + date.toLocaleTimeString("en-US");
            } else {
              obj[key] = row[key];
            }
          }
        }
        return obj;
      });

      resolve(data);
    });
  });
};

module.exports = { executeQuery };
