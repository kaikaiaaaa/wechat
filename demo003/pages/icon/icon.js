let phone = '';


// pages/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 手机电话的获取
   */
  inputPhone(event){
    console.log()
    phone = event.detail.value;

  },
  /**
   * 显示电话
   */
  showPhone(){
    console.log(phone)

  },
  /**
   * 完成事件
   */
  reg:function(){
    console.log('hehe')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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