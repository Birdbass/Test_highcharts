var categories = ["Не зашифровано", "Зашифровано"],
  data = [
    {
      y: 82,
      color: "#979797",
      drilldown: {
        name: "Не зашифровано",
        color: "#979797",
      },
    },

    {
      y: 133,
      color: "#77954D",
      drilldown: {
        name: "Зашифровано",
        color: "#77954D",
      },
    },
  ];

var browserData = [];
for (var i = 0; i < data.length; i++) {
  browserData.push({
    name: categories[i],
    y: data[i].y,
    color: data[i].color,
  });
}

var startAngle = 0 - (90 + 180 * (data[0].y / (data[0].y + data[1].y)));

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    colors: ["#979797", "#77954D"],
    chart: {
      type: "pie",
      backgroundColor: "#4e4e4e",
      spacingTop: 0,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    title: {
      verticalAlign: "middle",
      floating: true,
      y: 30,
      text: '<div style="text-align: center; font-size: 55px; color: #FFFFFFF5">215</div> <br> <span style="text-align: center; font-size: 25px; color: #FFFFFF8F">133(+74)<br> 82</span> ',
    },

    series: [
      {
        name: "Статистика",
        data: browserData,
        dataLabels: {
          style: {
            fontFamily: "ArialMT,Calibri",
            fontSize: "40px",
            fontWeight: "normal",
            color: "#ffffff",
          },
        },
        innerSize: "85%",
      },
    ],
    plotOptions: {
      pie: {
        borderWidth: 0,
        startAngle: startAngle,
        dataLabels: {
          useHTML: true,
          enabled: true,
          connectorColor: "#fff",
          format:
            '<div style="position: relative; text-align: center; font-size: 40px">{point.percentage:.0f}%</div>',
        },
        allowPointSelect: true,
        cursor: "pointer",
        showInLegend: true,
      },
      series: {
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            opacity: 0.5,
          },
        },
      },
    },
  });
});
