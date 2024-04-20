const mongoos = require("mongoose");

const usersSchema = new mongoos.Schema({
    name: String,
    email: String,
    password: String,
})

module.exports = mongoos.model("users", usersSchema);