/** @jsx React.DOM */

var React = require("react");

//var Hello = require("./hello");
var Users = require("./users");
var hashtags = require("./hashtags");
var info = require("./info");


var serverConnector = require("./serverConnector");
var socket = serverConnector.openSocket('http://127.0.0.1:1337/');
serverConnector.addSocketEvent(socket,"blast",function(data){

});

React.renderComponent(<info></info>, document.getElementById("info"), function ()
{
    //read users list

});


