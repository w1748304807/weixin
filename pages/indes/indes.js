// pages/indes/indes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: '',
    key: '',
    flag: false
  },

  searchClick: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  onLoad: function (options) {
    var page
    var key
    if (!options.page) {
      page = '0'
    } else {
      page = options.page
    }
    this.setData({
      page
    })
    if (!options.key) {
      key = 'tuijian'
    } else {
      key = options.key
    }
    this.setData({
      key
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      flag:!this.data.flag
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})