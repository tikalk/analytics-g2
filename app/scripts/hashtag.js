/** @jsx React.DOM */

var React = require("react");

var Hashtag = React.createClass({
    render: function ()
    {
        return (
            <li className="active">
                <a href="#">
                    <span className="badge pull-right">{this.props.count}</span>
                { this.props.children }
                </a>
            </li>
            );
    }
});

module.exports = Hashtag;