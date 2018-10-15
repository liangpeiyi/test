Page({
  data:{
    flag:'1',
    way:'请选择获知渠道'
  },
  selectWay:function(){
    this.setData({flag:'0'});
  },
  radioChange:function(e){
    // console.log(e);
    var way=e.detail.value;
    this.setData({flag:'1'});
    this.setData({way:way});
  },
  formSubmit:function(e){
    console.log(e);
    var ticket=e.detail.value;
    ticket.key=this.data.way;
    //wx.setStorage 的同步版本,将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。
    wx.setStorageSync('ticket',ticket);
  }
})