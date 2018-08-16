var express = require ("express");
var router = express.Router();
require('./route/index')(router);
require('./route/users')(router);

module.exports = function(app) {
    app.use("/", router);
}
