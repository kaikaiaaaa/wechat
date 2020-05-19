// pages/personCenter/personCenter.js
Page({
  //表单数据
  personName:'',
  password:'',
  gender:'',
  hobby:'',
  birthday:'',
  studyYears:'',
  workYears:'',
  isMember:'',


  /**
   * 页面的初始数据
   */
  data: {


  },
  inputValue(e){
    this.personName = e.detail.value;
  },
  passwordValue(e){
    this.password = e.detail.value;

  },
  genderRadio(e){
    this.gender = e.detail.value == 1 ? "male" : "female"
    console.log(this.gender)
  },
  hobbyCheckbox(e){
    this.hobby = e.detail.value
  },
  birthdayValue(e){
    this.birthday = e.detail.value;
    console.log(this.birthday)
  },
  sliderValue(e){
    this.studyYears = e.detail.value;
  },
  isSwitch(e){
    this.isMember = e.detail.value;
  },
  regFormSubmit(){
    let membersData = {
      personName:this.personName,
      password:this.password,
      gender:this.gender,
      hobby:this.hobby,
      birthday:this.birthday,
      isMember:this.isMember,
    }
    if(membersData.personName == ""){
      wx.showModal({
      title:'err',
      content:'姓名没有填写'
      })
    }
    // 向服务器提交
    console.log(membersData)
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