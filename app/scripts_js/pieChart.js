(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9zaGF2aXQvc2hhdml0L3Rpa2FsL2FuYWx5dGljcy1nMi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9zaGF2aXQvc2hhdml0L3Rpa2FsL2FuYWx5dGljcy1nMi9hcHAvc2NyaXB0cy9mYWtlXzk0ODZkN2I4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG52YXIgUGllQ2hhcnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdQaWVDaGFydCcsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMCAsXG4gICAgICAgICAgICByYWRpdXM6MjAwXG4gICAgICAgIH07XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwicGllQ2hhcnRcIn1cblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHcgPSB0aGlzLnByb3BzLndpZHRoLCAgICAgICAgICAgICAgICAgICAgICAgIC8vd2lkdGhcbiAgICAgICAgICAgIGggPSB0aGlzLnByb3BzLmhlaWdodCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oZWlnaHRcbiAgICAgICAgICAgIHIgPSB0aGlzLnByb3BzLnJhZGl1cywgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yYWRpdXNcbiAgICAgICAgICAgIGNvbG9yID0gZDMuc2NhbGUuY2F0ZWdvcnkyMGMoKTsgICAgIC8vYnVpbHRpbiByYW5nZSBvZiBjb2xvcnNcblxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblxuXG4gICAgICAgIHZhciB2aXMgPSBkMy5zZWxlY3QoXCIjcGllQ2hhcnRcIilcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6c3ZnXCIpICAgICAgICAgICAgICAvL2NyZWF0ZSB0aGUgU1ZHIGVsZW1lbnQgaW5zaWRlIHRoZSA8Ym9keT5cbiAgICAgICAgICAgIC5kYXRhKFtkYXRhXSkgICAgICAgICAgICAgICAgICAgLy9hc3NvY2lhdGUgb3VyIGRhdGEgd2l0aCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdykgICAgICAgICAgIC8vc2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIG91ciB2aXN1YWxpemF0aW9uICh0aGVzZSB3aWxsIGJlIGF0dHJpYnV0ZXMgb2YgdGhlIDxzdmc+IHRhZ1xuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6Z1wiKSAgICAgICAgICAgICAgICAvL21ha2UgYSBncm91cCB0byBob2xkIG91ciBwaWUgY2hhcnRcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgciArIFwiLFwiICsgciArIFwiKVwiKSAgICAvL21vdmUgdGhlIGNlbnRlciBvZiB0aGUgcGllIGNoYXJ0IGZyb20gMCwgMCB0byByYWRpdXMsIHJhZGl1c1xuXG4gICAgICAgIHZhciBhcmMgPSBkMy5zdmcuYXJjKCkgICAgICAgICAgICAgIC8vdGhpcyB3aWxsIGNyZWF0ZSA8cGF0aD4gZWxlbWVudHMgZm9yIHVzIHVzaW5nIGFyYyBkYXRhXG4gICAgICAgICAgICAub3V0ZXJSYWRpdXMocik7XG5cbiAgICAgICAgdmFyIHBpZSA9IGQzLmxheW91dC5waWUoKSAgICAgICAgICAgLy90aGlzIHdpbGwgY3JlYXRlIGFyYyBkYXRhIGZvciB1cyBnaXZlbiBhIGxpc3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAudmFsdWUoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YWdfbnVtOyB9KTsgICAgLy93ZSBtdXN0IHRlbGwgaXQgb3V0IHRvIGFjY2VzcyB0aGUgdmFsdWUgb2YgZWFjaCBlbGVtZW50IGluIG91ciBkYXRhIGFycmF5XG5cbiAgICAgICAgdmFyIGFyY3MgPSB2aXMuc2VsZWN0QWxsKFwiZy5zbGljZVwiKSAgICAgLy90aGlzIHNlbGVjdHMgYWxsIDxnPiBlbGVtZW50cyB3aXRoIGNsYXNzIHNsaWNlICh0aGVyZSBhcmVuJ3QgYW55IHlldClcbiAgICAgICAgICAgIC5kYXRhKHBpZSkgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNzb2NpYXRlIHRoZSBnZW5lcmF0ZWQgcGllIGRhdGEgKGFuIGFycmF5IG9mIGFyY3MsIGVhY2ggaGF2aW5nIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgLmVudGVyKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIHdpbGwgY3JlYXRlIDxnPiBlbGVtZW50cyBmb3IgZXZlcnkgXCJleHRyYVwiIGRhdGEgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBhc3NvY2lhdGVkIHdpdGggYSBzZWxlY3Rpb24uIFRoZSByZXN1bHQgaXMgY3JlYXRpbmcgYSA8Zz4gZm9yIGV2ZXJ5IG9iamVjdCBpbiB0aGUgZGF0YSBhcnJheVxuICAgICAgICAgICAgLmFwcGVuZChcInN2ZzpnXCIpICAgICAgICAgICAgICAgIC8vY3JlYXRlIGEgZ3JvdXAgdG8gaG9sZCBlYWNoIHNsaWNlICh3ZSB3aWxsIGhhdmUgYSA8cGF0aD4gYW5kIGEgPHRleHQ+IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGVhY2ggc2xpY2UpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2xpY2VcIik7ICAgIC8vYWxsb3cgdXMgdG8gc3R5bGUgdGhpbmdzIGluIHRoZSBzbGljZXMgKGxpa2UgdGV4dClcblxuICAgICAgICBhcmNzLmFwcGVuZChcInN2ZzpwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gY29sb3IoaSk7IH0gKSAvL3NldCB0aGUgY29sb3IgZm9yIGVhY2ggc2xpY2UgdG8gYmUgY2hvc2VuIGZyb20gdGhlIGNvbG9yIGZ1bmN0aW9uIGRlZmluZWQgYWJvdmVcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBjcmVhdGVzIHRoZSBhY3R1YWwgU1ZHIHBhdGggdXNpbmcgdGhlIGFzc29jaWF0ZWQgZGF0YSAocGllKSB3aXRoIHRoZSBhcmMgZHJhd2luZyBmdW5jdGlvblxuXG4gICAgICAgIGFyY3MuYXBwZW5kKFwic3ZnOnRleHRcIikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGQgYSBsYWJlbCB0byBlYWNoIHNsaWNlXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7ICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgbGFiZWwncyBvcmlnaW4gdG8gdGhlIGNlbnRlciBvZiB0aGUgYXJjXG4gICAgICAgICAgICAgICAgLy93ZSBoYXZlIHRvIG1ha2Ugc3VyZSB0byBzZXQgdGhlc2UgYmVmb3JlIGNhbGxpbmcgYXJjLmNlbnRyb2lkXG4gICAgICAgICAgICAgICAgZC5pbm5lclJhZGl1cyA9IDA7XG4gICAgICAgICAgICAgICAgZC5vdXRlclJhZGl1cyA9IHI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgYXJjLmNlbnRyb2lkKGQpICsgXCIpXCI7ICAgICAgICAvL3RoaXMgZ2l2ZXMgdXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzIGxpa2UgWzUwLCA1MF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NlbnRlciB0aGUgdGV4dCBvbiBpdCdzIG9yaWdpblxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciB6ID0gXCJzaGF2aXRcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtpXS50YWdfbmFtZTsgfSk7ICAgICAgICAvL2dldCB0aGUgbGFiZWwgZnJvbSBvdXIgb3JpZ2luYWwgZGF0YSBhcnJheVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBpZUNoYXJ0O1xuIl19
