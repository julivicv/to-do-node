const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const accessTokenSecret = 'secretinho';

list = [
    {
        name: "dormir",
        description: "nada",
        state: "pendent"
    },
    {
        name: "comer",
        descrption: "nada",
        state: "done"
    }
]