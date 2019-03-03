// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper9Index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCase()
  },
  // 获取案例
  getCase(){
    let url = 'https://www.yun-live.com/api/cases'
    wx.request({
      url: url,
      success: res=>{
        console.log(res.data)
        this.setData({
          cases: res.data.data.list
        })
      }
    })
  },
  swiper9(e){
    this.setData({
      swiper9Index: e.detail.current
    })
  },
  bindSwiper9(e){
    this.setData({
      swiper9Index: e.currentTarget.dataset.index
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})