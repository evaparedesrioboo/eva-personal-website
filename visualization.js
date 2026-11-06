
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


// creating the X scale for activity names
const xScale = d3.scaleBand()
    .domain(data.map(d => d.activity))
    .range([margin.left, width - margin.right])
    .padding(0.2);

// creating the Y scale for hours
const yScale = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin.bottom, margin.top]);

// creating the bars
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => xScale(d.activity))
    .attr("y", d => yScale(d.hours))
    .attr("width", xScale.bandwidth())
    .attr("height", d => height - margin.bottom - yScale(d.hours))
    .attr("fill", "#77A6A1");

// adding the X axis
svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(xScale));


// adding the Y axis
svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale));






