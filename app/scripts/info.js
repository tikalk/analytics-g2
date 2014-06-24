/** @jsx React.DOM */

var React = require("react");
var hashtags = require("./hashtags");
var pieChart =require("./pieChart");


var Info = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        var self = this;
        $.getJSON( "json/hashtags.json", function( data ) {
            self.setState({data: data});
            React.renderComponent(
                <pieChart data={data}/>, document.getElementById('dataDiv')
            );
        });
    },
    onHashtagSelected:function(hashtag){
        $('svg').toggle( "slide" )
        $.getJSON( "json/tweets.json?hash="+hashtag, function( data ) {
            self.setState({tweets: data});
        });
    },
    render: function ()
    {
        return (
            <div>
                <div className="col-lg-4">
                    <hashtags className="hashtags" data={this.state.data} onHashtagSelected={this.onHashtagSelected}></hashtags>
                </div>
                <div className="col-lg-8" id="dataDiv">
                </div>

            </div>
            );
    }
});

module.exports = Info;
