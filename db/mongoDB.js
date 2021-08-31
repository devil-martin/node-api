const mongoose = require("mongoose");

// const local_url = "mongodb://localhost/myDB";

// const DB_PWD = 'EfutmxuP1nPchOTl';
const url ="mongodb+srv://API-User:EfutmxuP1nPchOTl@cluster0.ztq02.mongodb.net/YT-tutorial-demo?retryWrites=true&w=majority";
//? Replace <password> with the password for the API-User user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


// const con = mongoose.connection;
// const ConnectDB = con.on("open", () => {
// 	console.log("connected DB...");
// });

const ConnectDB = mongoose.connection.on("open", () => {
	console.log("connected DB...");
});
module.exports = ConnectDB;
