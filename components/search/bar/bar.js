// components/search/bar/bar.js
const app = getApp()
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
    page: 0,
    id: '-1'
  },
  methods: {
    handleClick(e) {
      let id = e.currentTarget.dataset.id
      let index = e.currentTarget.dataset.index
      this.setData({
        page: index,
        id
      })
      app.data.id = id
      this.triggerEvent('myevent',id)     
    }
  },
  lifetimes: {
    attached() {
      wx.request({
        url: 'https://m.ximalaya.com/hotWordBillboardCategory', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:(res) => {
          this.setData({
            list: res.data.category
          })
        }
      })
    }
  }
})
