const sql = require("msnodesqlv8");

const connectionString = "Server=DESKTOP-3FH13VF\\SQLEXPRESS;Database=testdb;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";
const query = "SELECT * FROM dbo.[Users]"; // Correct table name

sql.query(connectionString, query, (err, rows) => {
    if (err) {
        console.error("Error fetching data:", err);
        return;
    }
    console.log("Users table rows:", rows);
});
