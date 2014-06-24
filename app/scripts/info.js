/** @jsx React.DOM */

var React = require("react");
var hashtags = require("./hashtags");
var pieChart =require("./pieChart");
var Images =require("./Images");
var Tweets =require("./Tweets");


var Info = React.createClass({
    getInitialState: function() {
        return {data: []};
    },

    componentWillMount: function() {
        var self = this;
        $.getJSON( "json/hashtags.json", function( data ) {
            self.setState({data: data});
            React.renderComponent(
                <pieChart data={data}/>, document.getElementById('chartDiv')
            );
        });
    },

    getPhotos:function(q, next){
        var iURL = "http://ajax.googleapis.com/ajax/services/search/images";
        $.ajax({
            url: iURL,
            type: 'GET',
            dataType: 'jsonp',
            data: {
                v:  '1.0',
                q:  q,
                limit:200,
                rez:[1-10],
                isz:"m",
                format: 'json',
                jsoncallback:  '?'
            },
            success: function(data){
                next(data.responseData.results);
            }
        });
    },

    onHashtagSelected:function(hashtag){

        var self = this;
        $('svg').slideUp();
        $.getJSON( "json/tweets.json?hash="+hashtag, function( data ) {
            self.setState({
                tweets: data,
                hash:hashtag
            });
        });


        self.getPhotos(hashtag,function(data){
            /*$("#dataDiv ul").html("");*/
            React.renderComponent(<Images images={data} hash={hashtag}></Images>, document.getElementById("imagesDiv"), function ()
            {
                //read users list
            });

            React.renderComponent(<Tweets tweets={self.state.tweets}></Tweets>, document.getElementById("tweetsDiv"), function ()
            {
                //read users list
            });

        })

    },
    render: function ()
    {
        return (
            <div>
                <div className="col-lg-4">
                    <hashtags className="hashtags" data={this.state.data} onHashtagSelected={this.onHashtagSelected}></hashtags>
                </div>

                <div className="col-lg-8">
                    <div id="chartDiv"></div>
                    <div className="row">
                        <div className="col-lg-8" id="tweetsDiv"></div>
                        <div className="col-lg-4" id="imagesDiv"></div>
                    </div>
                </div>

            </div>
            );
    }
});

module.exports = Info;
