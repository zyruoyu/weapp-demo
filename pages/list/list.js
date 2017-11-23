// pages/list/list.js.js
Page({
  onLoad(){
    console.log('首页展示');
  },
  /**
   * 页面的初始数据
   */
  data: {
    friends:'晨曦',
     arrList:[
    //   '列表一',
    //   '列表二',
    //   '列表三',
    //   '列表四',
    //   '列表五',
    //   '列表六',
    //   '列表七',
    //   '列表八',
    //   '列表九',
    //   '列表十',
    ]
  // motto:'hello word',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('列表展示');
    //箭头函数 this指向 ，向父级一样
    setTimeout(()=>{
      this.setData({
        arrList:[
          '列表一',
          '列表二',
          '列表三',
          '列表四',
          '列表五',
          '列表六',
          '列表七',
          '列表八',
          '列表九',
          '列表十',
        ]
      })
    },1500);

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
  createDate(){
    // 最多30条数据
    //函数返回值
    let length = this.data.arrList.length;
    if(length>=15) return [];
    return ['项目1','项目2','项目3'];
  },
  onReachBottom: function () {
    let arr = this.data.arrList;
   arr.push(... this.createDate());
   console.log(arr);
   this.setData({
     arrList:arr
   })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})