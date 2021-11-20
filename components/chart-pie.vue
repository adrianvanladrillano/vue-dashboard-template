<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ['Red', 'Blue'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [30, 70],
          backgroundColor: ['#5B46E0', 'rgb(54, 162, 235)'],
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        position: 'right'
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>