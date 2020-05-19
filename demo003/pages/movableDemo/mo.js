// pages/movableDemo/mo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[

    ],
    startx:0,
    starty:0,

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
    for(var i = 0;i < 10;i++){
      this.data.items.push({
        content:i+'向左滑动，向左滑动，向左滑动，向左滑动，向左滑动，向左滑动，向左滑动，',
        isTouchMove:false,
      })
    }
    this.setData({
      items:this.data.items
    })

  },
  // 手指触摸动做开始,记录x坐标
  touchstart(e){
    this.data.items.forEach(function(v,i){
      if(v.isTouchMove){
        v.isTouchMove = false
      }
    })
    this.setData({
      startx:e.changedTouches[0].clientx,
      starty:e.changedTouches[0].clienty,
      items:this.data.items
    })
  },
  /**
   * 滑动事件处理
   */
  touchmove(e){
    var that = this,
    index = e.currentTarget.dataset.index,
    startx = that.data.startx,
    starty = that.data.starty,
    touchMovex = e.changedTouches[0].clientx,
    touchMovey = e.changedTouches[0].clienty,
    // 获取滑动角度
    angle = that.angle({x:startx,y:starty},{x:touchMovex,y:touchMovey});
    that.data.items.forEach(function(v,i){
      v.isTouchMove = false
      // 滑动角度大于30度
      if(Math.abs(angle) > 30)return;
      if(i == index){
        if(touchMovex > startx)//右滑动
        v.isTouchMove = false
        else
        v.isTouchMove = true
      }
    })
    that.setData({
      items:that.data.items
    })
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

  },
  angle:function(start,end){
    var _x = end.x - start.x,
    _y = end.y-start.y
    // 返回角度
    return 360 * Math.atan(_y/_x)/(2 * Math.PI);
  }
})


