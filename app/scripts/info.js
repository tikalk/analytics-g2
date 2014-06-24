/** @jsx React.DOM */

var React = require("react");
var hashtags = require("./hashtags");

var Info = React.createClass({
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
        return (
            <div>
                <div class="col-lg-4">
                    <hashtags className="hashtags"></hashtags>
                </div>
                <div class="col-lg-8" id="dataDiv">
                sss
                </div>

            </div>
            );
    }
});

module.exports = Info;
