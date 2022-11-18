let express = require('express'); //use express library
let router = express.Router(); //create router
let mongoose = require('mongoose'); //use mongoose library

// connect with asset model

let Asset = require('../models/asset')

let assetController = require('../controller/asset')


// Read Operation

// Get route for the asset list

router.get('/', assetController.displayAssetList);


// Create operation

// Get route for displaying the Add page
router.get('/add', assetController.displayAdditionPage);

// Post route for processing the Add page

router.post('/add', assetController.processAddition);


// Update operation

// Get route for displaying the update page
router.get('/update/:id', assetController.displayUpdatePage);

// Post route for processing the update page

router.post('/update/:id', assetController.processAssetChanges);



// Read Operation (Different read view for asset value calculations)

// Get to perform read operations

router.get('/retire/:id', assetController.retireAsset);

router.get('/nbv', assetController.nbvReport);




module.exports=router; //declare as a router, make all functions public
