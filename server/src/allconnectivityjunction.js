const express = require('express');
const { adminPanelRouters, websiteRouters } = require('./routers/routersjunction');

const allRouters = express.Router();

allRouters.use('/admin-panel', adminPanelRouters);
allRouters.use('/website', websiteRouters);


module.exports = allRouters;