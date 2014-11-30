function loadCSS( href ){
  var ss = window.document.createElement('link'),
  ref = window.document.getElementsByTagName('head')[0];

  ss.rel = 'stylesheet';
  ss.href = href;

  ss.media = 'only x';

  ref.parentNode.insertBefore(ss, ref);

  setTimeout( function(){
    // set media back to `all` so that the stylesheet applies once it loads
    ss.media = 'all';
  },0);

}
loadCSS('assets/css/global.min.css');
