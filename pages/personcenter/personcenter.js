// pages/personcenter/personcenter.js
import { fetch, login } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: true,
    name:"",
    urls:"",
    num:0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 查看是否授权
  this.getInfo()
   
  },
  getInfo(){
    let _this = this
    wx.getSetting({

      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              _this.setData({
                name: res.userInfo.nickName,
                urls: res.userInfo.avatarUrl,
                canIUse: false
              })
              console.log(res.userInfo)

            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
    this.setData({
      name: e.detail.userInfo.nickName,
      urls: e.detail.userInfo.avatarUrl,
      canIUse: false

    })
    this.getCollectNum()
    
  }, 
  toCollect(){
    wx.navigateTo({
      url: '/pages/collect/collect',
    })
  },
  getCollectNum(){
    fetch.get('/collection/total').then(res=>{
      console.log(res)
      this.setData({
        num:res.data,
      })
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
 let  _this=this
    wx.getSetting({

      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          _this.getCollectNum()
        }
      }
    })



     
    
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