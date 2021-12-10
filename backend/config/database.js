const host = 'mongodb+srv://<wilmar>:<tele2020>@cluster0.osccb.mongodb.net/smartweb?retryWrites=true&w=majority';
const mongoose = require("mongoose");
remoteUser = 'wilmar'
remotePass = 'tele2020'
remoteHost = 'cluster0.osccb.mongodb.net'
remoteDb = 'smartweb'

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb+srv://${remoteUser}:${remotePass}@${remoteHost}/${remoteDb}?retryWrites=true&w=majority`
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection error"))
}
