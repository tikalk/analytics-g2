/** @jsx React.DOM */

var React = require("react");
var hashtag = require("./hashtag");
var PieChart =require("./pieChart");

var Hashtags = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        var self = this;
        $.getJSON( "json/hashtags.json", function( data ) {
            self.setState({data: data});

            React.renderComponent(
                <PieChart data={data}/>, document.getElementById('dataDiv')
            );
        });
    },
    render: function ()
    {
        var hashtags = this.state.data.map(function (user) {
            return <hashtag id={user.tag_num}>{user.tag_name}</hashtag>;
        });
        return (
            <div className="hashtags">
                <h1>Hashtags list</h1>
                <div className="list">{hashtags}</div>
            </div>
            );
    }
});

module.exports = Hashtags;
