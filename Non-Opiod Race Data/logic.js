console.log(data5);

Year = data5.map(function (row){
    return row.year
  });

 // Trace for the  Data
let trace15 = {
    x: data5.map(row => row.year),
    y: data5.map(row => row.White),
    type: "line",
    name: "White",
    text: 'Average rate of 27.6%'
  }; 

 // Trace for the  Data
let trace16 = {
    x: data5.map(row => row.year),
    y: data5.map(row => row.Black),
    type: "line",
    name: 'Black',
    text: 'Average rate of 62.7%'
  };

 // Trace for the  Data
let trace17 = {
    x: data5.map(row => row.year),
    y: data5.map(row => row.Hispanic),
    type: "line",
    name: 'Hispanic',
    text: 'Average rate of 8.3%'
  };
  

// Data trace array
let traceData5 = [trace15, trace16, trace17];

// Apply the group barmode to the layout
let layout5 = {
  title: "Non-Opiod Mortality Rate by Race"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot5", traceData5, layout5);