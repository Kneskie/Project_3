console.log(data6);

Year = data6.map(function (row){
    return row.year
  });

 // Trace for the  Data
let trace18 = {
    x: data6.map(row => row.year),
    y: data6.map(row => row.White),
    type: "line",
    name: "White",
    text: 'Average rate of 59.6%'
  }; 

 // Trace for the  Data
let trace19 = {
    x: data6.map(row => row.year),
    y: data6.map(row => row.Black),
    type: "line",
    name: 'Black',
    text: 'Average rate of 25.7%'
  };

 // Trace for the  Data
let trace20 = {
    x: data6.map(row => row.year),
    y: data6.map(row => row.Hispanic),
    type: "line",
    name: 'Hispanic',
    text: 'Average rate of 13.9%'
  };
  

// Data trace array
let traceData6 = [trace18, trace19, trace20];

// Apply the group barmode to the layout
let layout6 = {
  title: "Opiod Mortality Rate by Race"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot6", traceData6, layout6);