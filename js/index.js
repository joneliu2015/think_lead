$(document).ready(function() {

//左侧菜单1的fullpage特效
    $('#fullpage').fullpage({
        verticalCentered: false,
        css3:false,
    });

//左侧菜单栏控制右侧显示隐藏
    var isHover=false;
    $('.list').mouseover(function () {
        var index=$(this).index();
        if(isHover=true){

            $('.list').eq(index-1).addClass('activeColor').siblings().removeClass('activeColor');
            $('.c1').eq(index-1).show().siblings('.c1').hide();
            $.fn.fullpage.moveTo(1,0);
        }else{
        }
    });

    //swiper插件
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        grabCursor : true,
        autoHeight: true,
         widht:500,
        loop: true,
        autoplay : 3000,
        slidesPerView: 2,
        centeredSlides: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })
});

$('#container').XSwitch({
    selectors: {
        sections: '.sections', //容器类名
        section: '.sec', //子容器类名，即每个单页
        page: '.pages', //slider类名 插件会生成一个ul侧边栏
        active: '.active' //被选中的slider下li的类名
    },
    index: 0,  //起始页下标
    easing: 'ease',  //动画类型，支持transition所有类型
    duration: 500,  //动画执行时间 单位毫秒
    loop: false, //是否支持循环滑动
    pagination: true, //是否分页
    keyboard: true, //是否支持键盘滚动事件
    direction: 'vertical', //滑动方向 默认为垂直 设置为 horizontal 将水平滑动
    callback: '' //滑动完成后的回调函数
});

//左侧菜单4的fullpage特效
