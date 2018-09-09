// pages/collect/collect.js
import { fetch,login } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
   datas:[],
   url:"",
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getDate()
  },
 getDate(){
   fetch.get("/collection",{pn:1,size:999}).then(res=>{
     console.log(res)
     this.setData({
     datas:res.data,
     })
   })
 },
  jumpBook(event) {
   console.log(event)
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`
    })
  },
  delete(event){
    console.log(event)
    let id =event.currentTarget.id
    let _this=this
    wx.showModal({
      title: '提示',
      content: '是否取消收藏',
      success: function (res) {
        if (res.confirm) {
          fetch.delete(`/collection/${id}`)
          _this.getDate()
        } else if (res.cancel) {
          
        }
      }
    })
    
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})