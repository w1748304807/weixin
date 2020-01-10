// components/index/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    page: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: ['推荐', '有声书', '相声', '音乐', '儿童', '人文', '情感', '历史', '科技', '更多'],
    page: 0
  },
  methods: {
    handleClick(e) {
      let key
      let index = e.currentTarget.dataset.index
      switch(index) {
        case 0:
          key = 'tuijian'
          break;
        case 1:
          key = 'youshengshu'
          break;
        case 2:
          key = 'xiangsheng'
          break;
        case 3:
          key = 'yinyue'
          break;
        case 4:
          key = 'ertong'
          break;
        case 5:
          key = 'renwen'
          break;
        case 6:
          key = 'qinggan'
          break;
        case 7:
          key = 'lishi'
          break;
        case 8:
          key = 'keji'
          break;
        case 9:
          key = 'gengduo'
          break;
        default:
          break;
      }
      this.setData({
        page: index
      })
      var patch
      if(index==0){
        patch = `/pages/index/index?page=${index}&key=${key}`
      }else{
        patch = `/pages/indes/indes?page=${index}&key=${key}`
      }
      wx.redirectTo({
        url: `${patch}`
      })
    }
  },
  lifetimes: {
    attached: function() {
      setTimeout(() => {
        console.log(this.properties)
      })
    }
  }
})
