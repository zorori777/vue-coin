var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(function(response) {
        this.bpi = response.data.bpi
      }.bind(this))
      .catch(function(error) {
        this.hasError = true
      }.bind(this))
      .finally(function(){
        this.loading = false
      }.bind(this))
  },
  // 小数点の調整
  filters: {
    currencyDecimal(value){
      return value.toFixed(2)
    }
  }
})
