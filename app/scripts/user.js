/** @jsx React.DOM */

var React = require("react");

var User = React.createClass({
    render: function ()
    {
        return (
            <div className="user"><img src={this.props.icon} className="icon"/> { this.props.children } </div>
            );
    }
})

module.exports = User;