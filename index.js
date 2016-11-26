'use strit';

const margin = { top: 80, right: 80, bottom: 80, left: 80 };
const width = 1600 - margin.left - margin.right;
const height = 1000 - margin.top - margin.bottom;

let x = d3.scaleOrdinal().range([0, width]);
let y = d3.scaleLinear().domain([0, 20]).range([height, 0]);

let xAxis = d3.axisBottom().scale(x).ticks(10);
let yAxis = d3.axisLeft().scale(y).ticks(10);

let svg = d3.select('body')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('class', 'graph')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.csv('labor.csv', (err, data) => {
  console.log(data);

  total = totalLaborsPer(data, -1);
  month = totalLaborsPer(data, 31);
  week = totalLaborsPer(data, 7);
  day = totalLaborsPer(data, 1);

  console.log("total", total);
  console.log("month", month);
  console.log("week", week);
  console.log("day", day);

  categoriesByTotal = categorizedLaborsPer(data, -1);
  categoriesByMonth = categorizedLaborsPer(data, 31);
  categoriesByWeek = categorizedLaborsPer(data, 7);
  categoriesByDay = categorizedLaborsPer(data, 1);

  console.log("categoriesByTotal", categoriesByTotal);
  console.log("categoriesByMonth", categoriesByMonth);
  console.log("categoriesByWeek", categoriesByWeek);
  console.log("categoriesByDay", categoriesByDay);
});

function totalLaborsPer (data, days) {

}

function categorizedLaborsPer (data, days) {

}
