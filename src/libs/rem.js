(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;

    // 设置基准fontSize，假设设计稿宽度为768px
    if (clientWidth <= 768) {
      docEl.style.fontSize = (clientWidth / 768) * 100 + 'px';
    } else {
      docEl.style.fontSize = '0px'; // 当宽度超过768px时，保持50px的fontSize
    }
  };
  
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);