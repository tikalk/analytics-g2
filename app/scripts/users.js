/** @jsx React.DOM */

var React = require("react");
var User = require("./user");

var Users = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        var self = this;
        $.getJSON( "json/users.json", function( data ) {
            self.setState({data: data});
        });
    },
    render: function ()
    {
        var usersList = this.state.data.map(function (user) {
            return <User icon={user.icon}>{user.name}</User>;
        });
        return (
            <div className="users">
                <h1>Users list</h1>
                <div className="userList">{usersList}</div>
            </div>
            );
    }
});

module.exports = Users;
