import Vue from 'vue';
import Vuex from 'vuex';
import styles from '@/assets/sass/_variables.scss';
import utils from '@/services/utils.service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartData: null,
    chartOptions: {
      title: {
        text: 'Current ISS Location'
      },
      legend: {
        display: false
      },
      hover: {
        mode: 'index'
      },
      scales: {
        xAxes: [{
          callback: (value) => {
            console.log(value);
            return value;
          },
          scaleLabel: {
            display: true,
            labelString: 'LATITUDE',
            fontFamily: "'Titillium Web', sans-serif",
            fontSize: 20
          }
        }],
        yAxes: [{
          callback: (value) => {
            return value;
          },
          scaleLabel: {
            display: true,
            labelString: 'LONGITUDE',
            fontFamily: "'Titillium Web', sans-serif",
            fontSize: 20
          }
        }]
      },
      tooltips: {
        enabled: false
      },
      defaults: {
        global: {
          elements: {
            points: {
              hitRadius: 15
            }
          }
        }
      }
    },
    currentLocation: null
  },
  mutations: {
    /**
     * Location data from server
     * 
     * @param {Object} state 
     * @param {Object} data 
     */
    SOCKET_LOCATION_DATA(state, data) {
      let formattedData = utils.formatData(data);
      state.chartData = {
        datasets: [{
          'pointBackgroundColor': styles['blues-standard'],
          'pointRadius': 7,
          'pointHoverRadius': 7,
          'pointHitRadius': 25,
          'fill': false,
          'data': formattedData
        }]
      };
      state.currentLocation = formattedData[0];
    }
  },
  actions: {},
  getters: {
    getChartData (state) {
      return state.chartData;
    },
    getChartOptions (state) {
      return state.chartOptions;
    },
    getCurrentLocation (state) {
      return state.currentLocation;
    }
  }
})
