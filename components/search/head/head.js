// components/search/head/head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [],
    data: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      wx.request({
        url: `https://m.ximalaya.com/revision/suggest?kw=${event.detail.value}&paidFilter=false&scope=all`, //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:(res) => {
          console.log(res.data)
          this.setData({
            list: res.data.data.result.albumResultList,
            data: res.data.data.result.queryResultList
          })
        }
      })
    },
    backClick() {
      wx.navigateBack({})
    }
  }
})
