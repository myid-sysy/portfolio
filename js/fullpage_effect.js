$(document).ready(function(){

  $("#fullpage").fullpage({
    verticalCentered: false,
    navigation: true,
    navigationPosition:'right',
    fixedElements: '#header',
    slidesNavigation: true,

    anchors:['1st', '2nd' , '3rd' ,'4th'],
    afterLoad:function(anchorLink, index){
    //   // console.log('anchorLink:' +anchorLink+'index:' +index)
      if(anchorLink == '2nd'){
        $('.chart').easyPieChart({
          barColor: '#086b66',
          trackColor: '#ccc',
          scaleColor: '#fff',
          lineCap: 'butt',
          lineWidth: 30,
          size: 200,
          animate: 1000,
          onStart: $.noop,
          onStop: $.noop
        });
      }
    }
  });

});
