console.log(data);

Year = data.map(function (row){
    return row.year
  });

 // Trace for the Benzo Data
let trace1 = {
    x: data.map(row => row.year),
    y: data.map(row => row.Opiod),
    type: "line"
  }; 

 // Trace for the Benzo Data
let trace2 = {
    x: data.map(row => row.year),
    y: data.map(row => row.NonOpiod),
    type: "line"
  };

// Data trace array
let traceData = [trace1, trace2];

// Apply the group barmode to the layout
let layout = {
  title: "Opiod and Non-Opiod Detection Rate in Overdoses"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);