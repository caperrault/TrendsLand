$(document).ready( function () {

  d3.xml('./VISA_TrendslandOption3-01.svg', function (error, xml) {
    if (!error) {
      document.getElementById('vis')
        .appendChild(xml.documentElement)
        .style("height:600px");

      // put requestAnimationFrame instead of set timeout
      setTimeout(function () {


        // where you would pass in id
        var selected = d3.select("#betterwaybusiness");



        // click event
        selected.on("click", function () {

          console.log(this);

          // do something


      });
  });
}
});
});
