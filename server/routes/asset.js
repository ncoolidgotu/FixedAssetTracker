let express = require('express'); //use express library
let router = express.Router(); //create router
let mongoose = require('mongoose'); //use mongoose library

// connect with asset model

let Asset = require('../models/asset')

// Read Operation

// Get route for the asset list

router.get('/',(req, res, next)=>{
    Asset.find((err, assetlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('asset',{
                title: 'Asset List', 
                Assetlist: assetlist,
            })
            console.log(assetlist);
        }
    });
});

// Create operation

// Get route for displaying the Add page
router.get('/add',(req, res, next)=>{

});

// Post route for processing the Add page

router.post('/add',(req, res, next)=>{

});


// Update operation

// Get route for displaying the Edit page
router.get('/edit/:id',(req, res, next)=>{

});

// Post route for processing the Edit page

router.post('/edit/:id',(req, res, next)=>{

});

// Delete operation

// Get to perform delete operation
router.get('/delete/:id',(req, res, next)=>{

});


module.exports=router;
