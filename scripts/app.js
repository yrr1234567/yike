// 创建app应用模块
var yike = angular.module("yike",[]);
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
            // 导航栏向右显示(位移量为0))
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