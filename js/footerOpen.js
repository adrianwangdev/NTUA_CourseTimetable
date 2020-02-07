var bodyWidth = document.body.offsetWidth;
if (bodyWidth <= 768) {
  var footer = document.querySelector('.icon-desc');
  var softwareHelp = document.querySelector('.softwareHelp');
  var closeFooterBtn = document.querySelector('.close-btn');
  function footerInit() {
    footer.style.bottom = 0 - 32 - footer.offsetHeight + 'px';
  }
  closeFooterBtn.addEventListener('click', function () {
    footerInit();
  })
  softwareHelp.addEventListener('click', function () {
    footer.style.bottom = 0;
  })
  footerInit();
}