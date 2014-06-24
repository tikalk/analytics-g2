/** @jsx React.DOM */

var React = require("react");

var Image = React.createClass({
    render:function(){
        var url = this.props.url;
        return (<div className='imageDiv'>
            <img src={url} />
        </div>
            )
    }
});


var Images = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentWillMount: function() {
        var q = this.props.hash;

        var url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&callback=processResults&q=" + q;
        $.get(url, function(data){
            self.setState({
                data:data
            });
        })
    },
    render: function(){
        this.images = this.state.data.map(function (image,idx) {
            return <Image url={image.url}> </Image>;
        });

        return (
            <div className="images">
                <ul className="imagesUl">{this.images}</ul>
            </div>
            );
    }
});

module.exports = Images;