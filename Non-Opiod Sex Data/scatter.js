console.log(data);

Year = data.map(function (row){
    return row.year
  });

 // Trace for the Benzo Data
let trace1 = {
    x: data.map(row => row.year),
    y: data.map(row => row.F_Number),
    type: "scatter"
  }; 

 // Trace for the Benzo Data
let trace2 = {
    x: data.map(row => row.year),
    y: data.map(row => row.M_Number),
    type: "scatter"
  };

// Data trace array
let traceData = [trace1, trace2];

// Apply the group barmode to the layout
let layout = {
  title: "Non-Opiod Mortality Rate by Sex"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);

Year = data.map(function (row){
    return row.year
  });

 // Trace for the Benzo Data
let trace3= {
    x: data.map(row => row.year),
    y: data.map(row => row.F_Percent),
    type: "bar"
  }; 

 // Trace for the Benzo Data
let trace4 = {
    x: data.map(row => row.year),
    y: data.map(row => row.M_Percent),
    type: "bar"
  };

// Data trace array
let traceData1 = [trace3, trace4];

// Apply the group barmode to the layout
let layout1 = {
  title: "Non-Opiod Mortality Rate by Sex"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot2", traceData1, layout1);