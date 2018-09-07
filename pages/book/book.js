import { fetch } from '../../utils/util.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleId: "",
    article: {},
    title:"",
    bookId:"",
    catalog: [],
    isShow:false,
    font: 40 ,
    isLoading:false,
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      titleId: options.id ,
      bookId:options.bookId
     
    })
    this.getData()
    this.getCatalog()
  },
  getData() {
    this.setData({
      isLoading:true,
      isShow:false

    })
    fetch.get(`/article/${this.data.titleId}`)
      .then(res => {
         console.log(res)
        this.setData({
          article: res.data.article.content,
          // article: res.data.article,
          title:res.data.title,
          index: res.data.article.index,
          isLoading:false,
          
        })
      }).catch(err=>{
        isLoading:false
      })
  },
  getCatalog(){
    fetch.get(`/titles/${this.data.bookId}`).then(res=>{
      // console.log(res)
      this.setData({
        catalog:res.data
      })
    })
  },


  toggleCatalog(){
    let isShow=!this.data.isShow;
    this.setData({
      isShow
    })  
  },
  abc(e){
    let id=e.currentTarget.id
    this.setData({
      titleId:id
    })
    this.getData()
  },
  handleAdd(){
    this.setData({
      font:this.data.font+2
    })
  },
  handleRuduce() {
    if(this.data.font<=30){
      wx.showModal({
        title: "提示",
        content: "字体太小影响视力",
        showCancel: true,
      })
    }else{
    this.setData({
      font: this.data.font - 2
    })
    }
  },
  handleNext() {
    let catalog = this.data.catalog
    console.log(catalog)
    if (catalog[this.data.index + 1]) {
      this.setData({
        titleId: catalog[this.data.index + 1]._id
      })
      this.getData()
    } else {
      wx.showToast({
        title: "已是最后一章了"
      })
    }
  },
  handlePrev() {
    let catalog = this.data.catalog
    if (this.data.index - 1 < 0) {
      wx.showToast({
        title: "已是第一章了"
      })
    } else {
      this.setData({
        titleId: catalog[this.data.index - 1]._id
      })
      this.getData()
    }
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