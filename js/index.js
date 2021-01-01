/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息
*/

var app = new Vue({
    el: '#app',
    data: {
        city: '',
        weather: [],
        firstCities: ['北京', '上海', '广州 ', '深圳'],    
    },
    methods: {
        getWeather: function () {
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
                .then(response => this.weather = response.data.data.forecast)
                .catch(err => console.log(err))
        },

        cityChange: function(city) {
            this.city = city;
            this.getWeather();
        }
    }
})
  