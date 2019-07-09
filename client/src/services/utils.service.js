import dayjs from 'dayjs';
export default {

  /**
   * Format ISS position data
   * 
   * @param {Object}
   * @return {Array} 
   */
  formatData (data) {
    data = JSON.parse(data);
    let formattedData = [{
      x: data.iss_position.latitude,
      y: data.iss_position.longitude,
      time: dayjs.unix(data.timestamp).format('M/D/YYYY h:mm:ss a') + ' PST'
    }];
    return formattedData;
  }

}
