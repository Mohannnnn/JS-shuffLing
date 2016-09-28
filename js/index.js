/**
 * Created by 14-7447 on 2016/9/26.
 * */

export default function (json) {

    let moveEle = json.moveEle,//运动的目标元素
        moveEleChildren = json.moveEleChildren,//运动元素的所有子元素（数组）
        speedNum = json.speedNum,//运动的速度的基数
        autoPlayTime = json.autoPlayTime,//自动切换的时间
        attrJson = json.attrJson,//运动时运动的属性及到目的地的距离
        oPre = json.oPre,//左边的点击按钮元素
        oNext = json.oNext,//右边的点击按钮元素
        minEle = json.minEle,//下面的小元素
        nowIndex = 0;//设置初始开始的位置为0

    /*
     * 获取样式函数
     * */
    function getStyle (moveEle , name) {

        let result = null;
        result = moveEle.currentStyle ? moveEle.currentStyle[name] : getComputedStyle(moveEle , false)[name];

        if(name == "opacity"){
            return parseInt(parseFloat(result)*100);
        }
        return parseInt(result);
    }

    /*
     * 运动函数
     * */
    function startMove (moveEle , attrJson , speedNum) {
        let isStop = true;
        clearInterval(moveEle.timer);

        moveEle.timer = setInterval(function () {
            for (let attr in attrJson) {
                //获取到目的地的值
                let offset = attrJson[attr];//-500

                //计算当前的位置
                let curAttr = getStyle(moveEle,attr);//0

                //计算速度
                let speed = (offset - curAttr)/speedNum;

                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                if(offset != curAttr) {
                    isStop = false;
                }

                if (attr == 'opacity') {
                    moveEle.style.filter = 'alpha(opacity:'+(curAttr+speed)+')';
                    moveEle.style.opacity = (curAttr+speed)/100;
                } else {
                    moveEle.style[attr] = curAttr + speed + 'px';
                }
                //当所有值到达目的地时设置为 true
                if(isStop){
                    clearInterval(moveEle.timer);
                }
            }
        }, 30)
    }

    /*
     *自动切换函数
     * */
    function autoPlay (moveEle , autoPlayTime) {
        setTimeout(function () {
            if (nowIndex == moveEleChildren.length - 1) {
                nowIndex = 0;
            } else {
                nowIndex ++;
            }
            startMove(moveEle , getNewAttrJson() , speedNum);
            minEleMove(minEle);

        } , autoPlayTime)

    }

    //获取运动距离
    function getNewAttrJson () {
        return {
            left : attrJson.left*(nowIndex)
        }
    }

    let iTimer = setInterval(function () {autoPlay(moveEle , autoPlayTime)} , autoPlayTime);

    //所有的事件
    function allEvent () {
        oPre.addEventListener('click' , function (e) {
            if (nowIndex > 0 ) {
                nowIndex --;
                startMove(moveEle , getNewAttrJson() , speedNum);
                minEleMove(minEle);
            } else {
                nowIndex = moveEleChildren.length - 1;
                startMove(moveEle , getNewAttrJson() , speedNum);
                minEleMove(minEle);
            }
        } , false);

        oNext.addEventListener('click' , function (e) {
            if (nowIndex < moveEleChildren.length -1) {
                nowIndex ++;
                startMove(moveEle , getNewAttrJson() ,speedNum);
                minEleMove(minEle);
            } else {
                nowIndex = 0;
                startMove(moveEle , getNewAttrJson() ,speedNum);
                minEleMove(minEle);
            }
        } ,false)

        oPre.onmouseover = oNext.onmouseover = moveEle.onmouseover = function (e) {
            clearInterval(iTimer);
        }
        oPre.onmouseout = oNext.onmouseout = moveEle.onmouseout = function (e) {
            iTimer = setInterval(function () {autoPlay(moveEle , autoPlayTime)} , autoPlayTime);
        }
    }


    //小图标随大图运动函数
    function  minEleMove (minEle) {
        for (let i = 0 ; i < minEle.length ; i++) {
            minEle[i].className = '';
        }
        minEle[nowIndex].className = 'thisTitle';
    }

    //小图标点击
    function minEleClickMove (minEle) {
        for (let i = 0 ; i < minEle.length ; i++) {
            minEle[i].index = i;
            minEle[i].addEventListener('click', function (e) {
                nowIndex = i;
                startMove(moveEle, getNewAttrJson(), speedNum);
                minEleMove(minEle);
            }, false)
        }
    }

    allEvent();
    minEleClickMove(minEle);

}







