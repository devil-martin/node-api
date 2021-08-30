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

app.get("/getAllData", getAllData);
app.post("/insert", insertData);
app.get("/getById/:id", getDataById);
app.put("updateByID/:id", updateDataById);
app.delete("deletById/:id", deleteDataById);
app.all("*", page404);

app.listen(1234,() => {
	ConnectDB;
	console.log("server is running on http://localhost:1234/");
});
