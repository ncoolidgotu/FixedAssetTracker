let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); //use mongoose library
let Asset = require('../models/asset') // connect with asset model

module.exports.displayDashboard = (req, res, next)=>{ //make the function public within a module
    Asset.find((err, assetlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('index',{
                title: 'Dashboard', 
                Assetlist: assetlist,
            })
            console.log(assetlist);
        }
    });
}

