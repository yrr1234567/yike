//该js文件主要用于定义控制器
//创建ctrls模块,用来定义各种控制器
angular.module("ctrls",[])
//创建导航栏的控制器,模拟导航栏的控制器,绑定传递过去
.controller("navs",["$scope",function($scope){
    $scope.navs = [
        {link:"#/index",icon:"icon-home",text:"今日一刻"},
        {link:"#/older",icon:"icon-file-empty",text:"往期内容"},
        {link:"#/author",icon:"icon-pencil",text:"热门作者"},
        {link:"#/category",icon:"icon-menu",text:"栏目浏览"},
        {link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
        {link:"#/settings",icon:"icon-cog",text:"设置"}
    ]
}])
//创建index控制器
.controller("index",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
    //模拟数据
    $scope.msg = "控制器获取index的数据";
    //绑定num,判定被点击标题被选中状态
    $rootScope.num = 0;//  $scope.num = 0;不在navs的控制范围下下,不起作用
    //绑定标题栏
    $rootScope.title = '今日一课';
    //还未获取到数据,显示加载数据
    $rootScope.show = true;
    //获取当前时间,格式化时间
    var now = $filter("date")(new Date(),"yyyy-M-d");
    $scope.now = now;
    //向后台发送请求,使用到$http
    $http({
        //不能直接发送给服务器,会产生跨域问题moment.douban.com
        // url:"https://moment.douban.com/api/stream/date/2017-5-11?alt=json&699b0c5ee9c60c6d1ca3&version=6"  
        //解决方法:从后台发送请求
        url:"./model/index.php",//注意路径是根据index.html来的
        params:{time:now}
    }).then(function(result){//success方法已经被淘汰,使用then方法来替代
        console.log(result.data);
        //已经获取到数据,加载到图片隐藏不显示
        $rootScope.show = false;
        $scope.posts = result.data.posts;
    })
}])
.controller("older",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
    // $scope.msg = "控制器获取older的数据";
    $rootScope.num = 1;
    $rootScope.title = '往期内容';
    $rootScope.show = true;
    var now = new Date();
    now.setDate(now.getDate()-1);
    now = $filter("date")(now,"yyyy-M-d");
    $scope.now = now;
    $http({
        url:"./model/older.php",
        params:{time:now}
    }).then(function(result){
        // console.log(result.data);
        $rootScope.show = false;
        $scope.posts = result.data.posts;
    })
}])
/* .controller("author",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
    // $scope.msg = "控制器获取author的数据";
    $rootScope.num = 2;
    $rootScope.title = '热门作者';
    $rootScope.show = true;
    $http({
        url:"./model/author.php"
    }).then(function(result){
        // $rootScope.author = JSON.parse(result.data);
        console.log(result);
        $rootScope.show = false;
      
    })
}]) */
//创建author 控制器
.controller("author",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
    // $scope.msg="热门作者author的数据";
    $rootScope.num=2;
    $rootScope.title="热门作者";
    $http({
      url:"./model/author.php"/* 如果不更改时间,就不传参 */
    }).then(function(result){
      console.log(result.data);
      $rootScope.show=false;
      $scope.authors1=result.data[0].authors;/* 只想要数据中posts数组 */
      //console.log(result.data[0].authors);
     $scope.authors2=result.data[1].authors;/* 只想要数据中posts数组 */
    })
  }])
.controller("category",["$scope","$rootScope",function($scope,$rootScope){
    $rootScope.title = "栏目浏览";
}])
.controller("favourite",["$scope","$rootScope",function($scope,$rootScope){
    $rootScope.title = "我的喜欢";
}])
.controller("settings",["$scope","$rootScope",function($scope,$rootScope){
    $rootScope.title = "设置";
}])