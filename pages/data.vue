<template>
<div class="container chart">
  <h1>Ethnographic Sruvey</h1>
  <div class="chart demographics">
    <h2>Demographics</h2>
    <v-donut-chart :data="{
      datasets: [
      {
          data: [4, 1],
          backgroundColor: ['#75b9be','#f2c078'],
          labels: ['Male', 'Female'],
          label: 'Gender'
      },
      {
          data: [3, 1, 1],
          backgroundColor: ['#f2c078','#faedca', '#c1dbb3'],
          labels: ['CT', 'TA', 'MO'],
          label: 'Location'
      },
      {
          data: [1, 2, 0, 2],
          backgroundColor: ['#f2c078','#faedca', '#c1dbb3'],
          labels: ['<18', '18-25', '25-39', '40+'],
          label: 'Age'
      },
      ],
    }" 
    :options="{
      circumference: 3.1415, rotation: -3.14,
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var label = '['+data.datasets[tooltipItem.datasetIndex].label+'] '+data.datasets[tooltipItem.datasetIndex].labels[tooltipItem.index];
            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            return label + ': ' + value;
          }
        }
    }
  }"/>
  </div>
  
  <div class="chart">
    <h2>Would you spend more on a product if it were environmentally friendly?</h2>
    <v-donut-chart :data="{
      datasets: [{
          data: [1, 1, 1, 1],
          backgroundColor: ['#F00','#86c7f3', '#00F']
      }],
      labels: [
          'Yes',
          'No',
          'Probably depending on the product',
          'I would if I knew for sure it was'
      ],
    }"/>
  </div>
  <div class="chart">
    <h2>Would you spend more on a product if it were environmentally friendly?</h2>
    <v-donut-chart :data="{
      datasets: [{
          data: [1, 1, 1, 1],
          backgroundColor: ['#F00','#86c7f3', '#00F']
      }],
      labels: [
          'Yes',
          'No',
          'Probably depending on the product',
          'I would if I knew for sure it was'
      ],
    }"/>
  </div>
</div>
</template>
<script>
import VDonutChart from '~/components/VDonutChart.vue'
import VLineChart from '~/components/VLineChart.vue'

export default {
  components: {
    VDonutChart,
    VLineChart
  }
}
</script>
<style lang="scss" scoped>
  .container.chart {
    position: fixed;
    width: 100%;
    padding-top: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;
    height: 100%;
    * {
      flex-basis: 45%;
    }
    h1, h2 {
      flex-basis: 100%;
      text-align: center;
    }
    .demographics{
      flex-basis: 100%;
      padding: 2em;
      height: 500px;
    }
  }
</style>
