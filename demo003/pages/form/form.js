// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray:[
      ['中国','北京'],['中国','北京'],['中国','北京'],
    ],
    index:0,
    country:['美国','英国','中国'],
    items:[
      {
        name:'tom',
        value:'cna',
        // checked:false,
      },
      {
        name:'mary',
        value:'cna',
        checked:true,
      },
      {
        name:'kiki',
        value:'usa'
      },],
      radioItems:[
        {
          name:'mary',
        value:'cna',
        // checked:true,
        },
        {
        name:'kary',
        value:'cna',
        checked:true,
  },],
  },
  bindPickerChange(e){
    console.log(e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },
  sliderChange(e){
    console.log(e.detail.value)

  },
  // radiochange(e){
  //   var checked = e.detail.value
  //   var changed = {},
  //   for(var i = 0;i < this.radioItems.length;i++){
  //     if(checked.indexof)
  //   }
  // },
  checkbind(e){
    console.log(e)

  },
  checkedchange(){

  },
  onstatuschange(e){
    const formats = e.detail
    console.log(e.detail)

  },
  /**
   * 提交事件
   */
  formSubmit(e){
    // 获取数据 处理数据 提交数据
    e.detail.value()

  },
  formReset(e){
    

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