const Towxml = require('/towxml/main');     //引入towxml库
App({
  onLaunch: function () {
  },
  towxml: new Towxml()                     //创建towxml对象，供小程序页面使用
})