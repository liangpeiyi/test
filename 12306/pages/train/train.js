Page ({
  data:{
    indicatorDots:false,
    autoplay:true,
    interval:3000,
    duration:1000,
    imgUrls:[
      '/images/haibao/1.jpg',
      '/images/haibao/2.jpg',
      '/images/haibao/3.jpg'
    ],
    currentTab:0
  },
  switchNav:function(e){
    var id=e.currentTarget.id;
    this.setData({currentTab:id});
  },
  //表单提交formSubmit事件，获得始发站、终点站、日期、星期，把这些数据值带到trainList火车票列表界面
  formSubmit:function(e){
    // console.log(e);
    var startStation=e.detail.value.startStation;//始发站
    var endStation=e.detail.value.endStation;//终点站
    var date=e.detail.value.date;//日期：2月2日
    var week=e.detail.value.week;//星期:周四
    console.log("startStation ="+startStation + "&endStation=" + endStation + "&date=" + date + "&week=" + week);

    wx.navigateTo({
      url: '../trainList/trainList?startStation=' + startStation + "&endStation=" + endStation + "&date=" + date + "&week=" + week
    })
  }
})  