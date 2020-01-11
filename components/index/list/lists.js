// components/index/list/lists.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    key: String,
    flag: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [],
    data: [],
    res: [],
    more: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {

    attached: function () {
      console.log(this.properties)
      var key
      setTimeout(() => {
        key = this.properties.key
        wx.request({
          url: `https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=${key}`, //仅为示例，并非真实的接口地址
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            this.setData({
              list: res.data.data.moduleContent.moduleRankDatas
            })
            let data = []
            let num = []
            this.data.list.map((value) => {
              data.push(value.albumBriefDetailInfos.slice(0, 3))
              num.push(value.albumBriefDetailInfos.slice(3))
            })
            this.setData({
              data,
              res: num
            })
          }
        })
        wx.request({
          url: `https://m.ximalaya.com/m-revision/page/index/queryCategoryFeed?moduleKey=${key}`, //仅为示例，并非真实的接口地址
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            this.setData({
              more: res.data.data.materials
            })
          }
        })
      })
    }
  },
  observers: {
    
    'flag': function () {
      var key
      setTimeout(() => {
        key = this.properties.key
        console.log(this)
        wx.request({
          url: `https://m.ximalaya.com/m-revision/page/index/queryCategoryFeed?moduleKey=${key}`, //仅为示例，并非真实的接口地址
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            this.setData({
              more: [
                ...this.data.more,
                ...res.data.data.materials
              ]
            })
          }
        })
      })
    }
  }
})