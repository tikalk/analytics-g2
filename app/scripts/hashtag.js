/** @jsx React.DOM */

var React = require("react");

var Hashtag = React.createClass({
    getInitialState: function() {
        return {};
    },
    onSelected: function(event) {
        this.props.onSelected(this);
    },
    render: function ()
    {
        var classNames = this.props.active ? 'active' : '';
        return (
            <li className={classNames} onClick={this.onSelected}>

                <a href="#">
                    <span className="badge pull-right">{this.props.count}</span>

                    <span>{'#'}</span>{ this.props.children }
                </a>
            </li>
            );
    }
});

module.exports = Hashtag;