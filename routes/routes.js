const express = require("express");
const route = express.Router();
const {getUser, login} = require("../controllers/user")
const {getList} = require("../controllers/list")

route.get("/", getUser)
route.post("/login", login)

module.exports = route