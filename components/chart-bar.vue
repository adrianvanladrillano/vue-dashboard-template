<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#5B46E0',
          data: [10, 20, 30, 40, 50, 60, 70]
        },
        {
          label: 'Data Two',
          backgroundColor: '#00C4F9',
          data: [10, 20, 30, 40, 50, 60, 70]
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
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>