// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'此时此刻',
    author:'xuwei',
    poster:'',
    src:'',

  },
  audioPlay(){
this.audioCtx.play();
  },
  audioPause(){
    this.audioCtx.pause();
  },
  audio14(){
    this.audioCtx.seek(14);
  },
  audioStart(){
    this.audioCtx.seek(0);
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
    // 创建音频上下文对象
    this.audioCtx = wx.createAudioContext('myAudio')

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