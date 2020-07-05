import React, { Component } from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.global.tooltips.enabled = false;
Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    ctx.restore();
    ctx.font = "bold 11px Roboto";
    ctx.fillStyle = "rgb(49, 181, 134)";
    ctx.textBaseline = "middle";

    var text = "HOẠT ĐỘNG",
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});

const data = {
  datasets: [
    {
      data: [10, 35, 30, 25],
      // labels: ["India", "China", "US", "Canada"],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const options = {
  tooltips: {
    enabled: false
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(data => {
          sum += data;
          return sum;
        });
        let percentage = ((value * 100) / sum).toFixed(0) + "%";
        return percentage;
      },
      color: "#fff"
    }
  }
};

class DoughnutChart extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <div id="DoughnutChart">
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

export default DoughnutChart;
