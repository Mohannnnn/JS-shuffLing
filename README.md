# JS-shuffLing
JS+ES6写的轮播插件

使用方法：


    let moveEle = document.querySelector('.oUlplay'),
        moveEleChildren = moveEle.querySelectorAll('li'),
        oPre = document.getElementsByClassName('pre')[0],
        oNext = document.getElementsByClassName('next')[0],
        minEle = document.getElementsByClassName('samllTitle')[0].getElementsByTagName('li'),
        autoPlayTime = 2000,
        speedNum = 8,
        attrJson = {
        left : -500
    };
    
    let json = {
        moveEle : moveEle,
        moveEleChildren : moveEleChildren,
        speedNum : speedNum,
        autoPlayTime : autoPlayTime,
        attrJson : attrJson,
        oPre : oPre,
        oNext :  oNext,
        minEle : minEle,
    }

    shuffLing(json);
    
说明：

    moveEle : 为运动的DOM元素（这里为ul）
    moveEleChildren ：为运动元素的所有子元素，是一个数组（这里为li）
    speedNum : 运动的速度
    autoPlayTime ： 切换图片的时间间隔
    attrJson : 运动的属性，为一个对象 例如： {
                                  left : -500
                               }
     oPre : 向左滑动的DOM按钮
     oNext : 向右滑动的DOM按钮
     minEle : 下面的DOM小圆点
                        

