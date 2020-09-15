'use strict';

const host = "lallah.db.elephantsql.com";
const database = "rstbzrmv";
const user = "rstbzrmv";
const password = "eSWI3RqVlyK2cHtZYT4EiJIXfrAfLP3F";

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY: ", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const db = pgp(options);

module.exports = db;