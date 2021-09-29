const express = require('express');
const app = express();
const { DbConnection } = require('./dbConnection');
const cors = require('cors')
const bodyParser = require('body-parser');

const PORT = 8081;
DbConnection();

const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));

require('./model/user.model');

app.use(express.json());
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res) => {
    res.send({ message: 'Welcome to the rockstar social club Clone API' });
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
