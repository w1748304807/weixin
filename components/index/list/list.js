// components/index/list/list.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    key: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      var key
      setTimeout(() => {
        key = this.properties.key
        wx.request({
          url: `https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian`, //仅为示例，并非真实的接口地址
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            console.log(res.data)
            this.setData({
              list: res.data.data.moduleContent.moduleRankDatas,
            })
          }
        })
      })
    }
  }
})