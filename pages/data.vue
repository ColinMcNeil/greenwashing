<template>
<div class="container chart">
  <h1>Data</h1>
  <h3></h3>
  <v-donut-chart :data="{
    datasets: [{
        data: [25, 25, 25, 25],
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
    * {
      flex-basis: 45%;
    }
  }
</style>
