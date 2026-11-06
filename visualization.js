
// Weekly figure skating training data
const data = [
    { activity: "Dance", hours: 3.75 },
    { activity: "Off-ice training", hours: 3.75 },
    { activity: "On-ice lessons", hours: 8.75 },
    { activity: "Free skating", hours: 5 },
    { activity: "Other on-ice time", hours: 8.75 }
];



// setting the dimensions of the chart
const width = 700;
const height = 400;

// setting margins around the chart
const margin = {
    top: 40,
    right: 30,
    bottom: 70,
    left: 60
};


// creating the SVG drawing area inside the HTML container
const svg = d3.select("#myChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

