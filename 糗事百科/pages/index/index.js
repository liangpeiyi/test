Page({
  data:{
    currentTab:0,
    flag:0
  },
  switchNav:function (e) {
    var id=e.currentTarget.id;
    this.setData({currentTab:id});
    this.setData({flag:id});
  },
  onShareAppMessage:function(){
    return{
      title:'糗事百科',
      desc:'这里有搞笑的娱乐段子',
      path:'/index/index'
    }
  }
})