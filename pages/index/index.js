//index.js
//获取应用实例
import {fetch}from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    swiperData: [], 
    mainContent: [],
    indicatorDots:true,
    autoplay: false,
    interval: 1000,
    duration: 750,
    indicindicatorActiveColor:"green",
    circular:true,
    indicatorColor: "blue",
    isLoading:false,
    pn:1,
    hasMore:true,
    loadDone:false
  },
  //事件处理函数

  onLoad: function () {
    this.getData();
    this.getContent();
  
    } ,
    
  getData(){
    return new Promise((resolve,reject)=>{
      this.setData({
        isLoading: true
      })
      fetch.get('/swiper').then(res => {
        resolve()
        // console.log(res)
        this.setData({
          swiperDate: res.data,
          isLoading: false,
        })
      }).catch(err => {
        reject(reject)
        this.setData({
          isLoading: false
        })
      })
    })
  },
  getContent(){
    return new Promise((resolve, reject) => {
      this.setData({
        isLoading: true
      })
      fetch.get('/category/books').then(res => {
        resolve()
        this.setData({
          mainContent: res.data,
          isLoading: false
        })
      }) 
    })
  },
  getAllData(){
    return new Promise((resolve,reject)=>{
      Promise.all([this.getData(), this.getContent()]).then(res=>{
        resolve() 
      }).catch(err=>{
        reject(reject)
      })
    })

  },
  jumpBook(event){
  
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`
    })
  },
  getMoreContent(){
    return new Promise(resolve=>{
      fetch.get('/category/books', { pn: this.data.pn }).then(res => {
        console.log(res)
        let newArr=[...this.data.mainContent,...res.data]
        this.setData({
          mainContent:newArr,
          isLoading: false
        })
        resolve(res)
      }) 
    })
    
  },
  onPullDownRefresh: function () {
    console.log("下拉执行了")
      this.getAllData().then(()=>{
        this.setData({
          pn: 1,
          hasMore: true,
        })
        wx.stopPullDownRefresh()  
      })
  },
 onReachBottom(){
   console.log("上拉执行了")
   if(this.data.hasMore){
     this.setData({
       pn:this.data.pn+1,
       loadDone:true
     })
     this.getMoreContent().then(res => {
       if (res.data.length < 2) {
         this.setData({
           hasMore: false,
         })
       }
     })
   }
 }
})

 
