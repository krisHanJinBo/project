(function(window){var svgSprite='<svg><symbol id="icon-caigou-xianxing" viewBox="0 0 1024 1024"><path d="M821.6 256l-78.4 256H342.4L272 256h549.6M216 64H64v64h104.8l18.4 64 100 361.6c1.6 4.8 4 8.8 7.2 12l-52 83.2c-6.4 5.6-10.4 14.4-10.4 23.2 0 17.6 14.4 32 32 32h568v-64H323.2l40-64H768c13.6 0 24.8-8.8 29.6-22.4l97.6-318.4c6.4-20.8-8-43.2-29.6-43.2H252.8l-18.4-64L216 64z"  ></path><path d="M320 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M768 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path></symbol><symbol id="icon-xihuan-xianxing" viewBox="0 0 1024 1024"><path d="M700 192c92.8 0 166.4 72.8 166.4 166.4 0 129.6-133.6 251.2-336.8 435.2l-17.6 16-17.6-16C291.2 609.6 157.6 488 157.6 358.4c0-92.8 72.8-166.4 166.4-166.4 52.8 0 104.8 24 140 64.8l48.8 56.8 48.8-56.8c33.6-40 86.4-64.8 138.4-64.8m0-64c-72.8 0-142.4 33.6-188 87.2C466.4 162.4 396.8 128 324 128c-128.8 0-230.4 100.8-230.4 230.4 0 157.6 142.4 287.2 357.6 482.4L512 896l60.8-55.2c215.2-196 357.6-324.8 357.6-482.4 0-128.8-100.8-230.4-230.4-230.4z"  ></path></symbol><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M500 128.8c-95.2 5.6-173.6 83.2-180 178.4-7.2 112 80.8 205.6 191.2 205.6 106.4 0 192-86.4 192-192 0.8-110.4-92-198.4-203.2-192zM512 575.2c-128 0-383.2 64-383.2 192v96c0 17.6 14.4 32 32 32h702.4c17.6 0 32-14.4 32-32V766.4c0-127.2-255.2-191.2-383.2-191.2z"  ></path></symbol><symbol id="icon-biaotou-zhengxu" viewBox="0 0 1024 1024"><path d="M256 640l256-256 256 256z"  ></path></symbol><symbol id="icon-weizhi-xianxing" viewBox="0 0 1024 1024"><path d="M512 128c169.6 0 308 138.4 308 308 0 81.6-31.2 158.4-88.8 216l-4.8 4L512 869.6 298.4 656.8l-4.8-4.8c-57.6-57.6-88.8-134.4-88.8-216C204 266.4 342.4 128 512 128m0-64C306.4 64 140 230.4 140 436c0 101.6 40.8 194.4 107.2 261.6L512 960l264-263.2c66.4-67.2 107.2-159.2 107.2-261.6C884 230.4 717.6 64 512 64z m0 192c73.6 0 132.8 62.4 128 137.6-4.8 63.2-55.2 113.6-118.4 118.4-74.4 5.6-137.6-53.6-137.6-128 0-70.4 57.6-128 128-128"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)