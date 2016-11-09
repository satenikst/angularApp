/**
 * Created by digimuflon1 on 10/26/16.
 */
var express = require('express');
var app = express();
app.use(express.static('public'));
var mongoose = require('mongoose');
// mongoose.connect('mongodb://Sisi:823543st@ds031167.mlab.com:31167/sisi');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );

var User = mongoose.model('User', {
    firstName:String,
    lastName:String,
    address:String,
    state:String,
    city:String,
    postalCode:Number
});

app.post('/', function(req, res){
    var user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        state:req.body.state,
        city:req.body.city,
        postalCode:req.body.postalCode
    });
    user.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("it ok");
        }
    });
    console.log(user);
});


app.listen(3000, function () {
    console.log('port 3000');
});
