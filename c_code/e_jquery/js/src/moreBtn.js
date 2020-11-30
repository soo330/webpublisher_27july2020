// moreBtn.js

(function($){
  // moreBtn start
  $.ajax({
    url: '../data/random_people.json',
    dataType: 'json',
    context:document.body
  }).done(function(data){
    var people = data;
    // console.log(people.length);
    var i=0;

    var myLen = i; // = 0과 같은내용
    var myViewLen = 4;
    var maxLen = people.length;
    var part = $('.part');
    var partUl = part.find('ul');
    var insertCord = '<li><div class="image"></div><dl><dt>title</dt><dd></dd></dl></li>';
    var more = $('.more_btn')
    var moreBtn = more.children('button');

    var moreFn = function(){
      myLen = i + myViewLen;
      for(; i < myLen ; i+=1){
        if( i >= maxLen ){
          more.remove();
          break
        } //if maxLen
        else{
          partUl.append(insertCord);
        } //else
      } //for
    }; //moreFn (){}
    moreFn();

    // myLen = i + myViewLen; 
    // for( ; i < myLen ; i+=1 ){
    //   partUl.append(insertCord);
    // } //for

  // ----------------------------------------
    moreBtn.on('click', function(e){
      e.preventDefault();
      moreFn();
    }); //moreBtn on

  }); //jQuery end
})(jQuery);
