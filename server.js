const express = require('express');
const app = express();
const PORT = 8081;

app.use('/', (req, res) => {
    res.send({
        message: 'Welcome to the rockstar social club Clone API'
    })
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})