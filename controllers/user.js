const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const accessTokenSecret = 'secretinho';

const getUser = (req, res) => {

}

const login = (req, res) => {
    const { id, name, password } = req.body;
    const user = users.find(u => {
        return u.name === name &&
            u.password === password
    });
    if (user) {
        const accessToken = jwt.sign({ id: user.id, name: user.name, password: user.password }, accessTokenSecret);
        res.json({
            accessToken
        });
    } else {
        res.send('Nome de usuário ou senha incorretos');
    }
}
module.exports = { getUser, login }