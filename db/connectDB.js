const mongoose = require('mongoose')
// const url ="mongodb+srv://API-User:EfutmxuP1nPchOTl@cluster0.ztq02.mongodb.net/YT-tutorial-demo?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
  })
}

module.exports = connectDB
