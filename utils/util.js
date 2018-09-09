const baseUrl="https://m.yaojunrong.com"

const fetch ={
  http(url,method,data){
    return new Promise((resolve,reject)=>{
      let token=wx.getStorageSync('token')
      let header={
        'content-type': 'application/json'
      }
      if(token){
        header.token=token
      }
      wx.request({
        url: baseUrl + url,
        data,
        method,
        header,
        success(res) {
          if (res.header.Token || res.header.token){
            res.header.Token=(res.header.Token || res.header.token)
            wx.setStorageSync('token', res.header.Token)
          }
          resolve(res.data)

        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
      get(url,data){
        return this.http(url, "GET", data)
      },
      post(url, data) {
        return this.http(url, "POST", data)
      },  
      delete(url,data){
        return this.http(url,"DELETE",data)
      }
    
}


const login=()=>{
  wx.login({
    success(res){
      fetch.post('/login',{
        code:res.code,
        appid: 'wx790124b3ab317507',
        secret: 'e67b7077848ec8b189fd15c2876c02b7'
      }).then(res=>{
        console.log(res)
      })
    }
  })
}
exports.login=login;
exports.fetch=fetch; 