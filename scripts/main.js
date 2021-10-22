// Create the chart
Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Violent Crime in the U.S. 2014-2019'
  },
  subtitle: {
    text: 'Click the columns for a deeper dive. Source: <a href="https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/topic-pages/tables/table-1" target="_blank">fbi.gov</a>'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Violent Crime per 100k Inhabitants'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b><br/>'
  },

  series: [{
    name: "Years",
    colorByPoint: true,
    data: [{
        name: "2014",
        y: 361.6,
        drilldown: "2014 Crimes"
      },
      {
        name: "2015",
        y: 373.7,
        drilldown: "2015 Crimes"
      },
      {
        name: "2016",
        y: 386.6,
        drilldown: "2016 Crimes"
      },
      {
        name: "2017",
        y: 383.8,
        drilldown: "2017 Crimes"
      },
      {
        name: "2018",
        y: 370.4,
        drilldown: "2018 Crimes"
      },
      {
        name: "2019",
        y: 366.7,
        drilldown: "2019 Crimes"
      }
    ]
  }],
  drilldown: {
    series: [{
        name: "2014 Crimes",
        id: "2014 Crimes",
        data: [

          [
            "Murder and nonnegligent manslaughter rate",
            4.4
          ],
          [
            "Rape (revised definition) rate",
            37.0
          ],
          [
            "Rape (legacy definition) rate",
            26.6
          ],
          [
            "Robbery rate",
            101.3
          ],
          [
            "Aggravated assault rate",
            229.2
          ],
        ],
      },
      {
        name: "2015 Crimes",
        id: "2015 Crimes",
        data: [
          [
            "Murder and nonnegligent manslaughter rate",
            4.9
          ],
          [
            "Rape (revised definition) rate",
            39.3
          ],
          [
            "Rape (legacy definition) rate",
            28.4
          ],
          [
            "Robbery rate",
            102.2
          ],
          [
            "Aggravated assault rate",
            238.1
          ],
        ],
      },
      {
        name: "2016 Crimes",
        id: "2016 Crimes",
        data: [
          [
            "Murder and nonnegligent manslaughter rate",
            5.4
          ],
          [
            "Rape (revised definition) rate",
            40.9
          ],
          [
            "Rape (legacy definition) rate",
            30
          ],
          [
            "Robbery rate",
            102.9
          ],
          [
            "Aggravated assault rate",
            248.3
          ],
        ],
      },
      {
        name: "2017 Crimes",
        id: "2017 Crimes",
        data: [
          [
            "Murder and nonnegligent manslaughter rate",
            5.3
          ],
          [
            "Rape (revised definition) rate",
            41.7
          ],
          [
            "Rape (legacy definition) rate",
            30.7
          ],
          [
            "Robbery rate",
            98.6
          ],
          [
            "Aggravated assault rate",
            249.2
          ],
        ],
      },
      {
        name: "2018 Crimes",
        id: "2018 Crimes",
        data: [
          [
            "Murder and nonnegligent manslaughter rate",
            5.0
          ],
          [
            "Rape (revised definition) rate",
            44.0
          ],
          [
            "Rape (legacy definition) rate",
            31.0
          ],
          [
            "Robbery rate",
            86.1
          ],
          [
            "Aggravated assault rate",
            248.2
          ],
        ],
      },
      {
        name: "2019 Crimes",
        id: "2019 Crimes",
        data: [
          [
            "Murder and nonnegligent manslaughter rate",
            5.0
          ],
          [
            "Rape (revised definition) rate",
            42.6
          ],
          [
            "Rape (legacy definition) rate",
            29.9
          ],
          [
            "Robbery rate",
            81.6
          ],
          [
            "Aggravated assault rate",
            250.2
          ],
        ],
      },
    ]
  }
});

Highcharts.chart('container2', {
  chart: {
    type: 'tilemap',
    inverted: true,
    height: '80%'
  },

  accessibility: {
    description: 'A tile map represents the states of the USA by violent crime rates in 2019. The hexagonal tiles are positioned to geographically echo the map of the USA. A color-coded legend states the population levels.',
    screenReaderSection: {
      beforeChartFormat: '<h5>{chartTitle}</h5>' +
        '<div>{chartSubtitle}</div>' +
        '<div>{chartLongdesc}</div>' +
        '<div>{viewTableButton}</div>'
    },
    point: {
      valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
    }
  },

  title: {
    text: 'U.S. states by violent crime rates in 2019'
  },

  subtitle: {
    text: 'Source:<a href="https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/topic-pages/violent-crime"> fbi.gov</a>'
  },

  xAxis: {
    visible: false
  },

  yAxis: {
    visible: false
  },

  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 200,
      color: '#F9EDB3',
      name: '< 200'
    }, {
      from: 200,
      to: 400,
      color: '#FFC428',
      name: '200 - 400'
    }, {
      from: 400,
      to: 600,
      color: '#FF7987',
      name: '400 - 600'
    }, {
      from: 600,
      color: '#FF2371',
      name: '> 600'
    }]
  },

  tooltip: {
    headerFormat: '',
    pointFormat: 'The violent crime rate of <b> {point.name}</b> is <b>{point.value}</b> per 100,000 inhabitants.'
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.hc-a2}',
        color: '#000000',
        style: {
          textOutline: false
        }
      }
    }
  },

  series: [{
    name: '',
    data: [{
      'hc-a2': 'AL',
      name: 'Alabama',
      region: 'South',
      x: 6,
      y: 7,
      value: 510.8
    }, {
      'hc-a2': 'AK',
      name: 'Alaska',
      region: 'West',
      x: 0,
      y: 0,
      value: 867.1
    }, {
      'hc-a2': 'AZ',
      name: 'Arizona',
      region: 'West',
      x: 5,
      y: 3,
      value: 455.3
    }, {
      'hc-a2': 'AR',
      name: 'Arkansas',
      region: 'South',
      x: 5,
      y: 6,
      value: 584.6
    }, {
      'hc-a2': 'CA',
      name: 'California',
      region: 'West',
      x: 5,
      y: 2,
      value: 441.2
    }, {
      'hc-a2': 'CO',
      name: 'Colorado',
      region: 'West',
      x: 4,
      y: 3,
      value: 381.0
    }, {
      'hc-a2': 'CT',
      name: 'Connecticut',
      region: 'Northeast',
      x: 3,
      y: 11,
      value: 183.6
    }, {
      'hc-a2': 'DE',
      name: 'Delaware',
      region: 'South',
      x: 4,
      y: 9,
      value: 422.6
    }, {
      'hc-a2': 'DC',
      name: 'District of Columbia',
      region: 'South',
      x: 4,
      y: 10,
      value: 1049.0
    }, {
      'hc-a2': 'FL',
      name: 'Florida',
      region: 'South',
      x: 8,
      y: 8,
      value: 378.4
    }, {
      'hc-a2': 'GA',
      name: 'Georgia',
      region: 'South',
      x: 7,
      y: 8,
      value: 340.7
    }, {
      'hc-a2': 'HI',
      name: 'Hawaii',
      region: 'West',
      x: 8,
      y: 0,
      value: 285.5
    }, {
      'hc-a2': 'ID',
      name: 'Idaho',
      region: 'West',
      x: 3,
      y: 2,
      value: 223.8
    }, {
      'hc-a2': 'IL',
      name: 'Illinois',
      region: 'Midwest',
      x: 3,
      y: 6,
      value: 406.9
    }, {
      'hc-a2': 'IN',
      name: 'Indiana',
      region: 'Midwest',
      x: 3,
      y: 7,
      value: 370.8
    }, {
      'hc-a2': 'IA',
      name: 'Iowa',
      region: 'Midwest',
      x: 3,
      y: 5,
      value: 266.6
    }, {
      'hc-a2': 'KS',
      name: 'Kansas',
      region: 'Midwest',
      x: 5,
      y: 5,
      value: 410.8
    }, {
      'hc-a2': 'KY',
      name: 'Kentucky',
      region: 'South',
      x: 4,
      y: 6,
      value: 217.1
    }, {
      'hc-a2': 'LA',
      name: 'Louisiana',
      region: 'South',
      x: 6,
      y: 5,
      value: 549.3
    }, {
      'hc-a2': 'ME',
      name: 'Maine',
      region: 'Northeast',
      x: 0,
      y: 11,
      value: 115.2
    }, {
      'hc-a2': 'MD',
      name: 'Maryland',
      region: 'South',
      x: 4,
      y: 8,
      value: 454.1
    }, {
      'hc-a2': 'MA',
      name: 'Massachusetts',
      region: 'Northeast',
      x: 2,
      y: 10,
      value: 327.6
    }, {
      'hc-a2': 'MI',
      name: 'Michigan',
      region: 'Midwest',
      x: 2,
      y: 7,
      value: 437.4
    }, {
      'hc-a2': 'MN',
      name: 'Minnesota',
      region: 'Midwest',
      x: 2,
      y: 4,
      value: 236.4
    }, {
      'hc-a2': 'MS',
      name: 'Mississippi',
      region: 'South',
      x: 6,
      y: 6,
      value: 277.9
    }, {
      'hc-a2': 'MO',
      name: 'Missouri',
      region: 'Midwest',
      x: 4,
      y: 5,
      value: 495.0
    }, {
      'hc-a2': 'MT',
      name: 'Montana',
      region: 'West',
      x: 2,
      y: 2,
      value: 404.9
    }, {
      'hc-a2': 'NE',
      name: 'Nebraska',
      region: 'Midwest',
      x: 4,
      y: 4,
      value: 300.9
    }, {
      'hc-a2': 'NV',
      name: 'Nevada',
      region: 'West',
      x: 4,
      y: 2,
      value: 493.8
    }, {
      'hc-a2': 'NH',
      name: 'New Hampshire',
      region: 'Northeast',
      x: 1,
      y: 11,
      value: 152.5
    }, {
      'hc-a2': 'NJ',
      name: 'New Jersey',
      region: 'Northeast',
      x: 3,
      y: 10,
      value: 206.9
    }, {
      'hc-a2': 'NM',
      name: 'New Mexico',
      region: 'West',
      x: 6,
      y: 3,
      value: 832.2
    }, {
      'hc-a2': 'NY',
      name: 'New York',
      region: 'Northeast',
      x: 2,
      y: 9,
      value: 358.6
    }, {
      'hc-a2': 'NC',
      name: 'North Carolina',
      region: 'South',
      x: 5,
      y: 9,
      value: 371.8
    }, {
      'hc-a2': 'ND',
      name: 'North Dakota',
      region: 'Midwest',
      x: 2,
      y: 3,
      value: 284.6
    }, {
      'hc-a2': 'OH',
      name: 'Ohio',
      region: 'Midwest',
      x: 3,
      y: 8,
      value: 293.2
    }, {
      'hc-a2': 'OK',
      name: 'Oklahoma',
      region: 'South',
      x: 6,
      y: 4,
      value: 431.8
    }, {
      'hc-a2': 'OR',
      name: 'Oregon',
      region: 'West',
      x: 4,
      y: 1,
      value: 284.4
    }, {
      'hc-a2': 'PA',
      name: 'Pennsylvania',
      region: 'Northeast',
      x: 3,
      y: 9,
      value: 306.4
    }, {
      'hc-a2': 'RI',
      name: 'Rhode Island',
      region: 'Northeast',
      x: 2,
      y: 11,
      value: 221.1
    }, {
      'hc-a2': 'SC',
      name: 'South Carolina',
      region: 'South',
      x: 6,
      y: 8,
      value: 511.3
    }, {
      'hc-a2': 'SD',
      name: 'South Dakota',
      region: 'Midwest',
      x: 3,
      y: 4,
      value: 399.0
    }, {
      'hc-a2': 'TN',
      name: 'Tennessee',
      region: 'South',
      x: 5,
      y: 7,
      value: 595.2
    }, {
      'hc-a2': 'TX',
      name: 'Texas',
      region: 'South',
      x: 7,
      y: 4,
      value: 418.9
    }, {
      'hc-a2': 'UT',
      name: 'Utah',
      region: 'West',
      x: 5,
      y: 4,
      value: 235.6
    }, {
      'hc-a2': 'VT',
      name: 'Vermont',
      region: 'Northeast',
      x: 1,
      y: 10,
      value: 202.2
    }, {
      'hc-a2': 'VA',
      name: 'Virginia',
      region: 'South',
      x: 5,
      y: 8,
      value: 208.0
    }, {
      'hc-a2': 'WA',
      name: 'Washington',
      region: 'West',
      x: 2,
      y: 1,
      value: 293.9
    }, {
      'hc-a2': 'WV',
      name: 'West Virginia',
      region: 'South',
      x: 4,
      y: 7,
      value: 316.6
    }, {
      'hc-a2': 'WI',
      name: 'Wisconsin',
      region: 'Midwest',
      x: 2,
      y: 5,
      value: 293.2
    }, {
      'hc-a2': 'WY',
      name: 'Wyoming',
      region: 'West',
      x: 3,
      y: 3,
      value: 217.4
    }]
  }]
});
