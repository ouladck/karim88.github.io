(function($) {
  var chart;
  $('.intro').mousemove((function(_this) {
    return function(event) {
      var containerHeight, containerWidth, mousePositionX, mousePositionY;
      containerWidth = $('.intro').innerWidth();
      containerHeight = $('.intro').innerHeight();
      mousePositionX = (event.pageX / containerWidth) * 100;
      mousePositionY = (event.pageY / containerHeight) * 100;
      return $('.intro').animate({
        backgroundPosition: mousePositionX + '% ' + mousePositionY + '%'
      }, 2000);
    };
  })(this));
  $('#da-slider').cslider({
    current: 0,
    bgincrement: 50,
    autoplay: false,
    interval: 4000
  });
  new WOW().init();
  return chart = AmCharts.makeChart("chartdiv", {
    "type": "radar",
    "theme": "",
    "dataProvider": [
      {
        "skill": "Python",
        "level": 85
      }, {
        "skill": "PHP7",
        "level": 92
      }, {
        "skill": "HTML5",
        "level": 87
      }, {
        "skill": "AngularJS",
        "level": 60
      }, {
        "skill": "Ruby",
        "level": 70
      }, {
        "skill": "BASH",
        "level": 47
      }
    ],
    "valueAxes": [
      {
        "axisTitleOffset": 10,
        "minimum": 0,
        "axisAlpha": 0.15
      }
    ],
    "startDuration": 2,
    "graphs": [
      {
        "balloonText": "My level in [[value]]",
        "bullet": "round",
        "lineThickness": 3,
        "valueField": "level"
      }
    ],
    "categoryField": "skill",
    "export": {
      "enabled": false
    }
  });
})(jQuery);
