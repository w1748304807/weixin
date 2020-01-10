// components/index/tabbar.js
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
    list: ['推荐', '有声书', '相声', '音乐', '儿童', '人文', '情感', '历史', '科技', '更多'],
    page: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e) {
      let index = e.currentTarget.dataset.index
      this.setData({
        page: index
      })
      wx.navigateTo({
        url: '/pages/indes/indes'
      })
      console.log(1)
    }
  },
  lifetimes: {
    
  }
})
