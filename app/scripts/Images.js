/** @jsx React.DOM */

var React = require("react");

var Image = React.createClass({
    render:function(){
        var url = this.props.url;
        return (<div className='row'>
            <div className='col-lg-12'>
                <div className='imageDiv'>
                <img src={url} className='img-circle'/>
                </div>
            </div>
        </div>
            )
    }
});


var Images = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentWillMount: function() {

    },
    render: function(){
        var self = this;

        self.images =  this.props.images.map(function (image,idx) {
            return <Image url={image.url}> </Image>;
        });

        return (
            <div className="images">
                <ul className="imagesUl">{self.images}</ul>
            </div>
            );
    }
});

module.exports = Images;