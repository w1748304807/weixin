// pages/top/top.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:[],
    _active:0,
    menu_ul_active:0,
    menu_ul:[],
    clusterCode:'free',
    categoryCode:'all',
    rankModuleInfoList:[]
  },
  
  handleClick (e) {
    if (this.data._active == e.currentTarget.dataset.id)
      return 0
    this.setData({
      _active: e.currentTarget.dataset.id,
      menu_ul_active: 0
    })
    this.setData({
      clusterCode: this.data.result[this.data._active].clusterCode,
      menu_ul: this.data.result[this.data._active].categoryInfos,
      categoryCode: this.data.result[this.data._active].categoryInfos[0].categoryCode
    })
    this.menuListRequest(this.data.clusterCode, this.data.categoryCode)
  },
  handleClick2 (e){
    if (this.data.menu_ul_active == e.currentTarget.dataset.index)
      return 0
    this.setData({
      menu_ul_active: e.currentTarget.dataset.index,
      categoryCode: this.data.menu_ul[e.currentTarget.dataset.index].categoryCode
    })
    this.menuListRequest(this.data.clusterCode, this.data.categoryCode)
    // this.onPageScroll()
  },
  // onPageScroll(e){
  //   console.log(e)
  // },

  menuListRequest(clusterCode, categoryCode){
    wx.request({
      url: 'https://m.ximalaya.com/m-revision/page/rank/queryRank',
      data: {
        clusterCode: clusterCode,
        categoryCode: categoryCode
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          rankModuleInfoList: res.data.data.rankModuleInfoList
        })
      }
    })
  },

  

  // lifetimes:{
  //   attached: function () {
  //     wx.request({
  //       url: 'https://m.ximalaya.com/m-revision/page/rank/queryRankClusterDetail',
  //       data: {
  //       },
  //       header: {
  //         'content-type': 'application/json' // 默认值
  //       },
  //       success:(res) =>{
  //         // console.log(res.data),
  //         this.setData({
  //           result:res.data
  //         })
  //         console.log(this.data.result)
  //       }
  //     })



  //   }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
      wx.request({
        url: 'https://m.ximalaya.com/m-revision/page/rank/queryRankClusterDetail',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          this.setData({
            result: res.data.data,
            clusterCode: res.data.data[0].clusterCode,
            menu_ul: res.data.data[this.data._active].categoryInfos,
            categoryCode: res.data.data[this.data._active].categoryInfos[0].categoryCode
          })
        }
      }),
      this.menuListRequest(this.data.clusterCode,this.data.categoryCode)

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide: function () {

  // },

  /**
   * 生命周期函数--监听页面卸载
   */
  // onUnload: function () {

  // },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})