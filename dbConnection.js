const mongoose = require('mongoose');
const { DBURI } = require('./key');

const DbConnection = () => {
    mongoose.connect(DBURI)
        .then(() => {
            console.log('Connection SUCCESS - Mongo connection established!');
        }, (error) => {
            console.log(`Connection ERROR - Mongo connection ${error}!`);
        })
}

module.exports = { DbConnection };
