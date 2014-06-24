/** @jsx React.DOM */

var React = require("react");
var Chart = React.createClass({
    render: function() {
        var ss = "eee";
        return (
            <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
            );
    }
});


var Sector = React.createClass({
    render: function() {
        var arc = d3.svg.arc()
            .outerRadius(240)
            .innerRadius(0);
        return (
            <g className="arc">
                <path d={arc(this.props.data)}></path>
            </g>
            );
    }
});


var DataSeries = React.createClass({
    render: function() {

        var pie = d3.layout.pie();
        var arr = [];
        for(var i=0; i<this.props.data.length; i++){
            arr.push(this.props.data[i].tag_num);
        }

        var bars = _.map(pie(arr), function(point, i) {
            return (
                <Sector data={point} key={i}/>
                )
        });

        return (
            <g transform="translate(480, 250)">{bars}</g>
            );
    }
});


var PieChart = React.createClass({
    getDefaultProps: function() {
        return {
            width: 960,
            height: 500
        };
    },
    render: function() {
        return (
            <Chart width={this.props.width} height={this.props.height}>
                <DataSeries data={this.props.data} width={this.props.width} height={this.props.height}  />
            </Chart>
            );
    }
});

module.exports = PieChart;
