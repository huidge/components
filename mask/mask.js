// components/mask/mask.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow : true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide:function(){
      this.setData({
        isShow : false
      })
    },
    toggle: function () {
      if (this.data.isShow == true)
      this.setData({
        isShow: false
      })
      else
      this.setData({
        isShow : true
      })
    }
  }
})
