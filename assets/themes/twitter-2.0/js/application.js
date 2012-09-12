(function() {
  $('table').addClass('table table-striped table-bordered table-hover');
  $('pre').addClass('prettyprint');
  prettyPrint();
  var titles = $('.content').find('.span8').first().find('h1,h2,h3,h4,h5,h6');
  if (titles.size() > 1) {
    var wrap = $('<div class="bs-docs-sidebar">');
    wrap.appendTo('#sideBar');
    var ul = $('<ul id="content_guide" class="nav nav-list bs-docs-sidenav"></ul>');
    ul.appendTo(wrap);
    var start = 3;
    var icons = ['th-large', 'th', 'th-list', 'list'];
    titles.each(function(i, e) {
      e.setAttribute('id', 't_' + i);
      var leave = parseInt(e.tagName.toUpperCase().replace('H', '')) - start;
      ul.append('<li' + ' style="text-indent:' + (leave * 10) + 'px"><a href="#' + e.getAttribute('id') + '"><i class="icon-chevron-right"></i> ' + e.innerHTML + '</a></li>');
    });
    $('#content_guide').affix({
      offset: 300
    });
  }
})();