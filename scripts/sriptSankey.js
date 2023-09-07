var H = Highcharts;

H.seriesTypes.sankey.prototype.pointAttribs = function (point, state) {
  var opacity = this.options.linkOpacity,
    color = point.color;

  if (state) {
    opacity = this.options.states[state].linkOpacity || opacity;
    color = this.options.states[state].color || point.color;
  }

  return {
    fill: point.isNode
      ? color
      : {
          linearGradient: {
            x1: 0,
            x2: 1,
            y1: 0,
            y2: 0,
          },
          stops: [
            [0, H.color(color).setOpacity(opacity).get()],
            [1, H.color(point.toNode.color).setOpacity(opacity).get()],
          ],
        },
  };
};

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      backgroundColor: "#242427",
      type: "sankey",
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        dataLabels: {
          enabled: true,
          format: "{point.id} {point.wei}%",
          // format: "{point.id}<br>{point.wei}%",

          style: {
            fontFamily: "Inter",
            fontSize: "12px",
            color: "#ffffff",

            fontWeight: 400,
            lineHeight: "15px",
            letterSpacing: "0em",
            textOutline: "none",
          },
        },
        keys: ["from", "to", "weight"],

        data: [
          ["Медведи", "Мед", 44],
          ["Медведи", "Малина", 7],
          ["Медведи", "Яблоки", 14],
          ["Ежи", "Мед", 6],
          ["Ежи", "Малина", 13],
          ["Ежи", "Яблоки", 16],
        ],
        nodes: [
          {
            id: "Медведи",
            wei: "65",
            color: "#979797",
          },
          {
            id: "Ежи",
            wei: "35",
            color: "#77954D",
          },
          {
            id: "Мед",
            wei: "50",
            color: "#8B75BA",
          },
          {
            id: "Малина",
            wei: "20",
            color: "#DDAFD3",
          },
          {
            id: "Яблоки",
            wei: "30",
            color: "#7EB8BF",
          },
        ],
        nodeWidth: 15,
        nodePadding: 3,
        curveFactor: 0.7,
      },
    ],
  });
});
