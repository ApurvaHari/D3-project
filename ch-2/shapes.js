var data = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect").data(data).enter().append("rect")
    .attr("height",function(d) {return d*15;})
    .attr("width","50")
    .attr("x",function(d,i) { return i*60 ;})
    .attr("y",function (d,i) { return 300 - (d*15); })
    .attr("fill","green");



var newX = 300;
    svg.selectAll("circle.first").data(data).enter().append("circle")
        .attr("class","first")
        .attr("cx",function(d,i) { newX += (d*6) + (i*20); return newX; })
        .attr("cy","50")
        .attr("r",function(d,i) { return d*3; })
        .attr("fill", "yellow");


var newX = 600;
            svg.selectAll("circle.second").data(data).enter().append("circle")
                .attr("class","second")
                .attr("cx",function(d,i) { newX += (d*7) + (i*30); return newX; })
                .attr("cy","50")
                .attr("r",function(d,i) { return d*3; })
                .attr("fill", "orange");



var newX = 1200;
              svg.selectAll("ellipse").data(data).enter().append("ellipse")
                  .attr("cx",function(d,i) { newX += (d*7) + (i*30); return newX; })
                  .attr("cy","50")
                  .attr("rx",function(d) { return d*2; })
                  .attr("ry","50")
                  .attr("fill", "blue");
