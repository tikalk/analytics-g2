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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJjOlxcRGV2XFxUaWthbFxcRnV6ZWRheVxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovRGV2L1Rpa2FsL0Z1emVkYXkvYXBwL3NjcmlwdHMvZmFrZV8zZGM5MzhjNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xyXG5cclxuLypcclxuIHZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuIHZhciBDaGFydCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiB2YXIgc3MgPSBcImVlZVwiO1xyXG4gcmV0dXJuIChcclxuIDxzdmcgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvc3ZnPlxyXG4gKTtcclxuIH1cclxuIH0pO1xyXG5cclxuXHJcbiB2YXIgU2VjdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuIHZhciBhcmMgPSBkMy5zdmcuYXJjKClcclxuIC5vdXRlclJhZGl1cygyNDApXHJcbiAuaW5uZXJSYWRpdXMoMCk7XHJcbiByZXR1cm4gKFxyXG4gPGcgY2xhc3NOYW1lPVwiYXJjXCI+XHJcbiA8cGF0aCBkPXthcmModGhpcy5wcm9wcy5kYXRhKX0+PC9wYXRoPlxyXG4gPC9nPlxyXG4gKTtcclxuIH1cclxuIH0pO1xyXG5cclxuXHJcbiB2YXIgRGF0YVNlcmllcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblxyXG4gdmFyIHBpZSA9IGQzLmxheW91dC5waWUoKTtcclxuIHZhciBhcnIgPSBbXTtcclxuIGZvcih2YXIgaT0wOyBpPHRoaXMucHJvcHMuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiBhcnIucHVzaCh0aGlzLnByb3BzLmRhdGFbaV0udGFnX251bSk7XHJcbiB9XHJcblxyXG4gdmFyIGJhcnMgPSBfLm1hcChwaWUoYXJyKSwgZnVuY3Rpb24ocG9pbnQsIGkpIHtcclxuIHJldHVybiAoXHJcbiA8U2VjdG9yIGRhdGE9e3BvaW50fSBrZXk9e2l9Lz5cclxuIClcclxuIH0pO1xyXG5cclxuIHJldHVybiAoXHJcbiA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDgwLCAyNTApXCI+e2JhcnN9PC9nPlxyXG4gKTtcclxuIH1cclxuIH0pO1xyXG4gKi9cclxuXHJcblxyXG52YXIgUGllQ2hhcnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdQaWVDaGFydCcsXHJcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwICxcclxuICAgICAgICAgICAgcmFkaXVzOjIwMFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7aWQ6XCJwaWVDaGFydFwifVxyXG5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB3ID0gdGhpcy5wcm9wcy53aWR0aCwgICAgICAgICAgICAgICAgICAgICAgICAvL3dpZHRoXHJcbiAgICAgICAgICAgIGggPSB0aGlzLnByb3BzLmhlaWdodCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oZWlnaHRcclxuICAgICAgICAgICAgciA9IHRoaXMucHJvcHMucmFkaXVzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JhZGl1c1xyXG4gICAgICAgICAgICBjb2xvciA9IGQzLnNjYWxlLmNhdGVnb3J5MjBjKCk7ICAgICAvL2J1aWx0aW4gcmFuZ2Ugb2YgY29sb3JzXHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHZpcyA9IGQzLnNlbGVjdChcIiNwaWVDaGFydFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnOnN2Z1wiKSAgICAgICAgICAgICAgLy9jcmVhdGUgdGhlIFNWRyBlbGVtZW50IGluc2lkZSB0aGUgPGJvZHk+XHJcbiAgICAgICAgICAgIC5kYXRhKFtkYXRhXSkgICAgICAgICAgICAgICAgICAgLy9hc3NvY2lhdGUgb3VyIGRhdGEgd2l0aCB0aGUgZG9jdW1lbnRcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3KSAgICAgICAgICAgLy9zZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2Ygb3VyIHZpc3VhbGl6YXRpb24gKHRoZXNlIHdpbGwgYmUgYXR0cmlidXRlcyBvZiB0aGUgPHN2Zz4gdGFnXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6Z1wiKSAgICAgICAgICAgICAgICAvL21ha2UgYSBncm91cCB0byBob2xkIG91ciBwaWUgY2hhcnRcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyByICsgXCIsXCIgKyByICsgXCIpXCIpICAgIC8vbW92ZSB0aGUgY2VudGVyIG9mIHRoZSBwaWUgY2hhcnQgZnJvbSAwLCAwIHRvIHJhZGl1cywgcmFkaXVzXHJcblxyXG4gICAgICAgIHZhciBhcmMgPSBkMy5zdmcuYXJjKCkgICAgICAgICAgICAgIC8vdGhpcyB3aWxsIGNyZWF0ZSA8cGF0aD4gZWxlbWVudHMgZm9yIHVzIHVzaW5nIGFyYyBkYXRhXHJcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyhyKTtcclxuXHJcbiAgICAgICAgdmFyIHBpZSA9IGQzLmxheW91dC5waWUoKSAgICAgICAgICAgLy90aGlzIHdpbGwgY3JlYXRlIGFyYyBkYXRhIGZvciB1cyBnaXZlbiBhIGxpc3Qgb2YgdmFsdWVzXHJcbiAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhZ19udW07IH0pOyAgICAvL3dlIG11c3QgdGVsbCBpdCBvdXQgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiBlYWNoIGVsZW1lbnQgaW4gb3VyIGRhdGEgYXJyYXlcclxuXHJcbiAgICAgICAgdmFyIGFyY3MgPSB2aXMuc2VsZWN0QWxsKFwiZy5zbGljZVwiKSAgICAgLy90aGlzIHNlbGVjdHMgYWxsIDxnPiBlbGVtZW50cyB3aXRoIGNsYXNzIHNsaWNlICh0aGVyZSBhcmVuJ3QgYW55IHlldClcclxuICAgICAgICAgICAgLmRhdGEocGllKSAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc3NvY2lhdGUgdGhlIGdlbmVyYXRlZCBwaWUgZGF0YSAoYW4gYXJyYXkgb2YgYXJjcywgZWFjaCBoYXZpbmcgc3RhcnRBbmdsZSwgZW5kQW5nbGUgYW5kIHZhbHVlIHByb3BlcnRpZXMpXHJcbiAgICAgICAgICAgIC5lbnRlcigpICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyB3aWxsIGNyZWF0ZSA8Zz4gZWxlbWVudHMgZm9yIGV2ZXJ5IFwiZXh0cmFcIiBkYXRhIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgYXNzb2NpYXRlZCB3aXRoIGEgc2VsZWN0aW9uLiBUaGUgcmVzdWx0IGlzIGNyZWF0aW5nIGEgPGc+IGZvciBldmVyeSBvYmplY3QgaW4gdGhlIGRhdGEgYXJyYXlcclxuICAgICAgICAgICAgLmFwcGVuZChcInN2ZzpnXCIpICAgICAgICAgICAgICAgIC8vY3JlYXRlIGEgZ3JvdXAgdG8gaG9sZCBlYWNoIHNsaWNlICh3ZSB3aWxsIGhhdmUgYSA8cGF0aD4gYW5kIGEgPHRleHQ+IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGVhY2ggc2xpY2UpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzbGljZVwiKTsgICAgLy9hbGxvdyB1cyB0byBzdHlsZSB0aGluZ3MgaW4gdGhlIHNsaWNlcyAobGlrZSB0ZXh0KVxyXG5cclxuICAgICAgICBhcmNzLmFwcGVuZChcInN2ZzpwYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBjb2xvcihpKTsgfSApIC8vc2V0IHRoZSBjb2xvciBmb3IgZWFjaCBzbGljZSB0byBiZSBjaG9zZW4gZnJvbSB0aGUgY29sb3IgZnVuY3Rpb24gZGVmaW5lZCBhYm92ZVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgYXJjKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgY3JlYXRlcyB0aGUgYWN0dWFsIFNWRyBwYXRoIHVzaW5nIHRoZSBhc3NvY2lhdGVkIGRhdGEgKHBpZSkgd2l0aCB0aGUgYXJjIGRyYXdpbmcgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgYXJjcy5hcHBlbmQoXCJzdmc6dGV4dFwiKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBhIGxhYmVsIHRvIGVhY2ggc2xpY2VcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIGxhYmVsJ3Mgb3JpZ2luIHRvIHRoZSBjZW50ZXIgb2YgdGhlIGFyY1xyXG4gICAgICAgICAgICAgICAgLy93ZSBoYXZlIHRvIG1ha2Ugc3VyZSB0byBzZXQgdGhlc2UgYmVmb3JlIGNhbGxpbmcgYXJjLmNlbnRyb2lkXHJcbiAgICAgICAgICAgICAgICBkLmlubmVyUmFkaXVzID0gMDtcclxuICAgICAgICAgICAgICAgIGQub3V0ZXJSYWRpdXMgPSByO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgYXJjLmNlbnRyb2lkKGQpICsgXCIpXCI7ICAgICAgICAvL3RoaXMgZ2l2ZXMgdXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzIGxpa2UgWzUwLCA1MF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKSAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jZW50ZXIgdGhlIHRleHQgb24gaXQncyBvcmlnaW5cclxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHogPSBcInNoYXZpdFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV0udGFnX25hbWU7IH0pOyAgICAgICAgLy9nZXQgdGhlIGxhYmVsIGZyb20gb3VyIG9yaWdpbmFsIGRhdGEgYXJyYXlcclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBpZUNoYXJ0O1xyXG4iXX0=
