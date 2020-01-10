//index.js
//获取应用实例

Page({
  data: {
    list1: [],
    list2: [],
    page: '',
    key: 'tuijian'
  },
  searchClick: function() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  onLoad(options) {
    var page
    var key
    if(!options.page){
      page = '0'
    }else{
      page = options.page
    }
    this.setData({
      page
    })
    if (!options.key){
      key = 'tuijian'
    }else{
      key = options.key
    }
    this.setData({
      key
    })
    console.log(key)
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
