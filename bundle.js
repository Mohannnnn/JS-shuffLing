/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(false) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(true, function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot apply update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
						window.location.reload();
					} else {
						console.warn("[HMR] Update failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}

				if(!upToDate()) {
					check();
				}

				require("./log-apply-result")(updatedModules, updatedModules);

				if(upToDate()) {
					console.log("[HMR] App is up to date.");
				}

			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//console.log(`The ${animal}`)
	//moveEle = json.moveEle,//运动的目标元素
	//    moveEleChildren = json.moveEleChildren,//运动元素的所有子元素（数组）
	//    speedNum = json.speedNum,//运动的速度的基数
	//    autoPlayTime = json.autoPlayTime,//自动切换的时间
	//    attrJson = json.attrJson,//运动时运动的属性及到目的地的距离
	//    oPre = json.oPre,//左边的点击按钮元素
	//    oNext = json.oNext,//右边的点击按钮元素
	//    minEle = json.minEle,//下面的小元素
	//    nowIndex = 0;

	var moveEle = document.querySelector('.oUlplay'),
	    moveEleChildren = moveEle.querySelectorAll('li'),
	    oPre = document.getElementsByClassName('pre')[0],
	    oNext = document.getElementsByClassName('next')[0],
	    minEle = document.getElementsByClassName('samllTitle')[0].getElementsByTagName('li'),
	    speedNum = 25,
	    attrJson = {
	    left: 500
	}; /**
	    * Created by 14-7447 on 2016/9/26.
	    */

	var json = {
	    moveEle: moveEle,
	    moveEleChildren: moveEleChildren,
	    speedNum: speedNum,
	    autoPlayTime: 2000,
	    attrJson: attrJson,
	    oPre: oPre,
	    oNext: oNext,
	    minEle: minEle
	};
	(0, _index2.default)(json);

	//startMove(moveEle , attrJson ,speedNum);
	//
	//function startMove (moveEle , attrJson , speedNum) {
	//    let isStop = true;
	//    clearInterval(moveEle.timer);
	//
	//    moveEle.timer = setInterval(function () {
	//        for (let attr in attrJson) {
	//            //获取到目的地的值
	//            let offset = attrJson[attr];
	//            console.log(offset);
	//            //计算当前的位置
	//            let curAttr = getStyle(moveEle,attr);
	//            console.log(curAttr);
	//            //计算速度
	//            let speed = (offset - curAttr)/speedNum;
	//            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	//
	//            if(offset != curAttr) {
	//                isStop = false;
	//            }
	//
	//            if (attr == 'opacity') {
	//                moveEle.style.filter = 'alpha(opacity:'+(curAttr+speed)+')';
	//                moveEle.style.opacity = (curAttr+speed)/100;
	//            } else {
	//                moveEle.style[attr] = curAttr + speed + 'px';
	//            }
	//
	//            //当所有值到达目的地时设置为 true
	//            if(isStop){
	//                clearInterval(moveEle.timer);
	//            }
	//        }
	//    }, 30)
	//}
	//
	//function getStyle (moveEle , name) {
	//
	//    let result = null;
	//    result = moveEle.currentStyle ? moveEle.currentStyle[name] : getComputedStyle(moveEle , false)[name];
	//    console.log(result);
	//    if(name == "opacity"){
	//        return parseInt(parseFloat(result)*100);
	//    }
	//    return parseInt(result);
	//
	//}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (json) {

	    var moveEle = json.moveEle,
	        //运动的目标元素
	    moveEleChildren = json.moveEleChildren,
	        //运动元素的所有子元素（数组）
	    speedNum = json.speedNum,
	        //运动的速度的基数
	    autoPlayTime = json.autoPlayTime,
	        //自动切换的时间
	    attrJson = json.attrJson,
	        //运动时运动的属性及到目的地的距离
	    oPre = json.oPre,
	        //左边的点击按钮元素
	    oNext = json.oNext,
	        //右边的点击按钮元素
	    minEle = json.minEle,
	        //下面的小元素
	    nowIndex = 0;

	    /*
	    *获取总共的图片数
	    * */

	    /*
	    * 获取样式函数
	    * */
	    function getStyle(moveEle, name) {

	        var result = null;
	        result = moveEle.currentStyle ? moveEle.currentStyle[name] : getComputedStyle(moveEle, false)[name];

	        if (name == "opacity") {
	            return parseInt(parseFloat(result) * 100);
	        }
	        return parseInt(result);
	    }

	    /*
	    * 获取类名节点的函数
	    * */
	    function getClassNode(oParent, cName) {
	        var allNode = oParent.getElementsByTagName('*'),
	            nodeArray = [],
	            i = void 0;

	        for (i = 0; i < allNode.length; i++) {
	            if (allNode[i].className == cName) {
	                nodeArray.push(allNode[i]);
	            }
	        }

	        return nodeArray;
	    }
	    /*
	    * 运动函数
	    * */
	    function startMove(moveEle, attrJson, speedNum) {
	        var isStop = true;
	        clearInterval(moveEle.timer);

	        moveEle.timer = setInterval(function () {
	            for (var attr in attrJson) {
	                //获取到目的地的值
	                var offset = attrJson[attr]; //400
	                //计算当前的位置
	                var curAttr = getStyle(moveEle, attr); //0


	                //计算速度
	                var speed = (offset - curAttr) / speedNum;
	                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

	                if (offset != curAttr) {
	                    isStop = false;
	                }

	                if (attr == 'opacity') {
	                    moveEle.style.filter = 'alpha(opacity:' + (curAttr + speed) + ')';
	                    moveEle.style.opacity = (curAttr + speed) / 100;
	                } else {
	                    moveEle.style[attr] = curAttr + speed + 'px';
	                }
	                //当所有值到达目的地时设置为 true
	                if (isStop) {
	                    clearInterval(moveEle.timer);
	                }
	            }
	        }, 30);
	    }

	    /*
	    *自动切换函数
	    * */
	    function autoPlay(moveEle, autoPlayTime) {
	        setTimeout(function () {
	            if (nowIndex == moveEleChildren.length - 1) {
	                nowIndex = 0;
	                console.log(nowIndex);
	            } else {
	                nowIndex++;
	                console.log(nowIndex);
	            }

	            startMove(moveEle, attrJson, speedNum);
	        }, autoPlayTime);
	    }

	    var iTimer = setTimeout(function () {
	        autoPlay(moveEle, autoPlayTime);
	    }, 2500);

	    oPre.onclick = function (e) {
	        if (nowIndex > 0) {
	            startMove(moveEle, attrJson, speedNum);
	            nowIndex--;
	        } else {
	            nowIndex = moveEleChildren.length - 1;
	            startMove(moveEle, attrJson, speedNum);
	        }
	    };

	    oNext.onclick = function (e) {
	        if (nowIndex < moveEleChildren.length - 1) {
	            startMove(moveEle, attrJson, speedNum);
	            nowIndex++;
	        } else {
	            startMove(moveEle, attrJson, speedNum);
	            nowIndex = 0;
	        }
	    };
	    oPre.onmouseover = oNext.onmouseover = function (e) {
	        clearInterval(iTimer);
	    };
	    oPre.onmouseout = oNext.onmouseout = function (e) {
	        iTimer = setInterval(function () {
	            autoPlay(moveEle, autoPlayTime);
	        }, 2500);
	    };
	};

/***/ }
/******/ ]);