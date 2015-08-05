var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            scaleShowGridLines : true,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            scaleShowGridLines : true,
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

  $(document).ready(function() {
    var $chart = $('#myChart');
    if ($chart.length === 0){
        return;
    }
    var ctx = $chart.get(0).getContext('2d');
    var myLineChart = new Chart(ctx).Line(data);
  });