const stud = require("../model/model");


const getAllData = async (req, res) => {
	try {
        let studData = await stud.find();
        res.json({status:'success', data:studData})
    } catch (e) {
        console.log(e);
        res.status(404).json({status:'success',msg:'something went wrong'})
    }
};

const getDataById = async (req, res) => {
	const { id } = req.params;
    try {
        // let studData = await stud.find();
        res.json({status:'success', data:studData})
    } catch (e) {
        console.log(e);
        res.status(404).json({status:'success',msg:'something went wrong'})
    }
};

const updateDataById = async (req, res) => {
	const { id } = req.params;
    try {
        let studData = await stud.findById(id);
        studData.name = req.body.name;
        studData.tech = req.body.tech;
        studData.sub = req.body.sub;
        const a1 = await studData.save();
        res.json({status:'success', data:a1})
    } catch (e) {
        console.log(e);
        res.status(404).json({status:'success',msg:'something went wrong'})
    }
};

const deleteDataById = async (req, res) => {
	const { id } = req.params;
    try {
        let studData = await stud.findById(id);
        await studData.remove();
        res.json({status:'success', data:studData})
    } catch (e) {
        console.log(e);
        res.status(404).json({status:'success',msg:'something went wrong'})
    }
};

const insertData = async (req, res) => {
    try {
        const studData = new stud({
            name:req.body.name,
            tech:req.body.tech,
            sub:req.body.sub,
        })
        const a1 = await studData.save();
        res.json({status:'success', data:a1})
    } catch (e) {
        console.log(e);
        res.status(404).json({status:'success',msg:'something went wrong'})
    }
};
const page404 = (req, res) => {
	res.status(404).send(`
    <h1>URL not found!!!</h1>
    <a href="/api/v1/all">get all data</a> <br>
    <a href="/api/v1/shops">get all data of Shops</a><br>
    <a href="/api/v1/items">get all data of Items</a>
    `);
};

module.exports = {
	page404,
	insertData,
	updateDataById,
	deleteDataById,
	getAllData,
	getDataById,
};
