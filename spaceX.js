const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude))

// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });


d3.json("samples.json").then(function(data) {
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value]) => {console.log(key + ":" + value);});


})

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();