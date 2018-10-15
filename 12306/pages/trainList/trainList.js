// pages/trainList/trainList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    trainList:[],
    winHeight:600,
    currentTab:'1'
  },

  /**
   * 生命周期函数--监听页面加载
   * 接收上一个界面传递过来的参数，并通过wx.setNavigationBarTitle来设置导航标题
   */
  onLoad: function (e) {
    var startStation=e.startStation;//始发站
    var endStation=e.endStation;//终点站
    var date=e.date;//日期
    console.log("startStation="+startStation+"---endStation="+endStation+"---date="+date);
    wx.setNavigationBarTitle({
      title: startStation+'->'+endStation
    });
      this.setData({date:date});
      this.loadTrainList(startStation,endStation);
  },
  loadTrainList:function(startStation,endStation){
    var page=this;
    wx.request({
      url: 'https://tomato6055.cn/train.php',
      data:{
        start_station:startStation,
        end_station:endStation,
        key:'A2D3F400'
      },
      method:'GET',
      success: function (res){
        var trainList=res.data.data;
        //var trainList=wx.getStorageSync('trainList');        
        var size=trainList.length;
        var winHeight=size*100+100;
        page.setData({trainList:trainList});
        page.setData({winHeight:winHeight});
      }
    })
  },
  switchNav:function(e){
    var id=e.currentTarget.id;
    console.log(id);
    this.setData({currentTab:id});
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