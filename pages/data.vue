<template>
<div class="container chart">
  <h1>Ethnographic Sruvey</h1>
  <div class="chart demographics">
    <h2>Demographics</h2>
    <div class="chartI">
    <v-donut-chart class="chartI location" :data="{
      datasets: [
      {
          data: [22, 8],
          backgroundColor: ['#75b9be','#f2c078'],
          labels: ['Male', 'Female'],
          label: 'Gender'
      },
      {
          data: [25, 1, 2, 1, 1],
          backgroundColor: ['#f2c078','#faedca', '#c1dbb3'],
          labels: ['CT', 'Texas', 'Midwest', 'New York', 'Puerto Rico'],
          label: 'Location'
      }
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
  <h4>Gender (top) & Location (bottom)</h4></div>
  <v-bar-chart class="chartI age" :data="{
      datasets: [
      {
          data: [2, 0, 9, 8, 0, 1, 3, 0, 0, 3, 1, 1, 1 ,1, 0],
          backgroundColor: '#47eb4a',
          label: 'Age',
          lineTension: 0.1
      }
      ],
      labels: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 48, 50, 55, 56, '57+'],
    }"/>
  </div>
  
  <div class="chart">
    <h2>What major or job position do you fill?</h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [16, 6, 4, 3, 1],
          backgroundColor: greens
      }],
      labels: [
          'Engineering/Math',
          'Business',
          'Humanities',
          'Arts',
          'Undecided'
      ],
    }"
    :options="{
      tooltips
    }"/>
  </div>
  <div class="chart">
    <h2>Have you heard of Greenwashing?</h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [8, 20, 2],
          backgroundColor: greens
      }],
      labels: [
          'Yes',
          'No',
          'Heard of it',
      ],
      
    }"
    :options="{
      tooltips
    }"/>
    <h5>Out of our results, 6 people responded that it is a method of cleaning.</h5>
  </div>
  <div class="chart">
    <h2>What makes a product natural according to the FDA?</h2>
    <v-bar-chart class="chartI" :data="{
      datasets: [{
          data: [8, 6, 4, 6, 6],
          backgroundColor: greens[3],
          label: 'Response'
      }],
      labels: [
          '30% Natural Ingredients',
          '90% Natural Ingredients',
          '100% Natural Ingredients',
          'Not Sure',
          'Nothing'
      ],
    }" :options="{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
  }"/>
  </div>
  <div class="chart">
    <h2>Can you explain what makes a product natural/green?</h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [13, 11, 1, 3, 2],
          backgroundColor: greens
      }],
      labels: [
          'Contains all natural or green ingredients. Not man made.',
          'Contains no industrialized chemicals.',
          'Contains only organic material.',
          'If it looks natural to me.',
          'All Natural is an impossible label to use, and is unrelated to eco-friendliness.'
      ],
    }"
    :options="{
      tooltips
    }"/>
  </div>
  <div class="chart">
    <h2>Do you think all natural food is better for the environment?</h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [13, 14, 3],
          backgroundColor: greens
      }],
      labels: [
          'Yes',
          'No',
          'Depends on the product'
      ],
    }"
    :options="{
      tooltips
    }"/>
  </div>
  <div class="chart">
    <h2>Why are people inclined to by more eco or natural products?</h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [10, 10, 6, 4],
          backgroundColor: greens
      }],
      labels: [
          'They feel better about themselves.',
          `They assume it's healthier.`,
          'They care about the environment.',
          'They have been mislead by marketing to do it.'
      ],
    }" :options="{
      tooltips
    }"/>
  </div>
  <div class="chart">
    <h2>Would you pick a product if it were environmentally friendly at the same cost?</h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [22, 3, 5],
          backgroundColor: greens
      }],
      labels: [
          'Yes',
          'No',
          'Only if I know for sure',
      ],
    }" 
    :options="{
      tooltips
    }"/>
  </div>
  <div class="chart">
    <h2>Would you spend more on a product if it were environmentally friendly?</h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [16, 8, 6],
          backgroundColor: greens
      }],
      labels: [
          'Yes',
          'No',
          'Depends on the product'
      ],
    }"
    :options="{
      tooltips
    }"/>
  </div>
  <div class="chart">
    <h2>Are you less likely to believe a product is green 
      when told so by a big name corporation, say Coca-Cola, vs a small 
      family owned business?
    </h2>
    <v-donut-chart class="chartI" :data="{
      datasets: [{
          data: [18, 10, 2],
          backgroundColor: greens
      }],
      labels: [
          'More inclined to believe smaller corporation',
          'More inclined to believe larger corporation',
          'Neither'
      ],
    }"
    :options="{
      tooltips
    }"/>
  </div>
</div>
</template>
<script>
import VDonutChart from '~/components/VDonutChart.vue'
import VLineChart from '~/components/VLineChart.vue'
import VBarChart from '~/components/VBarChart.vue'

export default {
  components: {
    VDonutChart,
    VLineChart,
    VBarChart
  },
  data: ()=>({
    blues: ['#1d70a2','#2892d7', '#1b4353', '#6daedb', '#173753'],
    greens: ['#00b760','#00b2a0', '#96bc98', '#68a384', '#3f8253'],
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat((currentValue/total*100).toFixed(1));
          return currentValue + ' (' + percentage + '%)';
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  })
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
    padding-bottom: 10px;
    height: 100%;
    * {
      flex-basis: 45%;
    }
    h1, h2, h5 {
      flex-basis: 100%;
      text-align: center;
    }
    .chartI {
      flex-basis: 80%;
      width: 80%;
      max-width: 600px;
      min-width: 300px;
      margin-left: 2em;
    }
    .demographics{
      flex-basis: 80%;
      max-width: 80%;
      padding: 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .chartI {
        flex: 0 2 40%;
        min-width: 250px;
      }
    }
    
  }
</style>
