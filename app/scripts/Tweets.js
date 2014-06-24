/** @jsx React.DOM */

var React = require("react");

var Tweet = React.createClass({
    render:function(){
        var text = this.props.text;
        var image =    this.props.image;
        var userName =    this.props.userName;
        return(
            <div className='tweet row'>
                <div className='col-lg-2 user'>
                    <img src={image} />
                    <div  className='nameTag'>{userName}</div>
                </div>
                <div className='col-lg-10 text'>
                    <span>{text}</span>
                </div>
            </div>
            )
    }
});


var Tweets = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentWillMount: function() {

    },
    render: function(){
        var self = this;


        self.tweets =  this.props.tweets.map(function (tweet,idx) {
            return <Tweet text={tweet.text} image={tweet.user.profile_image_url_https} userName={tweet.user.name}> </Tweet>;
        });

        return (
            <div className='tweets'>
                <ul className='imagesUl'>{self.tweets}</ul>
            </div>
            );
    }
});

module.exports = Tweets;