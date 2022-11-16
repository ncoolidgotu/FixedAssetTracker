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
            res.render('asset/list',{
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
    res.render('asset/add',{title: 'Add Asset'})
});

// Post route for processing the Add page

router.post('/add',(req, res, next)=>{
    let newAsset = Asset ({
        "name":req.body.name,
        "class":req.body.class,
        "tag":req.body.tag,
        "description":req.body.description,
        "aquisitionDate":req.body.aquisitionDate,
        "usefulLife":req.body.usefulLife,
        "cost":req.body.cost,
    });
    Asset.create(newAsset,(err,Asset) => { //add the asset to the database based on above information specified
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else //redirect to the list page now that we have added the asset into the database
        {
            res.redirect('/asset-list')
        }
    })
});


// Update operation

// Get route for displaying the Edit page
router.get('/edit/:id',(req, res, next)=>{
    let id = req.params.id;
    Asset.findById(id,(err,assetToEdit)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.render('asset/edit',{title:'Update Asset', asset:assetToEdit})
        }
    })
});

// Post route for processing the Edit page

router.post('/edit/:id',(req, res, next)=>{
    let id = req.params.id;
    let updateAsset = Asset({
        "_id":id,
        "name":req.body.name,
        "class":req.body.class,
        "tag":req.body.tag,
        "description":req.body.description,
        "aquisitionDate":req.body.aquisitionDate,
        "usefulLife":req.body.usefulLife,
        "cost":req.body.cost
    });
    Asset.updateOne({_id:id}, updateAsset,(err) => {
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else //redirect to the list page now that we have updated the asset the database
        {
            res.redirect('/asset-list')
        }
    })
});

// Delete operation

// Get to perform delete operation
router.get('/delete/:id',(req, res, next)=> {
    let id = req.params.id;
    Asset.remove({_id:id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else //redirect to the list page now that we have deleted the asset from the database
        {
            res.redirect('/asset-list');
        }
    })
});
module.exports=router;
