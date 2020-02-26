function allCircles(circles) {
// Parses necessary data from circles; results in circle name and count
  let myCircleArray = circles.map((circle) => {
      return [circle._id.circles, circle.count]
  });

  let myCircleObject = myCircleArray.map(circle => {
    return {"Name": circle[0], "Count": circle[1]}
  });

// Creates object to pass into dataset in proper format
  function createObjectData(myCircleObject) {
    let objectToReturn = []
    Object.entries(myCircleObject).forEach(circle => {
      // console.log(circle[1]);
      objectToReturn.push(circle[1]);
    })
    return objectToReturn;
  }

  var dataset = {
            "children":
            createObjectData(myCircleObject)
            // {"Name":"Penn State","Count":10},
            //     {"Name":"Washington DC","Count":8},
            //     {"Name":"NYC","Count":3},
            //     {"Name":"Le Wagon","Count":6},
            //     {"Name":"Home","Count":4},
            //     {"Name":"La Salle","Count":6}]
        };

        var diameter = 380;
        var color = d3.scaleOrdinal(d3.schemeCategory20);

        var bubble = d3.pack(dataset)
            .size([diameter, diameter])
            .padding(1.5);

        var svg = d3.select(".circle-section")
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

        var nodes = d3.hierarchy(dataset)
            .sum(function(d) { return d.Count; });

        var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function(d){
                return  !d.children
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        var myLink = node.append("a")

        node.append("title")
            .text(function(d) {
                return d.data.Name + ": " + d.data.Count;
            });

        node.append("circle")
            .attr("r", function(d) {
                return d.r;
            })
            .style("fill", function(d,i) {
                return color(i);
            });

        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Name.substring(0, d.r / 3);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");

        node.append("text")
            .attr("dy", "1.3em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Count;
            })
            .attr("font-family",  "Gill Sans", "Gill Sans MT")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");

        d3.select(self.frameElement)
            .style("height", diameter + "px");
}

export default allCircles;
