<template>
  <div class="container">
    <loader v-if="!chartData"></loader>
    <div class="row justify-content-center mt-5" v-else>
      <!-- Current data -->
      <div class="col-12 col-lg-4 text-center mb-4">
        <h3>🛰️ <a href="https://en.wikipedia.org/wiki/International_Space_Station" target="_blank">ISS Location</a></h3>
        <b-list-group class="mt-5">
          <b-list-group-item class="d-flex justify-content-between align-items-center">Latitude: <span class="font-weight-bold">{{ currentLocation.x }}&#176;</span></b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">Longitude: <span class="font-weight-bold">{{ currentLocation.y }}&#176;</span></b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">Time: <span class="font-weight-bold">{{ currentLocation.time }}</span></b-list-group-item>
        </b-list-group>
      </div>
      <!-- Scatter plot -->
      <div class="col-12 col-lg-8" v-if="chartData.datasets.length > 0">
        <div class="row">
          <div class="col-12">
            <chart :chartData="chartData" :chartOptions="chartOptions"></chart>
          </div>
        </div>
      </div>
      <!-- No data -->
      <div class="col-12 mt-4" v-else>
        <p class="text-center">No Data for this time period</p>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/services/chart.service';
import loader from '@/components/Loader';
import { BListGroup, BListGroupItem } from 'bootstrap-vue';
export default {
  name: 'dashboard',
  components: {
    'chart': Chart,
    'loader': loader,
    'b-list-group': BListGroup,
    'b-list-group-item': BListGroupItem
  },
  computed: {
    chartData () {
      return this.$store.getters['getChartData'];
    },
    chartOptions () {
      return this.$store.getters['getChartOptions'];
    },
    currentLocation () {
      return this.$store.getters['getCurrentLocation'];
    }
  }
}
</script>
