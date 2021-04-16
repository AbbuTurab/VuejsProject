<template>
<div class="dashboard">
  <h2>Welcome to Dashboard</h2><hr/>
  <div class="barchart"><Barchart/></div>
  <div class="linechart"><Linechart/></div>
</div>
</template>

<script>
import Barchart from '../components/Barchar.vue';
import Linechart from '../components/Linegraphs.vue';

export default {
  components: {
    Barchart,
    Linechart,
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
