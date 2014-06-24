/** @jsx React.DOM */

var React = require("react");
var hashtag = require("./hashtag");

var Hashtags = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        var self = this;
        $.getJSON( "json/hashtags.json", function( data ) {
            self.setState({data: data});
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
