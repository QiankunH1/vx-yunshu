//index.js
//获取应用实例
import {fetch}from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      "../../images/swiper/01.jpg",
      "../../images/swiper/02.jpg",
      "../../images/swiper/03.jpg",
    ], 
    indicatorDots:true,
    autoplay: false,
    interval: 1000,
    duration: 750,
    indicindicatorActiveColor:"green",
    circular:true,
    indicatorColor: "blue",
  },
  //事件处理函数

  onLoad: function () {
    this.getData();
    } ,
    
  getData(){
   fetch.get('/swiper').then(res=>{
     console.log(res);
     

   })
  
  }
 
})

 
