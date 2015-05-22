
function generatePlayer() {
    d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
};

function generateCircle() {
	generatePlayer();
	d3.select("body").append("br");
    d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "green")
    .transition()
    .delay(100)
    .duration(1000)    
    .attr("r", 10)
    .attr("cx", 30)
    .style("fill", "black")
    .transition()
    .delay(1000)
    .duration(1000)    
    .attr("r", 100)
    .attr("cx", 30)
    .attr("cy", 30)
    .style("fill", "blue");
};