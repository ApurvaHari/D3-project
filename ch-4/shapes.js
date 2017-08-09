var data = [5,11,12];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect").data(data).enter().append("rect")
    .attr("height",function(d) { return d*15 ;})
    .attr("width","50")
    .attr("x",function(d,i) { return i*60; })
    .attr("y",function (d,i) { return 300 - (d*15); })
    .attr("fill","green");



var newX = 100;
svg.selectAll("circle.first").data(data).enter().append("circle")
  .attr("class","first")
  .attr("cx",function(d,i) { newX += (d*6) + (i*20); return newX; })
  .attr("cy","50")
  .attr("r",function(d,i) { return d*3; })
  .attr("fill", "yellow");


var newX = 400;
svg.selectAll("circle.second").data(data).enter().append("circle")
  .attr("class","second")
  .attr("cx",function(d,i) { newX += (d*7) + (i*30); return newX; })
  .attr("cy","50")
  .attr("r",function(d,i) { return d*3; })
  .attr("fill", "orange");


var newX = 700;
              svg.selectAll("ellipse").data(data).enter().append("ellipse")
                  .attr("cx",function(d,i) { newX += (d*7) + (i*30); return newX; })
                  .attr("cy","50")
                  .attr("rx",function(d) { return d*2; })
                  .attr("ry","50")
                  .attr("fill", "blue");


//style takes precedence over attribute stroke
//style declarations have issues with browsers due to UNIX requirements
// CSS is best way to style them

var newX = 900;
                svg.selectAll("line").data(data).enter().append("line")
                                  .attr("x1",newX)
                                  .attr("x2",function(d) { return newX + (d*15) ;})
                                  .style("stroke","green")
                                  .attr("y1",function(d,i) {return 100 + (i*20) ;})
                                  .attr("y2",function(d,i) {return 100 + (i*20) ;})
                                  .attr("stroke","blue")
                                  .attr("stroke-width","2");


//vg.append("text").text("Hello!");


var txt = ['start','middle','end'];

                svg.append("text").selectAll("tspan").data(txt).enter().append("tspan")
                                  .attr("x",newX)
                                  .attr("y",function(d,i) { return  150 + (i*20); })
                                  .attr("fill","none")
                                  .attr("stroke","pink")
                                  .attr("stroke-width","2")
                                  .attr("font-size","20")
                                  .attr("text-anchor","start") //use in CsS to change alignment. Horizontal alignment
                                  .attr("dominant-baseline","middle") //align vertically
                                  .text(function(d) { return d; });



// svg.append("text")
//  .attr("x",newX)
//  .attr("y",130)
//  .text("middle")
//  .attr("fill","pink")
//  .attr("stroke","none")
//  .attr("font-size","20")
//  .attr("text-anchor","middle")
//  .attr("dominant-baseline","middle") //align vertically
//  svg.append("text")
//  .attr("x",newX)
//  .attr("y",150)
//  .text("end")
//  .attr("fill","none")
//  .attr("stroke","pink")
//  .attr("font-size","20")
//  .attr("text-anchor","end")
