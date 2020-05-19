// 随机颜色
function getRandomColor(){
  let rgb = []
  for(let i = 0;i <3;i ++){
    let color = floor(Math.random()*256).toString(16)
    color = color.length == 1 ? '0' + color:color
    rgb.push(color)
  }
  return '#'+rgb.join('')
}



// pages/video/video.js
Page({
  inputValue:0,

  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    danmulist:[
      {
        text:'这是个弹幕',
        color:'#f00',
        time:1
      },
      {
        text:'这也是个弹幕',
        color:'blue',
        time:3
      },
    ]


  },
  bindButtonTap(){
    let that = this;
    // 微信api
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration:60,
      camera:['front','back'],
      success(res){
        that.setData({
          src:res.tempFilePath
        })
      }
    })
  },
  // 手写弹幕的弹出
bindInputBlur(e){
  this.inputValue = e.detail.value
},
// 发送弹幕
bindSendDanmu(){
  this.videoContext.sendDanmu({
    text:this.inputValue,
    color:getRandomColor()
  })

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
    this.videoContext = wx.createVideoContext('myvideo')

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