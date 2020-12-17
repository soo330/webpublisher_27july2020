(function($){

  var headBox = $('#headBox');
  var pcMenu = $('.gnb');

  var MmenuArea = headBox.find('.menu_area');
  var MmenuAreaUl = MmenuArea.find('ul');
  var nowW = deviceSize();

  var deviceType = ['mobile', 'tablet', 'laptop','pc','pcfull'];
  // var url = './rwdTemp/';
  // var body = $('body');
 

  var mobileImport = function(){
    headBox.load('./headBox/wwf_mobile_to_tablet_headBox.html');
  }

  var pcImport = function(){
    headBox.load('./headBox/wwf_pc_headBox.html');
  }

  

  // console.log(nowW);
  if( nowW === deviceType[0]){
    mobileImport();
  }else if(nowW === deviceType[1]){
    mobileImport();
  }else{
    pcImport();
  }

})(jQuery);