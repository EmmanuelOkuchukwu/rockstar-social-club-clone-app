const { register, login } = require('../controller/auth.controller');

module.exports = function(app) {
    app.use('/api/auth/register', register);
    app.use('/api/auth/login', login);
}
