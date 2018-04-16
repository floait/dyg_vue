let ajaxpost = function (url,data) {
  var sendPost = this.$http.post(
    '/apis/hecdoctor/api/user/article/list',
    {
      pageindex:1,
      pagenum: 3,
      type:this.articleType
    },
    'Content-Type:application/json',
  )
  sendPost.then(function(response){
    // 响应成功回调
    console.log(response);
    if(response.statusText != 'OK') {
      return
    }
    var _data = response.bodyText = JSON.parse(getDAes(response.bodyText))
    console.log('data:',response.bodyText)
    console.log(_data.resultMsg)

    if (_data.resultCode == 0){
      var datas = _data.data;
    }else {
      console.log(_data.resultMsg)
    }
  }, function(response){
        console.log("请求失败")
  })
}


  //
  // this.$http.post(
  //   '/apis/hecdoctor/api/user/article/list',
  //   {
  //     pageindex:1,
  //     pagenum: 3,
  //     type:this.articleType
  //   },
  //   'Content-Type:application/json',
  // )
  //   .then(function(response){
  //     // 响应成功回调
  //     console.log(response);
  //     if(response.statusText != 'OK') {
  //       return
  //     }
  //     let _data = response.bodyText = JSON.parse(getDAes(response.bodyText))
  //     console.log('data:',response.bodyText)
  //     console.log(_data.resultMsg)
  //
  //     if (_data.resultCode == 0){
  //       let __data = _data.data;
  //       this.listData = __data;
  //     }else {
  //       alert(_data.resultMsg)
  //     }
  //   }, function(response){
  //     console.log("请求失败")
  //   });
