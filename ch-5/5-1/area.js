//area chart using area generator
var dataArray = [25,26,27,28,29,30,31,32,33,34,100,110,113,114,115,116,118];

var datayears = ['2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011',
                 '2012','2013','2014','2015','2016','2017'];

var height = 200;
var width = 500;

var margin = {left:50,right:50,top:40,bottom:0};

//Linear scale
var y = d3.scaleLinear()
          .domain([0,118])
          .range([height,0]);

/* console.log(y[0]);
console.log(y[54]);
console.log(y[118]); */

var yAxis = d3.axisLeft(y);

var area = d3.area()
              .x(function(d,i) {return 20*i; })
              .y0(height)
              .y1(function(d) { return (height - y(d)); })  // y1 changes for every data point, y1 remains contstant

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");
var ChartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.right+" )");


ChartGroup.append("path").attr("d",area(dataArray));
ChartGroup.append("g")
    .attr("class","axis y")
    .call(yAxis);
