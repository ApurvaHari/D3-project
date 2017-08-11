var dataArray = [{x:4, y:12},{x:8 , y:18 },{x:12 , y:2 },{x:16, y:16 },{x:20 , y:2 }];

var interpolateTypes = [d3.curveLinear, d3.curveNatural,d3.curveStep,d3.curveBasis,
d3.curveBundle,d3.curveCardinal];


var svg = d3.select("body").append("svg").attr("width", "100%").attr("height","100%");


for (var p =0; p<6; p++) {
//line is a function. Gennerators are always on top
                          var line = d3.line()
                                        .x(function(d,i) { return d.x*6; })
                                        .y(function(d,i) { return d.y*8; })
                                        .curve(interpolateTypes[p]);   //structure of line generators
                                        //.curve(d3.curveStep);

                          var ShiftX =p *250;
                          var ShiftY = 0;
                          var chartGroup = svg.append("g")
                                          .attr("class", "group" + p)
                                          .attr("transform","translate("+ShiftX+",0)");


                            chartGroup.append("path")
                                .attr("fill","none")
                                .attr("stroke","magenta")
                                .attr("d",line(dataArray));
                              //  .attr("d",d="M24,96L48,144L72,16L96,128L120,16"); //same as above


                            chartGroup.selectAll("circle.grp" + p)
                              .data(dataArray)
                              .enter(). append("circle")
                              .attr("class",function(d,i) {return "grp" + i; })
                              .attr("cx",function(d,i) { return d.x*6; })
                              .attr("cy", function(d,i) { return d.y*8; })
                              .attr("r","2");
                            }
