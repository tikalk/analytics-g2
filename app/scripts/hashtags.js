/** @jsx React.DOM */

var React = require("react");
var hashtag = require("./hashtag");

var Hashtags = React.createClass({
//    getInitialState: function() {
//        return {data: []};
//    },
//    componentWillMount: function() {
//        var self = this;
//        $.getJSON( "json/hashtags.json", function( data ) {
//            self.setState({data: data});
//        });
//    },
    onHashtagSelected : function(activeHashtag){
        $.each(this.hashtags,function(idx,tag){
            tag.setActive(tag === activeHashtag);
        });
        this.props.onHashtagSelected(this.hashtags[activeHashtag.props.id].props.children);
    },
    render: function ()
    {
        var self = this;
        this.hashtags = this.props.data.map(function (tag,idx) {
            return <hashtag id={idx} count={tag.tag_num} onSelected={self.onHashtagSelected}>{tag.tag_name}</hashtag>;
        });
        return (
            <div className="hashtags">
                <h1>Hashtags list</h1>
                <ul className="nav nav-pills nav-stacked">{this.hashtags}</ul>
            </div>
            );
    }
});

module.exports = Hashtags;
