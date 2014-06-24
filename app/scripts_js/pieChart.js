(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */

/*
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
 */


var PieChart = React.createClass({displayName: 'PieChart',
    getDefaultProps: function() {
        return {
            width: 500,
            height: 500 ,
            radius:200
        };
    },
    render: function() {
        return (
            React.DOM.div( {id:"pieChart"}

            )
            );
    },

    componentDidMount:function(){
        var w = this.props.width,                        //width
            h = this.props.height,                            //height
            r = this.props.radius,                            //radius
            color = d3.scale.category20c();     //builtin range of colors

        var data = this.props.data;


        var vis = d3.select("#pieChart")
            .append("svg:svg")              //create the SVG element inside the <body>
            .data([data])                   //associate our data with the document
            .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
            .attr("height", h)
            .append("svg:g")                //make a group to hold our pie chart
            .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

        var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
            .outerRadius(r);

        var pie = d3.layout.pie()           //this will create arc data for us given a list of values
            .value(function(d) { return d.tag_num; });    //we must tell it out to access the value of each element in our data array

        var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
            .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
            .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
            .attr("class", "slice");    //allow us to style things in the slices (like text)

        arcs.append("svg:path")
            .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
            .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

        arcs.append("svg:text")                                     //add a label to each slice
            .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) {
                var z = "shavit";
                return data[i].tag_name; });        //get the label from our original data array
    }
});

module.exports = PieChart;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9zaGF2aXQvc2hhdml0L3Rpa2FsL2FuYWx5dGljcy1nMi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9zaGF2aXQvc2hhdml0L3Rpa2FsL2FuYWx5dGljcy1nMi9hcHAvc2NyaXB0cy9mYWtlXzQyMjgyOTQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbi8qXG4gdmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuIHZhciBDaGFydCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiByZW5kZXI6IGZ1bmN0aW9uKCkge1xuIHZhciBzcyA9IFwiZWVlXCI7XG4gcmV0dXJuIChcbiA8c3ZnIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3N2Zz5cbiApO1xuIH1cbiB9KTtcblxuXG4gdmFyIFNlY3RvciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiByZW5kZXI6IGZ1bmN0aW9uKCkge1xuIHZhciBhcmMgPSBkMy5zdmcuYXJjKClcbiAub3V0ZXJSYWRpdXMoMjQwKVxuIC5pbm5lclJhZGl1cygwKTtcbiByZXR1cm4gKFxuIDxnIGNsYXNzTmFtZT1cImFyY1wiPlxuIDxwYXRoIGQ9e2FyYyh0aGlzLnByb3BzLmRhdGEpfT48L3BhdGg+XG4gPC9nPlxuICk7XG4gfVxuIH0pO1xuXG5cbiB2YXIgRGF0YVNlcmllcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gdmFyIHBpZSA9IGQzLmxheW91dC5waWUoKTtcbiB2YXIgYXJyID0gW107XG4gZm9yKHZhciBpPTA7IGk8dGhpcy5wcm9wcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiBhcnIucHVzaCh0aGlzLnByb3BzLmRhdGFbaV0udGFnX251bSk7XG4gfVxuXG4gdmFyIGJhcnMgPSBfLm1hcChwaWUoYXJyKSwgZnVuY3Rpb24ocG9pbnQsIGkpIHtcbiByZXR1cm4gKFxuIDxTZWN0b3IgZGF0YT17cG9pbnR9IGtleT17aX0vPlxuIClcbiB9KTtcblxuIHJldHVybiAoXG4gPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQ4MCwgMjUwKVwiPntiYXJzfTwvZz5cbiApO1xuIH1cbiB9KTtcbiAqL1xuXG5cbnZhciBQaWVDaGFydCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1BpZUNoYXJ0JyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgIGhlaWdodDogNTAwICxcbiAgICAgICAgICAgIHJhZGl1czoyMDBcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7aWQ6XCJwaWVDaGFydFwifVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdyA9IHRoaXMucHJvcHMud2lkdGgsICAgICAgICAgICAgICAgICAgICAgICAgLy93aWR0aFxuICAgICAgICAgICAgaCA9IHRoaXMucHJvcHMuaGVpZ2h0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hlaWdodFxuICAgICAgICAgICAgciA9IHRoaXMucHJvcHMucmFkaXVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JhZGl1c1xuICAgICAgICAgICAgY29sb3IgPSBkMy5zY2FsZS5jYXRlZ29yeTIwYygpOyAgICAgLy9idWlsdGluIHJhbmdlIG9mIGNvbG9yc1xuXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXG5cbiAgICAgICAgdmFyIHZpcyA9IGQzLnNlbGVjdChcIiNwaWVDaGFydFwiKVxuICAgICAgICAgICAgLmFwcGVuZChcInN2ZzpzdmdcIikgICAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBTVkcgZWxlbWVudCBpbnNpZGUgdGhlIDxib2R5PlxuICAgICAgICAgICAgLmRhdGEoW2RhdGFdKSAgICAgICAgICAgICAgICAgICAvL2Fzc29jaWF0ZSBvdXIgZGF0YSB3aXRoIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3KSAgICAgICAgICAgLy9zZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2Ygb3VyIHZpc3VhbGl6YXRpb24gKHRoZXNlIHdpbGwgYmUgYXR0cmlidXRlcyBvZiB0aGUgPHN2Zz4gdGFnXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoKVxuICAgICAgICAgICAgLmFwcGVuZChcInN2ZzpnXCIpICAgICAgICAgICAgICAgIC8vbWFrZSBhIGdyb3VwIHRvIGhvbGQgb3VyIHBpZSBjaGFydFxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyByICsgXCIsXCIgKyByICsgXCIpXCIpICAgIC8vbW92ZSB0aGUgY2VudGVyIG9mIHRoZSBwaWUgY2hhcnQgZnJvbSAwLCAwIHRvIHJhZGl1cywgcmFkaXVzXG5cbiAgICAgICAgdmFyIGFyYyA9IGQzLnN2Zy5hcmMoKSAgICAgICAgICAgICAgLy90aGlzIHdpbGwgY3JlYXRlIDxwYXRoPiBlbGVtZW50cyBmb3IgdXMgdXNpbmcgYXJjIGRhdGFcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyhyKTtcblxuICAgICAgICB2YXIgcGllID0gZDMubGF5b3V0LnBpZSgpICAgICAgICAgICAvL3RoaXMgd2lsbCBjcmVhdGUgYXJjIGRhdGEgZm9yIHVzIGdpdmVuIGEgbGlzdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhZ19udW07IH0pOyAgICAvL3dlIG11c3QgdGVsbCBpdCBvdXQgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiBlYWNoIGVsZW1lbnQgaW4gb3VyIGRhdGEgYXJyYXlcblxuICAgICAgICB2YXIgYXJjcyA9IHZpcy5zZWxlY3RBbGwoXCJnLnNsaWNlXCIpICAgICAvL3RoaXMgc2VsZWN0cyBhbGwgPGc+IGVsZW1lbnRzIHdpdGggY2xhc3Mgc2xpY2UgKHRoZXJlIGFyZW4ndCBhbnkgeWV0KVxuICAgICAgICAgICAgLmRhdGEocGllKSAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc3NvY2lhdGUgdGhlIGdlbmVyYXRlZCBwaWUgZGF0YSAoYW4gYXJyYXkgb2YgYXJjcywgZWFjaCBoYXZpbmcgc3RhcnRBbmdsZSwgZW5kQW5nbGUgYW5kIHZhbHVlIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAuZW50ZXIoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgd2lsbCBjcmVhdGUgPGc+IGVsZW1lbnRzIGZvciBldmVyeSBcImV4dHJhXCIgZGF0YSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNlbGVjdGlvbi4gVGhlIHJlc3VsdCBpcyBjcmVhdGluZyBhIDxnPiBmb3IgZXZlcnkgb2JqZWN0IGluIHRoZSBkYXRhIGFycmF5XG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnOmdcIikgICAgICAgICAgICAgICAgLy9jcmVhdGUgYSBncm91cCB0byBob2xkIGVhY2ggc2xpY2UgKHdlIHdpbGwgaGF2ZSBhIDxwYXRoPiBhbmQgYSA8dGV4dD4gZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggZWFjaCBzbGljZSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzbGljZVwiKTsgICAgLy9hbGxvdyB1cyB0byBzdHlsZSB0aGluZ3MgaW4gdGhlIHNsaWNlcyAobGlrZSB0ZXh0KVxuXG4gICAgICAgIGFyY3MuYXBwZW5kKFwic3ZnOnBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBjb2xvcihpKTsgfSApIC8vc2V0IHRoZSBjb2xvciBmb3IgZWFjaCBzbGljZSB0byBiZSBjaG9zZW4gZnJvbSB0aGUgY29sb3IgZnVuY3Rpb24gZGVmaW5lZCBhYm92ZVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGFyYyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIGNyZWF0ZXMgdGhlIGFjdHVhbCBTVkcgcGF0aCB1c2luZyB0aGUgYXNzb2NpYXRlZCBkYXRhIChwaWUpIHdpdGggdGhlIGFyYyBkcmF3aW5nIGZ1bmN0aW9uXG5cbiAgICAgICAgYXJjcy5hcHBlbmQoXCJzdmc6dGV4dFwiKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBhIGxhYmVsIHRvIGVhY2ggc2xpY2VcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBsYWJlbCdzIG9yaWdpbiB0byB0aGUgY2VudGVyIG9mIHRoZSBhcmNcbiAgICAgICAgICAgICAgICAvL3dlIGhhdmUgdG8gbWFrZSBzdXJlIHRvIHNldCB0aGVzZSBiZWZvcmUgY2FsbGluZyBhcmMuY2VudHJvaWRcbiAgICAgICAgICAgICAgICBkLmlubmVyUmFkaXVzID0gMDtcbiAgICAgICAgICAgICAgICBkLm91dGVyUmFkaXVzID0gcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBhcmMuY2VudHJvaWQoZCkgKyBcIilcIjsgICAgICAgIC8vdGhpcyBnaXZlcyB1cyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMgbGlrZSBbNTAsIDUwXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIikgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2VudGVyIHRoZSB0ZXh0IG9uIGl0J3Mgb3JpZ2luXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBcInNoYXZpdFwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ldLnRhZ19uYW1lOyB9KTsgICAgICAgIC8vZ2V0IHRoZSBsYWJlbCBmcm9tIG91ciBvcmlnaW5hbCBkYXRhIGFycmF5XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGllQ2hhcnQ7XG4iXX0=
