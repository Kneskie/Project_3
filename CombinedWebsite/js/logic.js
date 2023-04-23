// Sections Logic

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});

//Opiod Detection Logic
let data =[{
    year: 2010,
    Opiod: 297,
    O_perc:'76.7%',
    NonOpiod: 90,
    N_perc: '23.3%',
},
{
    year: 2011,
    Opiod: 389,
    O_perc:'79.6%',
    NonOpiod:100,
    N_perc:'20.5%',
},
{
    year: 2012,
    Opiod: 423,
    O_perc:'82.5%',
    NonOpiod: 90,
    N_perc:'17.5%'
},
{
    year: 2013,
    Opiod: 357,
    O_perc: '77.6%',
    NonOpiod: 103,
    N_perc: '22.4%'
},
{
    year: 2014,
    Opiod: 495,
    O_perc: '78.8%',
    NonOpiod: 133,
    N_perc: '21.2%'
},
{
    year: 2015,
    Opiod: 561,
    O_perc: '79.9%',
    NonOpiod: 141,
    N_perc: '20.1%'
},
{
    year: 2016,
    Opiod: 752,
    O_perc: '82.9%',
    NonOpiod: 155,
    N_perc: '17.1%'
},
{
    year: 2017,
    Opiod: 1075,
    O_perc: '88.3%',
    NonOpiod: 142,
    N_perc: '11.7%'
},
{
    year: 2018,
    Opiod: 939,
    O_perc: '84.1%',
    NonOpiod: 177,
    N_perc: '15.9%'
},
{
    year: 2019,
    Opiod: 963,
    O_perc: '83.7%',
    NonOpiod: 187,
    N_perc: '16.3%'
},
{
    year: 2020,
    Opiod: 1041,
    O_perc: '85.8%',
    NonOpiod: 173,
    N_perc: '14.3%'
},
{
    year: 2021,
    Opiod: 1052,
    O_perc: '82.5%',
    NonOpiod: 224,
    N_perc: '17.6%'
},
]
console.log(data);

Year = data.map(function (row){
    return row.year
    });
  
  // Trace for the Detection Data
  let trace1 = {
    x: data.map(row => row.year),
    y: data.map(row => row.Opiod),
    name: "Opiod",
    type: "bar",
    text: data.map(row => row.O_perc)
  }; 
  
  // Trace for the Detection Data
  let trace2 = {
    x: data.map(row => row.year),
    y: data.map(row => row.NonOpiod),
    name: "NonOpiod",
    type: "bar",
    text: data.map(row => row.N_perc)
  };
  
  // Data trace array
  let traceData = [trace1, trace2];
  
  // Apply the group barmode to the layout
  let layout = {
    title: "Opiod Detection Rate in Overdoses due to Opiod and Non-Opiods",
    barmode: 'stack'
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", traceData, layout);

//Age Charts
//Non-Opiod Data 
let data1 =[{
    year: 2010,
    Age_15_29: 10,
    Age_30_44: 19,
    Age_45_59: 47,
    Age_60p: 14,   
},
{
    year: 2011,
    Age_15_29: 11,
    Age_30_44: 31,
    Age_45_59: 44,
    Age_60p: 14,   
},
{
    year: 2012,
    Age_15_29: 11,
    Age_30_44: 31,
    Age_45_59: 44,
    Age_60p:  14, 
},
{
    year: 2013,
    Age_15_29:12,
    Age_30_44:24,
    Age_45_59:51,
    Age_60p:15,
},
{
    year:2014,
    Age_15_29:8,
    Age_30_44:38,
    Age_45_59:66,
    Age_60p: 21, 
},
{
    year: 2015,
    Age_15_29:14,
    Age_30_44:38,
    Age_45_59:66,
    Age_60p: 21,
},
{
    year: 2016,
    Age_15_29:11,
    Age_30_44:30,
    Age_45_59:79,
    Age_60p:35,   
},
{
    year:2017,
    Age_15_29:13,
    Age_30_44:34,
    Age_45_59:67,
    Age_60p:28,   
},
{
    year:2018,
    Age_15_29:11,
    Age_30_44:41,
    Age_45_59:88,
    Age_60p:37,   
},
{
    year:2019,
    Age_15_29:16,
    Age_30_44:37,
    Age_45_59:82,
    Age_60p:52,   
},
{
    year:2020,
    Age_15_29:0,
    Age_30_44:43,
    Age_45_59:82,
    Age_60p:45,   
},
{
    year:2021,
    Age_15_29:0,
    Age_30_44:39,
    Age_45_59:109,
    Age_60p:71,   
},
]

 // Trace for the Data
 let trace3 = {
    x: data1.map(row => row.year),
    y: data1.map(row => row.Age_15_29),
    type: "line",
    name: "Age 15-29yrs",
    text: 'Average rate of 9.3%'
  }; 

 // Trace for the Data
let trace4 = {
    x: data1.map(row => row.year),
    y: data1.map(row => row.Age_30_44),
    type: "line",
    name: 'Age 30-44yrs',
    text: 'Average rate of 22.6%'
  };

 // Trace for the Data
let trace5 = {
    x: data1.map(row => row.year),
    y: data1.map(row => row.Age_45_59),
    type: "line",
    name: 'Age 45-59yrs',
    text: 'Average rate of 49.1%'
  };
  
  let trace6 = {
    x: data1.map(row => row.year),
    y: data1.map(row => row.Age_60p),
    type: "line",
    name: 'Age 60+yrs',
    text: 'Average rate of 20.1%'
  };

// Data trace array
let traceData1 = [trace3, trace4, trace5, trace6];

// Apply the group barmode to the layout
let layout1 = {
  title: "Non-Opiod Mortality Rate by Age",
  align: screenLeft,

};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot1", traceData1, layout1);

 // Opiod Data 
let data2 =[{
    year: 2010,
    Age_15_29: 61,
    Age_30_44: 97,
    Age_45_59: 122,
    Age_60p: 17,   
},
{
    year: 2011,
    Age_15_29: 89,
    Age_30_44: 141,
    Age_45_59: 142,
    Age_60p: 17,   
},
{
    year: 2012,
    Age_15_29: 95,
    Age_30_44: 166,
    Age_45_59: 143,
    Age_60p:  19, 
},
{
    year: 2013,
    Age_15_29:84,
    Age_30_44:133,
    Age_45_59:118,
    Age_60p:22,
},
{
    year:2014,
    Age_15_29:113,
    Age_30_44:178,
    Age_45_59:172,
    Age_60p: 32, 
},
{
    year: 2015,
    Age_15_29:120,
    Age_30_44:206,
    Age_45_59:188,
    Age_60p: 47,
},
{
    year: 2016,
    Age_15_29:159,
    Age_30_44:282,
    Age_45_59:259,
    Age_60p:51,   
},
{
    year:2017,
    Age_15_29:187,
    Age_30_44:466,
    Age_45_59:337,
    Age_60p:85,   
},
{
    year:2018,
    Age_15_29:163,
    Age_30_44:363,
    Age_45_59:306,
    Age_60p:107,   
},
{
    year:2019,
    Age_15_29:149,
    Age_30_44:407,
    Age_45_59:297,
    Age_60p:109,   
},
{
    year:2020,
    Age_15_29:121,
    Age_30_44:431,
    Age_45_59:349,
    Age_60p:139,   
},
{
    year:2021,
    Age_15_29:122,
    Age_30_44:412,
    Age_45_59:376,
    Age_60p:141,   
},
]

console.log(data2);

Year = data2.map(function (row){
    return row.year
  });

 // Trace for the Benzo Data
let trace7 = {
    x: data2.map(row => row.year),
    y: data2.map(row => row.Age_15_29),
    type: "line",
    name: 'Age 15-29yrs',
    text: 'Average rate of 19.2%'
  }; 

 // Trace for the Benzo Data
let trace8 = {
    x: data2.map(row => row.year),
    y: data2.map(row => row.Age_30_44),
    type: "line",
    name: 'Age 30-44yrs',
    text: 'Average rate of 38.4%'
  };

 // Trace for the Data
let trace9 = {
    x: data2.map(row => row.year),
    y: data2.map(row => row.Age_45_59),
    type: "line",
    name: 'Age 45-59yrs',
    text: 'Average rate of 34.2%'
  };
  
  let trace10 = {
    x: data2.map(row => row.year),
    y: data2.map(row => row.Age_60p),
    type: "line",
    name: '60+yrs',
    text: 'Average rate of 8.33%'
  };

// Data trace array
let traceData2 = [trace7, trace8, trace9, trace10];

// Apply the group barmode to the layout
let layout2 = {
  title: "Opiod Mortality Rate by Age"};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot2", traceData2, layout2);

//Sex Data
let data3 = [{
    year: 2010,
    Female: 3.5,
    F_Number: 29,
    F_Percent: 32.20,
    Males: 7.8,
    M_Number: 61, 
    M_Percent: 67.80,
},
{
    year: 2011,
    Female: 3.2,
    F_Number: 30, 
    F_Percent: 30,
    Males: 8.5,
    M_Number: 70,
    M_Percent: 70,
},
{
    year: 2012,
    Female: 2.7,
    F_Number: 25,
    F_Percent: 27.8,
    Males: 7.8,
    M_Number: 65,
    M_Percent: 72.2,
},
{
    year: 2013,
    Female: 3.7,
    F_Number: 34,
    F_Percent: 33,
    Males: 8,
    M_Number: 69,
    M_Percent: 67,
},
{
    year: 2014,
    Female: 4.5,
    F_Number: 38,
    F_Percent: 28.6,
    Males: 11.2,
    M_Number: 95,
    M_Percent: 71.4,
},
{
    year: 2015,
    Female: 5.7,
    F_Number: 50,
    F_Percent: 35.5,
    Males: 10.9,
    M_Number: 91,
    M_Percent: 64.50,
},
{
    year: 2016,
    Female: 4.7,
    F_Number: 46,
    F_Percent: 29.7,
    Males: 12.7,
    M_Number: 109,
    M_Percent: 70.3,
},
{
    year: 2017,
    Female: 5.1,
    F_Number: 51,
    F_Percent: 35.9,
    Males: 11,
    M_Number: 91,
    M_Percent: 64.10,
},
{
    year: 2018,
    Female: 5.9,
    F_Number: 51,
    F_Percent: 28.8,
    Males: 14.4,
    M_Number: 126,
    M_Percent: 71.20,
},
{
    year: 2019,
    Female: 6.1,
    F_Number: 58,
    F_Percent: 31,
    Males: 15.2,
    M_Number: 129,
    M_Percent: 69,
},
{
    year: 2020,
    Female: 5,
    F_Number: 43,
    F_Percent: 24.9,
    Males: 16.2,
    M_Number: 130,
    M_Percent: 75.10,
},
{
    year: 2021,
    Female: 6.2,
    F_Number: 56,
    F_Percent: 25,
    Males: 20,
    M_Number: 168,
    M_Percent: 75,
}
]
console.log(data);

Year = data3.map(function (row){
    return row.year
  });

 // Trace for the Benzo Data
let trace11 = {
    x: data3.map(row => row.year),
    y: data3.map(row => row.F_Number),
    type: "bar",
    name: "Female"
  }; 

 // Trace for the Benzo Data
let trace12 = {
    x: data3.map(row => row.year),
    y: data3.map(row => row.M_Number),
    type: "bar",
    name: 'Male'
  };

// Data trace array
let traceData3 = [trace11, trace12];

// Apply the group barmode to the layout
let layout3 = {
  title: "Non-Opiod Mortality Rate by Sex"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot3", traceData3, layout3);

// Opiod Sex Data
let data4 = [{
    year: 2010,
    Female: 10.4,
    F_Number: 88,
    F_Percent: 29.6,
    Male: 26.6,
    M_Number: 209,
    M_Percent: 70.4,

},
{
    year: 2011,
    Female: 11.6,
    F_Number: 99,
    F_Percent: 25.4,
    Male: 35.2,
    M_Number: 290,
    M_Percent: 74.6,

},
{
    year: 2012,
    Female: 15.4,
    F_Number: 135,
    F_Percent: 31.9,
    Male: 35.1,
    M_Number: 288,
    M_Percent: 68.1,

},
{
    year: 2013,
    Female: 11.9,
    F_Number: 113,
    F_Percent: 31.7,
    Male: 29,
    M_Number: 244,
    M_Percent: 68.3,

},
{
    year: 2014,
    Female: 17.5,
    F_Number: 162,
    F_Percent: 32.7,
    Male: 38.7,
    M_Number: 333,
    M_Percent: 67.3,

},
{
    year: 2015,
    Female: 15.7,
    F_Number: 147,
    F_Percent: 26.2,
    Male: 49,
    M_Number: 414,
    M_Percent: 73.8,

},
{
    year: 2016,
    Female: 24.9,
    F_Number: 234,
    F_Percent: 31.10,
    Male: 57.6,
    M_Number: 518,
    M_Percent: 68.9,

},
{
    year: 2017,
    Female: 28.5,
    F_Number: 273,
    F_Percent: 25.4,
    Male: 92.1,
    M_Number: 802,
    M_Percent: 74.6,

},
{
    year: 2018,
    Female: 25.6,
    F_Number: 252,
    F_Percent: 26.8,
    Male: 75.1,
    M_Number: 687,
    M_Percent: 73.2,

},
{
    year: 2019,
    Female: 25.4,
    F_Number: 259,
    F_Percent: 24.9,
    Male: 91.4,
    M_Number: 782,
    M_Percent: 75.1,

},
{
    year: 2020,
    Female: 28.4,
    F_Number: 259,
    F_Percent: 24.9,
    Male: 91.4,
    M_Number: 782,
    M_Percent: 75.10,

},
]

Year = data4.map(function (row){
    return row.year
  });

 // Trace for the Benzo Data
let trace13 = {
    x: data4.map(row => row.year),
    y: data4.map(row => row.F_Number),
    type: "bar",
    name: 'Female'
  }; 

 // Trace for the Benzo Data
let trace14 = {
    x: data4.map(row => row.year),
    y: data4.map(row => row.M_Number),
    type: "bar",
    name: 'Male'
  };

// Data trace array
let traceData4 = [trace13, trace14];

// Apply the group barmode to the layout
let layout4 = {
  title: "Opiod Mortality Rate by Sex"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot4", traceData4, layout4);

//Race Data 
// Non-Opiod Race Data 
let data5 =[{
    year: 2010,
    White: 24,
    Black: 54,
    Hispanic: 12 
},
{
    year: 2011,
    White: 32,
    Black: 62,
    Hispanic: 6    
},
{
    year: 2012,
    White:20,
    Black: 60,
    Hispanic: 9  
},
{
    year: 2013,
    White: 35,
    Black: 58,
    Hispanic: 6 
},
{
    year:2014,
    White: 33,
    Black: 83,
    Hispanic: 14  
},
{
    year: 2015,
    White: 47,
    Black: 82,
    Hispanic: 11
},
{
    year: 2016,
    White: 41,
    Black: 100,
    Hispanic: 13    
},
{
    year:2017,
    White: 41,
    Black: 93,
    Hispanic: 7   
},
{
    year:2018,
    White: 50,
    Black: 108,
    Hispanic: 17    
},
{
    year:2019,
    White: 47,
    Black: 117,
    Hispanic: 18  
},
{
    year:2020,
    White: 36,
    Black: 119,
    Hispanic: 14   
},
{
    year:2021,
    White: 65,
    Black: 143,
    Hispanic: 13    
},
]

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

// Opiod Race Data
let data6 =[{
    year: 2010,
    White: 198,
    Black: 76,
    Hispanic: 23 
},
{
    year: 2011,
    White: 246,
    Black: 83,
    Hispanic: 56   
},
{
    year: 2012,
    White:280,
    Black: 99,
    Hispanic: 41
},
{
    year: 2013,
    White: 238,
    Black: 68,
    Hispanic: 47 
},
{
    year:2014,
    White: 312,
    Black: 112,
    Hispanic: 67  
},
{
    year: 2015,
    White: 343,
    Black: 145,
    Hispanic: 71
},
{
    year: 2016,
    White: 468,
    Black: 169,
    Hispanic: 101    
},
{
    year:2017,
    White: 679,
    Black: 228,
    Hispanic: 153   
},
{
    year:2018,
    White: 562,
    Black: 239,
    Hispanic: 130    
},
{
    year:2019,
    White: 519,
    Black: 267,
    Hispanic: 165 
},
{
    year:2020,
    White: 475,
    Black: 378,
    Hispanic: 171  
},
{
    year:2021,
    White: 459,
    Black: 399,
    Hispanic: 177    
},
]

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
