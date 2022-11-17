let express = require('express');
let router = express.Router();

module.exports.displayDashboard = (req, res, next)=>{ //export a module that will render the dashboard view (index page)
    res.render('index', { 
        title: 'Dashboard'
    });
}
