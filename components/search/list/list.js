// components/search/list/list.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myid: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [],
    id: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      this.setData({
        id: this.properties.myid
      })
      console.log(this.properties)
      wx.request({
        url: `https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24`, //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:(res) => {
          this.setData({
            list: res.data.hotWordResultList
          })
          console.log(this.data.list)
        }
      })
    }
  },
  observers: {
    'myid': function(id) {
      wx.request({
        url: `https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=${id}&size=24`, //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          this.setData({
            list: res.data.hotWordResultList
          })
        }
      })
    }
  }
})
