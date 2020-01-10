// components/index/swiper/swiper.js
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
    img: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      wx.request({
        url: 'https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=youshengshu', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          this.setData({
            img: res.data.data.moduleContent.focusImages
          })
          console.log(res.data)
        }
      })
    }
  }
})
