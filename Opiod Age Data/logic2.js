console.log(data);

Year = data.map(function (row){
    return row.year
  });

 // Trace for the Benzo Data
let trace1 = {
    x: data.map(row => row.year),
    y: data.map(row => row.Age_15_29),
    type: "line"
  }; 

 // Trace for the Benzo Data
let trace2 = {
    x: data.map(row => row.year),
    y: data.map(row => row.Age_30_44),
    type: "line"
  };

 // Trace for the Benzo Data
let trace3 = {
    x: data.map(row => row.year),
    y: data.map(row => row.Age_45_59),
    type: "line"
  };
  
  let trace4 = {
    x: data.map(row => row.year),
    y: data.map(row => row.Age_60p),
    type: "line"
  };

// Data trace array
let traceData = [trace1, trace2, trace3, trace4];

// Apply the group barmode to the layout
let layout = {
  title: "Opiod Mortality Rate by Age"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);