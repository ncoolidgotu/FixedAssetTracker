let mongoose = require('mongoose');
//create asset model
let assetModel = mongoose.Schema({
    name: String,
    class: String,
    tag: String,
    description: String,
    aquisitionDate: Date,
    usefulLife: Number,
    cost: Number,
},
{
    collection: "assets"
});
module.exports = mongoose.model('Asset', assetModel)