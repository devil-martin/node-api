const mongoose = require("mongoose");
const url =
	"mongodb+srv://API-User:EfutmxuP1nPchOTl@cluster0.ztq02.mongodb.net/YT-tutorial-demo?retryWrites=true&w=majority";
// const url = "mongodb://localhost/myDB";
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// const DB_PWD = 'EfutmxuP1nPchOTl';
//? Replace <password> with the password for the API-User user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.

// const con = mongoose.connection;
// const ConnectDB = con.on("open", () => {
// 	console.log("connected DB...");
// });

const ConnectDB = mongoose.connection.on("open", () => {
	console.log("connected DB...");
});

module.exports = ConnectDB;
