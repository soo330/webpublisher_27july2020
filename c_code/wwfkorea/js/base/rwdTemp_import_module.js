// rwdTemp_import_module.js

(function($){
  var nowW = deviceSize();
  // console.log(nowW);

  var deviceType = ['mobile', 'tablet', 'laptop','pc','pcfull'];
  // -----------------------------------------------
  var url = './rwdTemp/';
  var body = $('body');
  var headBox= $('#headBox');
  var viewBox= $('#viewBox');
  // -----------------------------------------------
  //viewBox import file
  var viewImport = function(){
    viewBox.append('<script src="../js/src/temp_mobile.js></script>');
  }
  // -----------------------------------------------

  console.log(nowW);
  if(nowW === deviceType[0] || nowW === deviceType[1]){
    body.append('<script src="../js/src/main_viewbox_slide_mobile.js"></script>');
  }else{
    body.append('<script src="../js/src/main_viewbox_slide.js"></script>');
  }

  

  // if(nowW === deviceType[0]){
  //   headBox.load( url + 'rwdTemp_headBox_mobile.html', function(){

  //   })
  //   viewBox.load(url+ 'rwdTemp_mobile.html', function(){
  //     $(this).append('<script src="../js/src/temp_mobile.js></script>');
  //   });
  // } //if
  // else if( nowW === deviceType[1]){
  //   headBox.load( url + 'rwdTemp_headBox_mobile.html')
  //   viewBox.load(url+ 'rwdTemp_mobile.html', viewImport );
  // } //else if
  // else{
  //   headBox.load( url + 'rwdTemp_headBox_mobile.html')
  //   viewBox.load(url+ 'rwdTemp_mobile.html', viewImport );
  // } //else

  
  //jQuery end
})(jQuery);
