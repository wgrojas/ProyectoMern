const mongoose = require("mongoose");
const host = 'mongodb+srv://wilmar:tele2020@cluster0.osccb.mongodb.net/smartweb?retryWrites=true&w=majority';

exports.mongoConnect = () => {
    
    const mongoStringConnection = `${host}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}


// const mongoose = require("mongoose");
// const host = "localhost"
// const port = "27017"
// const db = "hr"

// exports.mongoConnect = () => {
//     const mongoStringConnection = `mongodb://${host}:${port}/${db}`
//     mongoose.connect(mongoStringConnection);
//         mongoose.Promise = global.Promise;
//         const dbConnection = mongoose.connection;
//         dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
// }
