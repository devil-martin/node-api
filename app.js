const express = require("express");
const ConnectDB = require("./db/mongoDB");
const {
	page404,
	insertData,
	updateDataById,
	deleteDataById,
	getAllData,
	getDataById,
} = require("./controller/controller");

const app = express();
app.use(express.json());

app.get("/", getAllData);
app.post("/", insertData);
app.get("/:id", getDataById);
app.put("/:id", updateDataById);
app.delete("/:id", deleteDataById);
app.all("*", page404);

app.listen(1234,() => {
	ConnectDB;
	console.log("server is running on http://localhost:1234/");
});
