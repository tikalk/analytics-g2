/** @jsx React.DOM */

var React = require("react");

var Hashtag = React.createClass({
    render: function ()
    {
        return (
            <div className="hashtag" id={this.props.id}>{ this.props.children } </div>
            );
    }
});

module.exports = Hashtag;