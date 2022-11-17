let express = require('express'); //use express library
let router = express.Router(); //create router
let mongoose = require('mongoose'); //use mongoose library
let Asset = require('../models/asset') // connect with asset model

module.exports.displayAssetList = (req, res, next)=>{ //make the function public within a module
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
}

module.exports.displayAdditionPage = (req, res, next)=>{ //make the function public within a module
    res.render('asset/add',{title: 'Asset Addition'})
}

module.exports.processAddition = (req, res, next)=>{ //make the function public within a module
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
}

module.exports.displayUpdatePage = (req, res, next)=>{ //make the function public within a module
    let id = req.params.id;
    Asset.findById(id,(err,assetToEdit)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.render('asset/update',{title:'Update Asset', asset:assetToEdit})
        }
    })
}

module.exports.processAssetChanges = (req, res, next)=>{ //make the function public within a module
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
}

module.exports.retireAsset = (req, res, next)=> { //make the function public within a module
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
}

module.exports.nbvReport = (req, res, next)=>{ //make the function public within a module
    Asset.find((err, assetlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('asset/nbv',{
                title: 'Asset Net Book Value', 
                Assetlist: assetlist,
            })
            console.log(assetlist);
        }
    });
}