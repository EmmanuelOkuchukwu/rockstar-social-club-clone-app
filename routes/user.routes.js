const { getUser } = require('../controller/user.controller');
const authJwt = require('../middleware/authJwt');

module.exports = function(app) {
    app.use('/api/user/getuser/:id', authJwt, getUser);
}