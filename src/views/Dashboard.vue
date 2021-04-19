<template>
<div class="dashboard">
  <h2>Welcome to Dashboard</h2><hr/>
  <div class="barchart">
    <div>
      <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
    </div>
  </div>
  <div class="linechart">
    <div>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
  </div>
</div>
</template>

<script>

export default {
  components: {
  },
  name: 'Barchart',
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      }],
    };
  },
};
</script>

<style lang="sass" scoped>
h2
  text-align: center
  padding: 10px
.barchart
  text-align: -webkit-left
.linechart
  text-align: -webkit-right
</style>
