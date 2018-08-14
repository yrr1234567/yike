// 创建app应用模块
var yike = angular.module("yike",["ctrls","ngRoute"]);//ctrls模块是自己创建的,来定义各种各样的控制器
// console.log(111);
/* 
    调用run方法:
    该方法的作用是当模块创建好之后就可以直接执行
 */
//该模块依赖的是根作用域,子作用域通常是与控制器绑定的
yike.run(["$rootScope",function($rootScope){
    // alert(111);
    // 给头部的a标签绑定toggle方法,点击a标签整个页面向右或者向左滑动
    $rootScope.left = false;//设置移动,初始值为false表示不移动
    $rootScope.toggle = function(){
        // alert("toggle");
      /*   if($rootScope.left == true){
            $rootScope.left = false
        }else{
            $rootScope.left = true;
        } */
        //取反,移动
        $rootScope.left =  !$rootScope.left; 
        //对导航栏中所有的dd的移动设置
        //1.获取所有的dd
        var dd = document.querySelectorAll('dd');
        // console.log(dd);
        //2.遍历dd,将每一个dd设置位移,当$rootScope.left = true;需要向右移动,false时向左移动
        if($rootScope.left){
            // 使得导航栏向右显示(位移量为0))
            for(var i=0; i<dd.length; i++) {
                dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                dd[i].style.transitionProperty = 'all';
                dd[i].style.transitionDelay = '0.2s';
                dd[i].style.transitionTimingFunction = 'ease-out';
                dd[i].style.transform = 'translate(0)';
            }
        }else{
            // 导航栏向左显示(位移量-100%)
            for(var i=dd.length - 1; i>=0; i--) {
                dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
                dd[i].style.transitionProperty = 'all';
                dd[i].style.transitionDelay = '';
                dd[i].style.transitionTimingFunction = 'ease-out';
                dd[i].style.transform = 'translate(-100%)';
            }
        }

    }
}]);
//修复锚点值的改变
yike.config(["$locationProvider",function($locationProvider){
    $locationProvider.hashPrefix("");
}])
//配置路由
yike.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{
        redirectTo:"/index"//跳转到/index去处理
    }).when("/index",{
        templateUrl:"./views/list.html",//要在ng-view区域显示的视图,以index.html的路径为主
        controller:"index"//调用index控制器
    }).when("/older",{
        templateUrl:"./views/list.html",
        controller:"older"
    }).when("/author",{//???
        templateUrl:"./views/author.html",
        controller:"author"
    }).when("/category",{
        templateUrl:"./views/category.html",
        controller:"category"
    }).when("/favourite",{
        templateUrl:"./views/favourite.html",
        controller:"favourite"
    }).when("/settings",{
        templateUrl:"./views/settings.html",
        controller:"settings"
    })
}])