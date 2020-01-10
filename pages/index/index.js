//index.js
//获取应用实例

Page({
  data: {
    list1: [],
    list2: []
  },
  onLoad() {
    wx.request({
      url: 'https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          list1: res.data.data.moduleContent.moduleRankDatas,
          list2: res.data.data.moduleContent.tomatoes
        })
      }
    })
  }
})
