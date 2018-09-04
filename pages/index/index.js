//index.js
//获取应用实例
import {fetch}from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    swiperData: [], 
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
    this.getContent();
    } ,
    
  getData(){
   fetch.get('/swiper').then(res=>{
     this.setData({
       swiperDate:res.data
     })  
   })
  },
  getContent(){
    fetch.get('/category/books').then(res=>{
      // console.log(res)
      this.setData({
        mainContent:res.data
      })
    })
  },
  jumpBook(event){
    // console.log(event)
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`
    })
  }
 
})

 
