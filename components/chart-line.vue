<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: 'transparent',
          borderColor: '#5B46E0',
          borderWidth: 4,
          data: [43, 80, 60, 70, 90, 50]
        },
        {
          label: 'Data Two',
          backgroundColor: 'transparent',
          borderColor: '#00C4F9',
          borderWidth: 4,
          data: [72, 80, 60, 70, 90, 50]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom'
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>