/** @jsx React.DOM */

var React = require("react");

//var Hello = require("./hello");
var Users = require("./users");
var serverConnector = require("./serverConnector");
var socket = serverConnector.openSocket('http://127.0.0.1:1337/');
serverConnector.addSocketEvent(socket,"blast",function(data){

});

React.renderComponent(<Users></Users>, document.getElementById("users"), function ()
{
    //read users list

});
