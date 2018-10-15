// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    winWidth:0,
    winHeight:0,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '/images/haibao/1.jpg',
      '/images/haibao/2.jpg',
      '/images/haibao/3.jpg',
      '/images/haibao/4.jpg',      
    ],
    movies:[]
  },
  switchNav:function(e){
    var id=e.currentTarget.id;
    this.setData({currentTab:id});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({winWidth:res.windowWidth});
        that.setData({winHeight:res.windowHeight});
      }
    });
    this.loadMovies();
  },
  switchNav:function(e){
    var id=e.currentTarget.id;
    this.setData({currentTab:id});
  },
  loadMovies:function(){
    var page = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      method: 'GET',
      success: function(res) {
        var subjects=res.data.subjects;
        var size=subjects.length;//电影总数量
        var len=parseInt(size/3);//每行放置3个电影，计算出需要多少行
        // console.log(res);
        page.setData({movies:subjects});
        page.setData({winHeight:(len+1)*230});
      }
    })
  },
  loadDetail:function(e){
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id='+id
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