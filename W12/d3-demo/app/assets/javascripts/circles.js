$(document).ready(function() {

  var svg = d3.select('svg');

  var points = [32, 57, 112, 293, 500];

  // Associate each data point with circle
  // circles.data(points);

  // Create 4th data point using JS not HTML
  // Enter applies data on the page and looks for what's missing
  var newCircles = svg.selectAll('circle')
    .data(points)
    .enter()
    .append('circle');

  // d is the data, i is the index
  newCircles.style('fill', 'steelblue');
  newCircles.attr('cy', 60);
  newCircles.attr('r', function (d) { return Math.sqrt(d); });
  newCircles.attr('cx', function (d, i) { return i * 100 + 30; });

  var circles = svg.selectAll('circle')
    .data([32, 57])
    // opposite of .enter. Finds elements without data bound to it
    .exit()
    .remove();

    d3.selectAll('div')
      .data([1, 2, 3, 4, 5, 6])
      .enter()
      .append('div')
      // .test(String)
      .text(function (d) {       
        return String(d);
    });
});
