// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

const myCollectionData = [
  {
    name: "Optimus Prime",
    year: "2022",
    theme: "Icons",
    theme_id: "721",
    num_parts: "1508",
    img_url: "https://cdn.rebrickable.com/media/sets/10302-1.jpg",
  },
  {
    name: "Bumblebee",
    year: "2024",
    theme: "Icons",
    theme_id: "721",
    num_parts: "950",
    img_url: "https://cdn.rebrickable.com/media/sets/10338-1.jpg",
  },
  {
    name: "Bonsai",
    year: "2021",
    theme: "Icons",
    theme_id: "721",
    num_parts: "878",
    img_url: "https://cdn.rebrickable.com/media/sets/10281-1.jpg",
  },
  {
    name: "Mini Orchid",
    year: "2025",
    theme: "Botanicals",
    theme_id: "769",
    num_parts: "274",
    img_url: "https://cdn.rebrickable.com/media/sets/10343-1.jpg",
  },
  {
    name: "Lucky Bamboo",
    year: "2025",
    theme: "Botanicals",
    theme_id: "769",
    num_parts: "325",
    img_url: "https://cdn.rebrickable.com/media/sets/10344-1.jpg",
  },
  {
    name: "Ducati Panigale V4 R",
    year: "2020",
    theme: "Technic",
    theme_id: "1",
    num_parts: "646",
    img_url: "https://cdn.rebrickable.com/media/sets/42107-1.jpg",
  },
  {
    name: "Lamborghini Hurac√°n Tecnica",
    year: "2023",
    theme: "Technic",
    theme_id: "1",
    num_parts: "806",
    img_url: "https://cdn.rebrickable.com/media/sets/42161-1.jpg",
  },
  {
    name: "McLaren Solus GT & McLaren F1 LM",
    year: "2023",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "587",
    img_url: "https://cdn.rebrickable.com/media/sets/76918-1.jpg",
  },
  {
    name: "Mighty Dinosaurs",
    year: "2017",
    theme: "Creator 3-in-1",
    theme_id: "672",
    num_parts: "174",
    img_url: "https://cdn.rebrickable.com/media/sets/31058-1.jpg",
  },
  {
    name: "Yellow Yoshi's Fruit Tree Expansion Set",
    year: "2022",
    theme: "Super Mario",
    theme_id: "690",
    num_parts: "46",
    img_url: "https://cdn.rebrickable.com/media/sets/30509-1.jpg",
  },
  {
    name: "Monster Jam Dragon",
    year: "2023",
    theme: "Technic",
    theme_id: "1",
    num_parts: "217",
    img_url: "https://cdn.rebrickable.com/media/sets/42149-1.jpg",
  },
  {
    name: "Cargo Terminal",
    year: "2013",
    theme: "Airport",
    theme_id: "53",
    num_parts: "658",
    img_url: "https://cdn.rebrickable.com/media/sets/60022-1.jpg",
  },
  {
    name: "Coast Guard Patrol",
    year: "2013",
    theme: "Coast Guard",
    theme_id: "55",
    num_parts: "450",
    img_url: "https://cdn.rebrickable.com/media/sets/60014-1.jpg",
  },
  {
    name: "Retro Camera",
    year: "2024",
    theme: "Creator 3-in-1",
    theme_id: "672",
    num_parts: "261",
    img_url: "https://cdn.rebrickable.com/media/sets/31147-1.jpg",
  },
  {
    name: "Plum Blossom",
    year: "2024",
    theme: "Icons",
    theme_id: "721",
    num_parts: "327",
    img_url: "https://cdn.rebrickable.com/media/sets/10369-1.jpg",
  },
  {
    name: "Jeep Wrangler",
    year: "2021",
    theme: "Technic",
    theme_id: "1",
    num_parts: "665",
    img_url: "https://cdn.rebrickable.com/media/sets/42122-1.jpg",
  },
  {
    name: "Minecraft Skeleton BigFig with Magma Cube",
    year: "2019",
    theme: "Minecraft",
    theme_id: "577",
    num_parts: "142",
    img_url: "https://cdn.rebrickable.com/media/sets/21150-1.jpg",
  },
  {
    name: "2 Fast 2 Furious Nissan Skyline GT-R (R34)",
    year: "2023",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "319",
    img_url: "https://cdn.rebrickable.com/media/sets/76917-1.jpg",
  },
  {
    name: "Fender Stratocaster",
    year: "2021",
    theme: "LEGO Ideas and CUUSOO",
    theme_id: "576",
    num_parts: "1079",
    img_url: "https://cdn.rebrickable.com/media/sets/21329-1.jpg",
  },
  {
    name: "Creative Monkey Fun",
    year: "2023",
    theme: "Classic",
    theme_id: "621",
    num_parts: "135",
    img_url: "https://cdn.rebrickable.com/media/sets/11031-1.jpg",
  },
  {
    name: "Panda",
    year: "2023",
    theme: "Creator 3-in-1",
    theme_id: "672",
    num_parts: "83",
    img_url: "https://cdn.rebrickable.com/media/sets/30641-1.jpg",
  },
  {
    name: "Gru, Stuart and Otto",
    year: "2021",
    theme: "Brickheadz",
    theme_id: "610",
    num_parts: "244",
    img_url: "https://cdn.rebrickable.com/media/sets/40420-1.jpg",
  },
  {
    name: "Mercedes-AMG F1 W12 E Performance & Mercedes-AMG Project One",
    year: "2022",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "567",
    img_url: "https://cdn.rebrickable.com/media/sets/76909-1.jpg",
  },
  {
    name: "Dolphin and Turtle",
    year: "2022",
    theme: "Creator 3-in-1",
    theme_id: "672",
    num_parts: "137",
    img_url: "https://cdn.rebrickable.com/media/sets/31128-1.jpg",
  },
  {
    name: "1985 Audi Sport quattro S1",
    year: "2020",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "253",
    img_url: "https://cdn.rebrickable.com/media/sets/76897-1.jpg",
  },
  {
    name: "Chevrolet Corvette C8.R Race Car and 1968 Chevrolet Corvette",
    year: "2021",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "515",
    img_url: "https://cdn.rebrickable.com/media/sets/76903-1.jpg",
  },
  {
    name: "McLaren Senna GTR",
    year: "2021",
    theme: "Technic",
    theme_id: "1",
    num_parts: "830",
    img_url: "https://cdn.rebrickable.com/media/sets/42123-1.jpg",
  },
  {
    name: "Toyota GR Supra",
    year: "2021",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "302",
    img_url: "https://cdn.rebrickable.com/media/sets/76901-1.jpg",
  },
  {
    name: "Nissan GT-R NISMO",
    year: "2020",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "301",
    img_url: "https://cdn.rebrickable.com/media/sets/76896-1.jpg",
  },
  {
    name: "Aston Martin DB5",
    year: "2022",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "298",
    img_url: "https://cdn.rebrickable.com/media/sets/76911-1.jpg",
  },
  {
    name: "Lamborghini Countach",
    year: "2022",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "262",
    img_url: "https://cdn.rebrickable.com/media/sets/76908-1.jpg",
  },
  {
    name: "Koenigsegg Jesko",
    year: "2021",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "283",
    img_url: "https://cdn.rebrickable.com/media/sets/76900-1.jpg",
  },
  {
    name: "Formula E Porsche 99X Electric",
    year: "2022",
    theme: "Technic",
    theme_id: "1",
    num_parts: "422",
    img_url: "https://cdn.rebrickable.com/media/sets/42137-1.jpg",
  },
  {
    name: "Fast & Furious 1970 Dodge Charger R/T",
    year: "2022",
    theme: "Speed Champions",
    theme_id: "601",
    num_parts: "345",
    img_url: "https://cdn.rebrickable.com/media/sets/76912-1.jpg",
  },
  {
    name: "Flower Garden",
    year: "2024",
    theme: "Friends",
    theme_id: "494",
    num_parts: "64",
    img_url: "https://cdn.rebrickable.com/media/sets/30659-1.jpg",
  },
  {
    name: "Maple's Pumpkin Garden",
    year: "2024",
    theme: "Animal Crossing",
    theme_id: "752",
    num_parts: "29",
    img_url: "https://cdn.rebrickable.com/media/sets/30662-1.jpg",
  },
  {
    name: "Birthday Train",
    year: "2023",
    theme: "Creator",
    theme_id: "22",
    num_parts: "58",
    img_url: "https://cdn.rebrickable.com/media/sets/30642-1.jpg",
  },
  {
    name: "Belle Bottom, Kevin and Bob",
    year: "2021",
    theme: "Brickheadz",
    theme_id: "610",
    num_parts: "309",
    img_url: "https://cdn.rebrickable.com/media/sets/40421-1.jpg",
  },
];

// Number of builds (bar chart)

const numberOfBuildsBarChart = document.getElementById(
  "numberOfBuildsBarChart"
);

const numberOfBuildsBarChartData = [{ name: "Marina's Collection" }];

const numberOfBuildsBarChartMeData = [{ name: "My collection", count: 38 }];

const numberOfBuildsBarChartLegoData = [
  { name: "Total # of LEGO sets ever released as of 2025", count: 24659 },
];

new Chart(numberOfBuildsBarChart, {
  type: "bar",
  data: {
    labels: numberOfBuildsBarChartData.map((row) => row.name),
    datasets: [
      {
        label: "My LEGO sets",
        data: numberOfBuildsBarChartMeData.map((row) => row.count),
        minBarLength: 18,
        backgroundColor: ["#D01012"],
      },
      {
        label: "All LEGO sets ever released (2025)",
        data: numberOfBuildsBarChartLegoData.map((row) => row.count),
        backgroundColor: ["#F1E3E3"],
      },
    ],
  },
  // Chart customization
  options: {
    // Hide legend
    plugins: {
      legend: {
        display: false,
      },
    },
    // Make bar chart horizontal
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        // Hide all labels
        display: false,
      },
      y: {
        stacked: true,
        // Hide all labels
        display: false,
      },
    },
  },
});

const myCollectionCsv =
  "https://aumarina.github.io/lego_collection/datasets/my-collection.csv";

// Parse the file from .csv to .json
d3.csv(myCollectionCsv).then(function (datapoints) {
  // console.log(datapoints);
  const name = [];
  const year = [];
  const theme = [];
  const num_parts = [];
  const img_url = [];

  // for loop
  for (i = 0; i < datapoints.length; i++) {
    year.push(datapoints[i].year);
    theme.push(datapoints[i].theme);
    num_parts.push(datapoints[i].num_parts);
    name.push(datapoints[i].name);
    img_url.push(datapoints[i].img_url);
  }

  // ______________ SOURCED CODE ______________
  // The following code plots data from a .csv file with Chart.js
  // https://stackoverflow.com/questions/41489790/how-do-i-import-a-csv-into-chart-js
  // *********** START OF SOURCED CODE ***********
  var setNames = datapoints.map(function (data) {
    return data.name;
  });

  var numParts = datapoints.map(function (data) {
    return data.num_parts;
  });

  var theTheme = datapoints.map(function (data) {
    return data.theme;
  });
  // *********** END OF SOURCED CODE ***********

  var mostPiecesChart = document.getElementById("mostPiecesChart");

  new Chart(mostPiecesChart, {
    type: "bar",
    data: {
      labels: setNames,
      datasets: [
        {
          label: "Number of parts",
          data: numParts,
          backgroundColor: [
            "#D01012",
            "#fda000",
            "#009d2f",
            "#31a1e0",
            "#af41e6",
            "#ff84bc",
          ],
        },
      ],
    },
    // Chart customization
    options: {
      // Hide legend
      plugins: {
        legend: {
          display: false,
        },
      },
      // Make bar chart horizontal
      indexAxis: "y",
      scales: {
        x: {
          stacked: true,
          // Hide all labels
          // display: false
        },
        y: {
          stacked: true,
          // Hide all labels
          display: false,
        },
      },
    },
  });
});

const allSetsCsv =
  "https://aumarina.github.io/lego_collection/datasets/all-sets.csv";

// Parse the file from .csv to .json
d3.csv(allSetsCsv).then(function (datapoints) {
  // console.log(datapoints);
  const name = [];
  const year = [];
  const theme = [];
  const num_parts = [];
  const img_url = [];

  // for loop
  for (i = 0; i < datapoints.length; i++) {
    year.push(datapoints[i].year);
    theme.push(datapoints[i].theme);
    num_parts.push(datapoints[i].num_parts);
    name.push(datapoints[i].name);
    img_url.push(datapoints[i].img_url);
  }

  // ______________ SOURCED CODE ______________
  // The following code plots data from a .csv file with Chart.js
  // https://stackoverflow.com/questions/41489790/how-do-i-import-a-csv-into-chart-js
  // *********** START OF SOURCED CODE ***********
  var setNames = datapoints.map(function (data) {
    return data.name;
  });

  var numParts = datapoints.map(function (data) {
    return data.num_parts;
  });

  var theTheme = datapoints.map(function (data) {
    return data.theme;
  });

  var theYear = datapoints.map(function (data) {
    return data.theme;
  });
  // *********** END OF SOURCED CODE ***********

  var mostPiecesChart = document.getElementById("mostPiecesChart");

  new Chart(mostPiecesChart, {
    type: "bar",
    data: {
      labels: setNames,
      datasets: [
        {
          label: "Number of parts",
          data: numParts,
          backgroundColor: [
            "#D01012",
            "#fda000",
            "#009d2f",
            "#31a1e0",
            "#af41e6",
            "#ff84bc",
          ],
        },
      ],
    },
    // Chart customization
    options: {
      // Hide legend
      plugins: {
        legend: {
          display: false,
        },
      },
      // Make bar chart horizontal
      indexAxis: "y",
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          // Hide all labels
          display: false,
        },
      },
    },
  });
});

anychart.onDocumentReady(function () {
  var exampleData = [
    { x: "Mandarin chinese", value: 1090000000, category: "Sino-Tibetan" },
    { x: "English", value: 983000000, category: "Indo-European" },
    { x: "Hindustani", value: 544000000, category: "Indo-European" },
    { x: "Spanish", value: 527000000, category: "Indo-European" },
    { x: "Arabic", value: 422000000, category: "Afro-Asiatic" },
    { x: "Malay", value: 281000000, category: "Austronesian" },
    { x: "Russian", value: 267000000, category: "Indo-European" },
    { x: "Bengali", value: 261000000, category: "Indo-European" },
    { x: "Portuguese", value: 229000000, category: "Indo-European" },
    { x: "French", value: 229000000, category: "Indo-European" },
    { x: "Hausa", value: 150000000, category: "Afro-Asiatic" },
    { x: "Punjabi", value: 148000000, category: "Indo-European" },
    { x: "Japanese", value: 129000000, category: "Japonic" },
    { x: "German", value: 129000000, category: "Indo-European" },
    { x: "Persian", value: 121000000, category: "Indo-European" },
  ];

  var theData =
    "https://aumarina.github.io/lego_collection/datasets/themes.json";
  fetch(theData)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      var wordCloud = anychart.tagCloud(data);
      // Set chart title
      // Set word angles
      wordCloud.angles([0, 30, 60, 70, 120]);

      var formatter = "{%value}{scale:(1)|( LEGO® sets/items)}";
      var tooltip = wordCloud.tooltip();
      tooltip.format(formatter);

      // display the word cloud chart
      wordCloud.container("wordCloud");
      wordCloud.draw();
    });
});

var themeLineChart = document.getElementById("themeLineChart");

var itemsReleasedByYearData =
  "https://aumarina.github.io/lego_collection/datasets/items-released-by-year.json";
fetch(itemsReleasedByYearData)
  .then((response) => response.json())
  .then((allData) => {
    var myCollectionReleasedByYearData =
      "https://aumarina.github.io/lego_collection/datasets/my-items-collected-released-by-year.json";
    fetch(myCollectionReleasedByYearData)
      .then((response) => response.json())
      .then((myData) => {
        new Chart(themeLineChart, {
          type: "line",
          data: {
            labels: allData.map((row) => row.year),
            datasets: [
              {
                label: "My LEGO collection",
                data: myData.map((row) => row.items_released),
                borderWidth: 1,
                fill: {
                  target: "origin",
                  above: "#B9A4F0",
                },
                backgroundColor: "#B9A4F0",
                borderColor: "#DDD0FF",
                borderWidth: 0,
                tension: 0.3,
                pointRadius: 0,
              },
              {
                label: "LEGO database",
                data: allData.map((row) => row.items_released),
                borderWidth: 1,
                fill: {
                  target: "origin",
                  above: "#8870CA",
                },
                backgroundColor: "#8870CA",
                borderColor: "#B69FF6",
                borderWidth: 0,
                tension: 0.3,
                pointRadius: 0,
              },
            ],
          },
          options: {
            plugins: {
              filler: {
                propagate: false,
              },
              legend: {
                position: "bottom",
                align: "end",
                labels: {
                  color: "white",
                  padding: 25,

                  font: {
                    family: "Alexandria",
                    size: 14,
                    weight: "normal",
                  },
                },
              },
              title: {
                display: true,
                text: 'All LEGO items ever released',
                color: "white",
                font: {
                  family: "Alexandria",
                  size: 24,
                  weight: "normal",
                },
            },
            subtitle: {
              display: true,
              text: 'vs. Your Collection',
              color: "#FFFFFF50",
              font: {
                family: "Alexandria",
                size: 16,
                weight: "normal",
              },
          }
            },
            interaction: {
              intersect: false,
            },
            // animation: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: "white",
                  font: {
                    family: "Alexandria",
                    size: 18,
                    weight: "normal",
                  },
                },
              },
              y: {
                display: false,
                border: {
                  display: false,
                },
                stacked: true,
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      });
  });

Highcharts.chart("themeChart", {
  chart: {
    type: "packedbubble",
    height: "100%",
  },
  title: {
    text: "LEGO themes with the most sets (2025)",
    align: "center",
    style: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'normal'
    }
  },
  subtitle: {
    text:
      "Source: " +
      '<a href="https://rebrickable.com/downloads/"' +
      'target="_blank">Rebrickable</a> ',
    align: "center",
    style: {
      color: '#FFFFFF50',
      fontSize: 16,
      fontWeight: 'normal'
    }
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.value} items",
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    packedbubble: {
      // useSimulation: false,
      minSize: "10%",
      maxSize: "330%",
      zMin: 0,
      zMax: 2000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 560,
        },
        style: {
          color: "white",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
    },
  },
  series: [
    {
      name: "LEGO themes",
      // stroke
      color: "#DDD0FF",
      opacity: 0.8,
      marker: {
        // circle fill
        fillColor: "#CCB8FF",
        lineWidth: "0.4"
      },
      data: [
        {
          name: "The Legend of Zelda",
          value: 1,
        },
        {
          name: "Mini",
          value: 1,
        },
        {
          name: "Horizon Adventures",
          value: 1,
        },
        {
          name: "Aquazone",
          value: 1,
        },
        {
          name: "Wednesday",
          value: 2,
        },
        {
          name: "Universe",
          value: 2,
        },
        {
          name: "The Powerpuff Girls",
          value: 2,
        },
        {
          name: "Jurassic Park III",
          value: 2,
        },
        {
          name: "Ghostbusters",
          value: 2,
        },
        {
          name: "Fantastic Beasts",
          value: 2,
        },
        {
          name: "Avatar: The Last Airbender",
          value: 2,
        },
        {
          name: "Zooters",
          value: 3,
        },
        {
          name: "Wolfpack",
          value: 3,
        },
        {
          name: "Stranger Things",
          value: 3,
        },
        {
          name: "Sofia the First",
          value: 3,
        },
        {
          name: "Sculptures",
          value: 3,
        },
        {
          name: "Miles From Tomorrowland",
          value: 3,
        },
        {
          name: "Jurassic World: Fallen Kingdom",
          value: 3,
        },
        {
          name: "Dark Forest",
          value: 3,
        },
        {
          name: "Aquaraiders I",
          value: 3,
        },
        {
          name: "Unitron",
          value: 4,
        },
        {
          name: "Spybotics",
          value: 4,
        },
        {
          name: "Speed Racer",
          value: 4,
        },
        {
          name: "RoboForce",
          value: 4,
        },
        {
          name: "Planes",
          value: 4,
        },
        {
          name: "Marvel Super Heroes",
          value: 4,
        },
        {
          name: "Inventor",
          value: 4,
        },
        {
          name: "Fusion",
          value: 4,
        },
        {
          name: "Forma",
          value: 4,
        },
        {
          name: "Doc McStuffins",
          value: 4,
        },
        {
          name: "DC Comics Super Heroes",
          value: 4,
        },
        {
          name: "Aquasharks",
          value: 4,
        },
        {
          name: "Wicked",
          value: 5,
        },
        {
          name: "Stingrays",
          value: 5,
        },
        {
          name: "Sports",
          value: 5,
        },
        {
          name: "Speed Slammers",
          value: 5,
        },
        {
          name: "Pirates",
          value: 5,
        },
        {
          name: "Outback",
          value: 5,
        },
        {
          name: "eLAB",
          value: 5,
        },
        {
          name: "Dora the Explorer",
          value: 5,
        },
        {
          name: "Despicable Me 4",
          value: 5,
        },
        {
          name: "Botanicals",
          value: 5,
        },
        {
          name: "Advent",
          value: 5,
        },
        {
          name: "UCS",
          value: 6,
        },
        {
          name: "Space Police I",
          value: 6,
        },
        {
          name: "Soft Bricks",
          value: 6,
        },
        {
          name: "Protectors",
          value: 6,
        },
        {
          name: "Princess Castle",
          value: 6,
        },
        {
          name: "Prince of Persia",
          value: 6,
        },
        {
          name: "Launch Command",
          value: 6,
        },
        {
          name: "Gas Station",
          value: 6,
        },
        {
          name: "Fortnite",
          value: 6,
        },
        {
          name: "Dolls",
          value: 6,
        },
        {
          name: "Ben 10",
          value: 6,
        },
        {
          name: "Angry Birds",
          value: 6,
        },
        {
          name: "Mosaic",
          value: 7,
        },
        {
          name: "Jumbo Bricks",
          value: 7,
        },
        {
          name: "Jake and the Never Land Pirates",
          value: 7,
        },
        {
          name: "Hydronauts",
          value: 7,
        },
        {
          name: "Gabby's Dollhouse",
          value: 7,
        },
        {
          name: "Forestmen",
          value: 7,
        },
        {
          name: "Factory",
          value: 7,
        },
        {
          name: "Blacktron I",
          value: 7,
        },
        {
          name: "Black Falcons",
          value: 7,
        },
        {
          name: "Alpha Team",
          value: 7,
        },
        {
          name: "Vikings",
          value: 8,
        },
        {
          name: "The Lone Ranger",
          value: 8,
        },
        {
          name: "Thanksgiving",
          value: 8,
        },
        {
          name: "Space Police II",
          value: 8,
        },
        {
          name: "Mission Deep Freeze",
          value: 8,
        },
        {
          name: "Iron Man",
          value: 8,
        },
        {
          name: "Discovery",
          value: 8,
        },
        {
          name: "DC Comics",
          value: 8,
        },
        {
          name: "Classic Castle",
          value: 8,
        },
        {
          name: "Brick Sketches",
          value: 8,
        },
        {
          name: "Aquanauts",
          value: 8,
        },
        {
          name: "X-Men",
          value: 9,
        },
        {
          name: "World Racers",
          value: 9,
        },
        {
          name: "Trolls: World Tour",
          value: 9,
        },
        {
          name: "Time Cruisers",
          value: 9,
        },
        {
          name: "Spyrius",
          value: 9,
        },
        {
          name: "Space",
          value: 9,
        },
        {
          name: "Royal Knights",
          value: 9,
        },
        {
          name: "Pirates III",
          value: 9,
        },
        {
          name: "Pharaoh's Quest",
          value: 9,
        },
        {
          name: "Minions",
          value: 9,
        },
        {
          name: "M:Tron",
          value: 9,
        },
        {
          name: "Learning",
          value: 9,
        },
        {
          name: "Hobby Sets",
          value: 9,
        },
        {
          name: "Gears",
          value: 9,
        },
        {
          name: "Exploriens",
          value: 9,
        },
        {
          name: "Control Lab",
          value: 9,
        },
        {
          name: "Cargo",
          value: 9,
        },
        {
          name: "Avatar",
          value: 9,
        },
        {
          name: "Aquaraiders II",
          value: 9,
        },
        {
          name: "Action Wheelers",
          value: 9,
        },
        {
          name: "Scooby-Doo",
          value: 10,
        },
        {
          name: "Little Forest Friends",
          value: 10,
        },
        {
          name: "Alien Conquest",
          value: 10,
        },
        {
          name: "Res-Q",
          value: 11,
        },
        {
          name: "Quatro",
          value: 11,
        },
        {
          name: "Off-Road",
          value: 11,
        },
        {
          name: "My Town",
          value: 11,
        },
        {
          name: "Ice Planet 2002",
          value: 11,
        },
        {
          name: "Gravity Games",
          value: 11,
        },
        {
          name: "Team GB",
          value: 12,
        },
        {
          name: "Mars Exploration",
          value: 12,
        },
        {
          name: "Galaxy Squad",
          value: 12,
        },
        {
          name: "Divers",
          value: 12,
        },
        {
          name: "Dino Attack / Dino 2010",
          value: 12,
        },
        {
          name: "DC Super Hero Girls",
          value: 12,
        },
        {
          name: "Toolo",
          value: 13,
        },
        {
          name: "Spidey and His Amazing Friends",
          value: 13,
        },
        {
          name: "Playsets",
          value: 13,
        },
        {
          name: "Overwatch",
          value: 13,
        },
        {
          name: "Mickey Mouse",
          value: 13,
        },
        {
          name: "Marvel",
          value: 13,
        },
        {
          name: "Island Xtreme Stunts",
          value: 13,
        },
        {
          name: "EV3",
          value: 13,
        },
        {
          name: "Dragon Knights",
          value: 13,
        },
        {
          name: "Agents",
          value: 13,
        },
        {
          name: "Superman",
          value: 14,
        },
        {
          name: "SpongeBob SquarePants",
          value: 14,
        },
        {
          name: "Skylines",
          value: 14,
        },
        {
          name: "Powered Up",
          value: 14,
        },
        {
          name: "Monster Fighters",
          value: 14,
        },
        {
          name: "Blacktron II",
          value: 14,
        },
        {
          name: "Black Knights",
          value: 14,
        },
        {
          name: "Animal Crossing",
          value: 14,
        },
        {
          name: "Ultra Agents",
          value: 15,
        },
        {
          name: "Pirates II",
          value: 15,
        },
        {
          name: "The Muppets",
          value: 16,
        },
        {
          name: "Sonic The Hedgehog",
          value: 16,
        },
        {
          name: "Series 27 Minifigures",
          value: 16,
        },
        {
          name: "Series 26 Minifigures",
          value: 16,
        },
        {
          name: "Series 25 Minifigures",
          value: 16,
        },
        {
          name: "Series 24 Minifigures",
          value: 16,
        },
        {
          name: "Series 23 Minifigures",
          value: 16,
        },
        {
          name: "Series 22 Minifigures",
          value: 16,
        },
        {
          name: "Series 21 Minifigures",
          value: 16,
        },
        {
          name: "Race",
          value: 16,
        },
        {
          name: "Model Team",
          value: 16,
        },
        {
          name: "Marvel Series 1",
          value: 16,
        },
        {
          name: "Looney Tunes",
          value: 16,
        },
        {
          name: "Little Robots",
          value: 16,
        },
        {
          name: "Justice League",
          value: 16,
        },
        {
          name: "Guardians of the Galaxy",
          value: 16,
        },
        {
          name: "Fright Knights",
          value: 16,
        },
        {
          name: "Dungeons & Dragons",
          value: 16,
        },
        {
          name: "Constraction",
          value: 16,
        },
        {
          name: "Airlines",
          value: 16,
        },
        {
          name: "Throwbot Slizer",
          value: 17,
        },
        {
          name: "Space Police III",
          value: 17,
        },
        {
          name: "Rock Raiders",
          value: 17,
        },
        {
          name: "Pirates of the Caribbean",
          value: 17,
        },
        {
          name: "Mission Deep Sea",
          value: 17,
        },
        {
          name: "Marvel Series 2",
          value: 17,
        },
        {
          name: "Kingdoms",
          value: 17,
        },
        {
          name: "Ferries",
          value: 17,
        },
        {
          name: "Dinosaurs",
          value: 17,
        },
        {
          name: "Thomas & Friends",
          value: 18,
        },
        {
          name: "The Lord of the Rings",
          value: 18,
        },
        {
          name: "Paradisa",
          value: 18,
        },
        {
          name: "Mickey & Friends",
          value: 18,
        },
        {
          name: "Hockey",
          value: 18,
        },
        {
          name: "Competition",
          value: 18,
        },
        {
          name: "Cities of Wonders",
          value: 18,
        },
        {
          name: "Znap",
          value: 19,
        },
        {
          name: "Xtra",
          value: 19,
        },
        {
          name: "Winnie the Pooh",
          value: 19,
        },
        {
          name: "UFO",
          value: 19,
        },
        {
          name: "The Simpsons Series 2",
          value: 19,
        },
        {
          name: "The Simpsons Series 1",
          value: 19,
        },
        {
          name: "Series 9 Minifigures",
          value: 19,
        },
        {
          name: "Series 8 Minifigures",
          value: 19,
        },
        {
          name: "Series 7 Minifigures",
          value: 19,
        },
        {
          name: "Series 6 Minifigures",
          value: 19,
        },
        {
          name: "Series 5 Minifigures",
          value: 19,
        },
        {
          name: "Series 4 Minifigures",
          value: 19,
        },
        {
          name: "Series 3 Minifigures",
          value: 19,
        },
        {
          name: "Series 20 Minifigures",
          value: 19,
        },
        {
          name: "Series 2 Minifigures",
          value: 19,
        },
        {
          name: "Series 17 Minifigures",
          value: 19,
        },
        {
          name: "Series 16 Minifigures",
          value: 19,
        },
        {
          name: "Series 15 Minifigures",
          value: 19,
        },
        {
          name: "Series 14 Minifigures",
          value: 19,
        },
        {
          name: "Series 13 Minifigures",
          value: 19,
        },
        {
          name: "Series 12 Minifigures",
          value: 19,
        },
        {
          name: "Series 11 Minifigures",
          value: 19,
        },
        {
          name: "Series 1 Minifigures",
          value: 19,
        },
        {
          name: "Power Functions",
          value: 19,
        },
        {
          name: "Minitalia",
          value: 19,
        },
        {
          name: "LEGO Art",
          value: 19,
        },
        {
          name: "Insectoids",
          value: 19,
        },
        {
          name: "Harry Potter and Fantastic Beasts Series 2",
          value: 19,
        },
        {
          name: "Futuron",
          value: 19,
        },
        {
          name: "Dino Island",
          value: 19,
        },
        {
          name: "DFB Minifigures",
          value: 19,
        },
        {
          name: "DC Super Heroes",
          value: 19,
        },
        {
          name: "Series 19 Minifigures",
          value: 20,
        },
        {
          name: "Series 18 Minifigures",
          value: 20,
        },
        {
          name: "Series 10 Minifigures",
          value: 20,
        },
        {
          name: "Modular Buildings",
          value: 20,
        },
        {
          name: "McDonalds",
          value: 20,
        },
        {
          name: "Farm",
          value: 20,
        },
        {
          name: "Serious Play",
          value: 21,
        },
        {
          name: "Master Builder Academy",
          value: 21,
        },
        {
          name: "Mars Mission",
          value: 21,
        },
        {
          name: "LEGO Originals",
          value: 21,
        },
        {
          name: "Knights Kingdom I",
          value: 21,
        },
        {
          name: "Galidor",
          value: 21,
        },
        {
          name: "Extreme Team",
          value: 21,
        },
        {
          name: "Disney Series 2",
          value: 21,
        },
        {
          name: "Disney Series 1",
          value: 21,
        },
        {
          name: "Building",
          value: 21,
        },
        {
          name: "Boat",
          value: 21,
        },
        {
          name: "Space Port",
          value: 22,
        },
        {
          name: "Disney 100",
          value: 22,
        },
        {
          name: "City Center",
          value: 22,
        },
        {
          name: "The LEGO Batman Movie Series 2",
          value: 23,
        },
        {
          name: "The LEGO Batman Movie Series 1",
          value: 23,
        },
        {
          name: "The Hobbit",
          value: 23,
        },
        {
          name: "Teenage Mutant Ninja Turtles",
          value: 23,
        },
        {
          name: "Rattles",
          value: 23,
        },
        {
          name: "Power Miners",
          value: 23,
        },
        {
          name: "Indiana Jones",
          value: 23,
        },
        {
          name: "Dino",
          value: 23,
        },
        {
          name: "4 Juniors",
          value: 23,
        },
        {
          name: "X-Pod",
          value: 24,
        },
        {
          name: "Harbor",
          value: 24,
        },
        {
          name: "Atlantis",
          value: 24,
        },
        {
          name: "Valentine",
          value: 25,
        },
        {
          name: "RC",
          value: 25,
        },
        {
          name: "Harry Potter and Fantastic Beasts Series 1",
          value: 25,
        },
        {
          name: "Unikitty!",
          value: 26,
        },
        {
          name: "Lion Knights",
          value: 26,
        },
        {
          name: "Life On Mars",
          value: 26,
        },
        {
          name: "Jungle",
          value: 26,
        },
        {
          name: "Desert",
          value: 26,
        },
        {
          name: "Toy Story",
          value: 27,
        },
        {
          name: "Stuntz",
          value: 27,
        },
        {
          name: "Coast Guard",
          value: 27,
        },
        {
          name: "Orient Expedition",
          value: 28,
        },
        {
          name: "Mindstorms",
          value: 28,
        },
        {
          name: "Jack Stone",
          value: 28,
        },
        {
          name: "RoboRiders",
          value: 29,
        },
        {
          name: "Speedorz",
          value: 30,
        },
        {
          name: "Hospital",
          value: 30,
        },
        {
          name: "Vehicle",
          value: 31,
        },
        {
          name: "SPIKE",
          value: 31,
        },
        {
          name: "Fantasy Era",
          value: 31,
        },
        {
          name: "Chinese Traditional Festivals",
          value: 31,
        },
        {
          name: "Bob the Builder",
          value: 31,
        },
        {
          name: "Super Heroes DC",
          value: 32,
        },
        {
          name: "Pick A Model",
          value: 32,
        },
        {
          name: "Ninja",
          value: 32,
        },
        {
          name: "Juniors",
          value: 32,
        },
        {
          name: "Homemaker",
          value: 32,
        },
        {
          name: "Hidden Side",
          value: 32,
        },
        {
          name: "Ferrari",
          value: 32,
        },
        {
          name: "Castle",
          value: 32,
        },
        {
          name: "Building Set with People",
          value: 32,
        },
        {
          name: "Villains",
          value: 33,
        },
        {
          name: "Hero Factory",
          value: 34,
        },
        {
          name: "Halloween",
          value: 34,
        },
        {
          name: "Modulex",
          value: 35,
        },
        {
          name: "Frozen",
          value: 35,
        },
        {
          name: "Basketball",
          value: 35,
        },
        {
          name: "Western",
          value: 36,
        },
        {
          name: "Value Packs",
          value: 36,
        },
        {
          name: "RCX",
          value: 36,
        },
        {
          name: "WeDo",
          value: 37,
        },
        {
          name: "Early Creator",
          value: 37,
        },
        {
          name: "Arctic",
          value: 37,
        },
        {
          name: "Expert Builder",
          value: 39,
        },
        {
          name: "Town Plan",
          value: 41,
        },
        {
          name: "Town Jr.",
          value: 41,
        },
        {
          name: "Collectible Minifigures",
          value: 41,
        },
        {
          name: "Elves",
          value: 42,
        },
        {
          name: "The LEGO Batman Movie",
          value: 44,
        },
        {
          name: "Heroes",
          value: 44,
        },
        {
          name: "Bricktober",
          value: 44,
        },
        {
          name: "World City",
          value: 46,
        },
        {
          name: "Ultimate Collector Series",
          value: 46,
        },
        {
          name: "Games",
          value: 47,
        },
        {
          name: "Designer Sets",
          value: 47,
        },
        {
          name: "Architecture",
          value: 47,
        },
        {
          name: "BrickLink Designer Program",
          value: 48,
        },
        {
          name: "VIDIYO",
          value: 50,
        },
        {
          name: "Creator Expert",
          value: 50,
        },
        {
          name: "The LEGO Movie",
          value: 51,
        },
        {
          name: "Make & Create",
          value: 51,
        },
        {
          name: "System",
          value: 52,
        },
        {
          name: "Exo-Force",
          value: 52,
        },
        {
          name: "Dreamzzz",
          value: 52,
        },
        {
          name: "12V",
          value: 52,
        },
        {
          name: "Studios",
          value: 53,
        },
        {
          name: "NXT",
          value: 53,
        },
        {
          name: "Classic Basic",
          value: 53,
        },
        {
          name: "Tabletop Games and Puzzles",
          value: 54,
        },
        {
          name: "Easter",
          value: 54,
        },
        {
          name: "Traffic",
          value: 55,
        },
        {
          name: "Disney",
          value: 55,
        },
        {
          name: "Legoland Parks",
          value: 56,
        },
        {
          name: "Cars",
          value: 57,
        },
        {
          name: "Airport",
          value: 57,
        },
        {
          name: "The LEGO Ninjago Movie",
          value: 58,
        },
        {
          name: "Monkie Kid",
          value: 58,
        },
        {
          name: "Playhouse",
          value: 59,
        },
        {
          name: "HO 1:87 Vehicles",
          value: 61,
        },
        {
          name: "Freestyle",
          value: 64,
        },
        {
          name: "The LEGO Movie II",
          value: 65,
        },
        {
          name: "Icons",
          value: 66,
        },
        {
          name: "Pirates I",
          value: 67,
        },
        {
          name: "LEGO Exclusive",
          value: 67,
        },
        {
          name: "Dimensions",
          value: 68,
        },
        {
          name: "Bricks & More",
          value: 68,
        },
        {
          name: "Audio and Visual Media",
          value: 72,
        },
        {
          name: "Scala",
          value: 73,
        },
        {
          name: "Super Heroes Marvel",
          value: 75,
        },
        {
          name: "Knights Kingdom II",
          value: 76,
        },
        {
          name: "Classic",
          value: 76,
        },
        {
          name: "Legoville",
          value: 77,
        },
        {
          name: "Train",
          value: 80,
        },
        {
          name: "LEGO Ideas and CUUSOO",
          value: 80,
        },
        {
          name: "Clikits",
          value: 85,
        },
        {
          name: "Speed Champions",
          value: 86,
        },
        {
          name: "Posters and Art Prints",
          value: 86,
        },
        {
          name: "4.5V",
          value: 86,
        },
        {
          name: "Classic Space",
          value: 89,
        },
        {
          name: "Belville",
          value: 89,
        },
        {
          name: "DOTS",
          value: 93,
        },
        {
          name: "Legends of Chima",
          value: 98,
        },
        {
          name: "Educational and Dacta",
          value: 100,
        },
        {
          name: "9V",
          value: 100,
        },
        {
          name: "Trains",
          value: 101,
        },
        {
          name: "Universal Building Set",
          value: 103,
        },
        {
          name: "Spider-Man",
          value: 104,
        },
        {
          name: "Soccer",
          value: 104,
        },
        {
          name: "Ideas Books",
          value: 104,
        },
        {
          name: "Fabuland",
          value: 105,
        },
        {
          name: "FIRST LEGO League",
          value: 107,
        },
        {
          name: "Nexo Knights",
          value: 110,
        },
        {
          name: "Jurassic World",
          value: 110,
        },
        {
          name: "Database Sets",
          value: 114,
        },
        {
          name: "Samsonite",
          value: 117,
        },
        {
          name: "Plush Toys",
          value: 118,
        },
        {
          name: "Construction",
          value: 118,
        },
        {
          name: "Seasonal",
          value: 119,
        },
        {
          name: "Bag and Luggage Tags",
          value: 119,
        },
        {
          name: "Mixels",
          value: 121,
        },
        {
          name: "Fire",
          value: 122,
        },
        {
          name: "Disney Princess",
          value: 126,
        },
        {
          name: "Avengers",
          value: 126,
        },
        {
          name: "Batman",
          value: 130,
        },
        {
          name: "Other",
          value: 134,
        },
        {
          name: "Bulk Bricks",
          value: 136,
        },
        {
          name: "Primo",
          value: 137,
        },
        {
          name: "Magnets",
          value: 140,
        },
        {
          name: "Duplo",
          value: 152,
        },
        {
          name: "Monthly Mini Model Build",
          value: 153,
        },
        {
          name: "Minecraft",
          value: 158,
        },
        {
          name: "Super Mario",
          value: 169,
        },
        {
          name: "Storage",
          value: 169,
        },
        {
          name: "Non-fiction Books",
          value: 172,
        },
        {
          name: "Christmas",
          value: 174,
        },
        {
          name: "Brickheadz",
          value: 174,
        },
        {
          name: "Harry Potter",
          value: 184,
        },
        {
          name: "Racers",
          value: 196,
        },
        {
          name: "Police",
          value: 200,
        },
        {
          name: "Basic",
          value: 201,
        },
        {
          name: "Promotional",
          value: 203,
        },
        {
          name: "LEGO Brand Store",
          value: 203,
        },
        {
          name: "Clocks and Watches",
          value: 216,
        },
        {
          name: "Creator",
          value: 224,
        },
        {
          name: "Role Play Toys and Costumes",
          value: 231,
        },
        {
          name: "Activity Books",
          value: 239,
        },
        {
          name: "Creator 3-in-1",
          value: 243,
        },
        {
          name: "City",
          value: 264,
        },
        {
          name: "Duplo and Explore",
          value: 287,
        },
        {
          name: "Video Games and Accessories",
          value: 291,
        },
        {
          name: "Service Packs",
          value: 363,
        },
        {
          name: "Supplemental",
          value: 372,
        },
        {
          name: "Story Books",
          value: 375,
        },
        {
          name: "Basic Set",
          value: 387,
        },
        {
          name: "Activity Books with LEGO Parts",
          value: 410,
        },
        {
          name: "Classic Town",
          value: 411,
        },
        {
          name: "Town",
          value: 422,
        },
        {
          name: "Bionicle",
          value: 447,
        },
        {
          name: "Houseware",
          value: 474,
        },
        {
          name: "Stationery and Office Supplies",
          value: 555,
        },
        {
          name: "Ninjago",
          value: 568,
        },
        {
          name: "Friends",
          value: 640,
        },
        {
          name: "Key Chain",
          value: 774,
        },
        {
          name: "Technic",
          value: 905,
        },
        {
          name: "Star Wars",
          value: 979,
        },
        {
          name: "Gear",
          value: 1224,
        },
      ],
    },
  ],
});

var top10ThemesData = [
  { theme: "Gear", count: 1224 },
  { theme: "Star Wars", count: 979 },
  { theme: "Technic", count: 905 },
  { theme: "Key Chain", count: 774 },
  { theme: "Friends", count: 640 },
  { theme: "Ninjago", count: 568 },
  { theme: "Stationery and Office Supplies", count: 555 },
  { theme: "Houseware", count: 474 },
  { theme: "Bionicle", count: 447 },
  { theme: "Town", count: 422 },
];

var polarAreaChart = document.getElementById('polarAreaChart');

new Chart(polarAreaChart, {
  type: "polarArea",
  data: {
    labels: top10ThemesData.map((row) => row.theme),
    datasets: [
      {
        label: "Products released",
        data: top10ThemesData.map((row) => row.count),
        borderWidth: 0,
      },
    ],
  },
  options: {
    // animation: false,
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          color: "white",
          padding: 25,

          font: {
            family: "Alexandria",
            size: 14,
            weight: "normal",
          },
        },
      },
      title: {
        display: true,
        text: 'LEGO themes with the most items',
        color: "white",
        font: {
          family: "Alexandria",
          size: 24,
          weight: "normal",
        },
    },
    subtitle: {
      display: true,
      text: 'Source: Rebrickable',
      color: "#FFFFFF50",
      font: {
        family: "Alexandria",
        size: 16,
        weight: "normal",
      },
  }
    }
  },
});
