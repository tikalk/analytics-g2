/** @jsx React.DOM */

var React = require("react");
var hashtag = require("./hashtag");

var Hashtags = React.createClass({
   getInitialState: function() {
       return {data: []};
   },
    onHashtagSelected : function(activeHashtag){
        var idx = activeHashtag.props.id;
        this.state.activeHashtagIdx = idx;

        this.props.onHashtagSelected(this.hashtags[idx].props.children);

    },
    render: function ()
    {
        var self = this;
        this.hashtags = this.props.data.map(function (tag,idx) {
            return <hashtag id={idx} count={tag.tag_num} active={self.state.activeHashtagIdx === idx} onSelected={self.onHashtagSelected}>{tag.tag_name}</hashtag>;
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
