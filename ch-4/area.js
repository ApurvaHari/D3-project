//area chart using area generator
var dataArray = [25,26,27,28,29,30,31,32,33,34,100,110,113,114,115,116,118];

var datayears = ['2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011',
                 '2012','2013','2014','2015','2016','2017'];

var height = 200;
var width = 500;

var area = d3.area()
              .x(function(d,i) {return 20*i; })
              .y0(height)
              .y1(function(d) { return (height - d); })  // y1 changes for every data point, y1 remains contstant

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.append("path").attr("d",area(dataArray));
