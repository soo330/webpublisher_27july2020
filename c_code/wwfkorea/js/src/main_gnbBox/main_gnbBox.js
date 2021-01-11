// main_gnbBox.js
(function($){
  // main_gnbBox start

  $.ajax({
    url : '../data/main_navBox.json',
    dataType : 'json',
    context : document.body
  }).done(function(data){

    // console.log('!!!')
    var navBox = data;
    
    var navList = '<li><dl><dt></dt><dd></dd></dl></li>';

    // var menuWrap = $('.show_menu_wrap');
    var gnb = $('.gnb');
    var gnbHide = $('.hide');
    var navLen = navBox.length;

    // gnb.append(navList)

    var i=0, j;
    var subNavLen, navDt, navDd, tNav, sNav, subNav, tLink, sLink;
    
    for( ; i < navLen ; i++ ){
      gnb.append(navList);
      navDt = gnb.children('li').eq(i).find('dt');
      navDd = gnb.children('li').eq(i).find('dd');

      tNav = navBox[i].titleNav;
      tLink = tNav.tlink;
      subNav = navBox[i].subNav;
      sLink = subNav.slink;


      navDt.append('<a href="' + tLink +'">' +tNav.tname + '</a>');
      
      subNavLen = subNav.length; 
      // console.log(subNavLen)
      
      for( j=0 ; j < subNavLen ; j++ ){
        sNav = navBox[i].subNav[j];
        navDd.append('<a href="'+ tLink+'">'+ sNav.sname + '</a>');

      } //for

    } // for

    var menuDt = gnb.find('dt');
    var menuDtLink = menuDt.find('a');
    var menuDd = gnb.find('dd');
    var menuDdLink = menuDd.find('a');

    menuDd.hide();

    gnb.on('mouseenter', function(){
      menuDd.show();
    });

    gnb.on('mouseleave', function(){
      menuDd.hide();
    });


  }) //done
  
  //jQuery ends
})(jQuery)