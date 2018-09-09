// pages/details/details.js

import { fetch, login } from '../../utils/util.js'
Page({
 data: {
    bookId:"",
    bookData:{},
    isLoading:false,
    isCollect:0
  },
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      bookId:options.id
    })
    this.getData()
   
  },


  getData(){
    this.setData({
      isLoading:true
    })
    fetch.get(`/book/${this.data.bookId}`).then(res=>{
       console.log(res)
      this.setData({
          bookData:res,
          isLoading:false
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
      return{
        title:this.data.bookData.data.title,
        path:`pages/details/details?id=${this.data.bookId}`,
        imageUrl:this.data.bookData.data.img
      }
  },
  handleCollect(){
    // let isCollect=this.data.bookData.isCollect
    this.setData({
      isCollect:1
    })
    fetch.post("/collection", {bookId:`${this.data.bookId}`})
    // console.log(this.data.bookId)
    this.getData()
  }
})