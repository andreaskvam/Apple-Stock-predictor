<template>
  <canvas id="myChart"></canvas>
</template>

<script>

import Chart from "chart.js";

export default {
  data() {
    return {
      canvas: "",
      chart: "",
      data: [143.07321755, 142.62940668, 142.7860541, 141.84621654, 141.19878354, 
      140.9272839, 141.1778943, 138.90142895, 136.44742693, 135.26743195, 135.43449998, 
      131.39324411, 131.24704966, 130.71447724, 126.16153192, 126.44348455, 133.26245894, 
      130.47430415, 127.27888318, 125.26347286, 126.61056093, 121.32664129, 126.26595519, 
      125.1068411, 127.17445887, 126.20330311, 129.29429246, 130.9442151, 130.09837184, 
      125.68117635]
    };
  },

  // Rendering chart in mounted hook so we can see it as soon as component is created
  mounted() {

    // 
    let canvas = document.getElementById("myChart");
    let ctx = canvas.getContext("2d");
    this.canvas = ctx;
    this.createChart()
    this.addChartData()
    this.addLineChart(this.data)
  },

  methods: {
    createChart() {
       this.chart = new Chart(this.canvas, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          datasets: [
            {
              label: "Support Vector Regression",
              backgroundColor: [],
              borderWidth: 2,
              borderColor: [],
              data: [118.96178602, 122.05938359, 120.94788071, 126.45924207, 127.00621511, 
              126.31842645, 126.97033863, 121.6152092, 129.68140405, 125.75050135, 126.12915917, 
              122.45833149, 120.7159466, 115.86652796, 119.81651257, 122.11490875, 133.2525909, 
              114.94129776, 131.84725412, 120.01453101, 123.88221324, 121.92888461, 120.55140808, 
              121.07767349, 130.67782636, 120.09277013, 123.91146063, 117.5696046, 115.51324061, 
              118.4919609],
              order: 0
            },
          ],
        },
        // Configuration options go here
        options: {
          onClick(e){
            // console.log(this.chart.getElementAtEvent(e))
            let point = this.chart.getElementAtEvent(e)[0]
            // console.log(point)
            if(point){
              let label = this.chart.data.labels[point._index]
              let value = this.chart.data.datasets[point._datasetIndex].data[point._index]
              console.log(label, value)
            }
          }
        },
      });
    },

    addChartData(label, data, color ){
      let chartDataset = this.chart.data.datasets[0]

      this.chart.data.labels.push(label)
      chartDataset.data.push(data)
      chartDataset.backgroundColor.push(color)
      chartDataset.borderColor = 'black'

      this.chart.update()
    },

    addLineChart(data){
      this.chart.data.datasets.push({
        label: 'Linear regression',
        data,
        type: 'line',
        backgroundColor: 'blue',
        borderColor: 'green',
        order: 1
      })

      // console.log(this.chart.data.datasets[1])
      // We need to update chart after changes
      this.chart.update()
    }
  },
};
</script>
<style scoped>
#myChart {
  max-width: 800px;
  max-height: 800px;
}
</style>