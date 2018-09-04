// pages/details/details.js

import { fetch } from '../../utils/util.js'
Page({
 data: {
    bookId:"",
    bookData:{}
  },
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      bookId:options.id
    })
    this.getData()
  },
  getData(){
    fetch.get(`/book/${this.data.bookId}`).then(res=>{
      //  console.log(res)
      this.setData({
          bookData:res
      })
    })
  },
  jumpCatalog(event) {
    const id = event.currentTarget.id
    // console.log(id)
    wx.navigateTo({
      url: `/pages/catalog/catalog?id=${id}`
    })
  },
  onShareAppMessage: function () {

  },
})