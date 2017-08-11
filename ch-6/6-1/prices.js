
var parsedate = d3.timeParse("%m/%d/%Y");


d3.csv("prices.csv")
  .row(function(d) {return {month:parsedate(d.month) ,price:Number(d.price.trim().slice(1))}; })
   .get(function(error,data) {

var height = 500;
var width = 300;


var max = d3.max(data,function(d) {return d.price; });
var minDate = d3.min(data,function(d) {return d.month; })
var maxDate = d3.max(data,function(d) {return d.month; })


var y = d3.scaleLinear()
          .domain([0,max])
          .range([height,0]);
var x = d3.scaleTime()
          .domain([minDate,maxDate])
          .range([0, width]);

var yAxis = d3.axisLeft();



})
