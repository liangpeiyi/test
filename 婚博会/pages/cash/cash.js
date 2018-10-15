function initSubMenuDisplay(){
  return ['hidden','hidden'];
}
Page({
  data:{
    subMenuDisplay:initSubMenuDisplay(),
    currentTab:-1
  },
  tapMainMenu:function(e){
    //parseInt()解析一个字符串，返回一个整数，此处的index对应dt中的data-index属性
    var index=parseInt(e.currentTarget.dataset.index);
    // console.log(index);
    var newSubMenuDisplay=initSubMenuDisplay();
    // console.log(this);
    if(this.data.subMenuDisplay[index]=='hidden'){
      newSubMenuDisplay[index]='show';
      this.setData({currentTab:index});
    }else{
      newSubMenuDisplay[index]='hidden';
      this.setData({currentTab:-1});
    }
    this.setData({subMenuDisplay:newSubMenuDisplay});
  }
})