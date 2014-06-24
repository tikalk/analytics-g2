/** @jsx React.DOM */

var React = require("react");
var Hello = require("./hello");
var serverConnector = require("./serverConnector");
var socket = serverConnector.openSocket('http://127.0.0.1:1337/');

serverConnector.addSocketEvent(socket,"blast",function(data){

});


React.renderComponent(<Hello>Hello from <b>React</b>!</Hello>, document.getElementById("container"), function ()
{
    console.info("mounted");
})
