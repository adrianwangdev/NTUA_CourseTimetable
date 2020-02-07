var courseDetail = document.querySelector('.course-detail');
var mouseLine = document.querySelector('.mouse-line');
courseDetail.addEventListener('mousemove', function(e) {
  // get elements height (top)
  var imgH = document.querySelector('img');
  var classH = document.querySelector('.classroom-title');
  var softwareH = document.querySelector('.classroom-title.software');
  var dateH = document.querySelector('.date-title');
  var topH = imgH.offsetHeight + classH.offsetHeight + softwareH.offsetHeight + dateH.offsetHeight;

  e = e || window.e;
  var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  var x = e.pageX - topH || e.clientX + scrollX - topH;
  var y = e.pageY - topH || e.clientY + scrollY - topH;
  mouseLine.style.top = y + 'px';
})