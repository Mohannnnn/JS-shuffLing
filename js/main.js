/**
 * Created by 14-7447 on 2016/9/26.
 */

import shuffLing from './index'

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
