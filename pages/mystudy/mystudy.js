// pages/mystudy/mystudy.js
import { fetch, login } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // studyData:[],
    title:"",
    // id:"",
    // bookId:"",
    titleId:""
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
  },
  onShow(){
    this.getDate()
  },
    getDate(){
      fetch.get('/readList').then(res => {
          // console.log(res)
          this.setData({
           studyData: res.data,
          })
        })
     
    },
  jumpBook(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`
    })
  },
  toggleCatalog(event){
    // console.log(event)
    const id = event.currentTarget.dataset.id
    const bookId = event.currentTarget.dataset.bookid
    wx.navigateTo({
      url: `/pages/book/book?id=${id}&bookId=${bookId}`
    })
  },
  onShareAppMessage: function () {

  },
})