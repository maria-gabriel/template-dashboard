  var g = new JustGage({
    id: "justgage_one",
    value: 67,
    min: 0,
    max: 100,
    title: "Visitors"
  });


  var g2 = new JustGage({
    id: "justgage_two",
    value: 12,
    min: 0,
    max: 100,
    donut: true,
    gaugeWidthScale: 0.6,
    counter: true,
    hideInnerShadow: true
});


var g3 = new JustGage({
    id: 'justgage_three',
    value: 45,
    min: 0,
    max: 100,
    symbol: '%',
    pointer: true,
    pointerOptions: {
      toplength: -15,
      bottomlength: 10,
      bottomwidth: 12,
      color: '#8e8e93',
      stroke: '#ffffff',
      stroke_width: 3,
      stroke_linecap: 'round'
    },
    gaugeWidthScale: 0.6,
    counter: true,
    onAnimationEnd: function () {
      console.log('animation ended');
      var log = document.getElementById('log');
      log.innerHTML = log.innerHTML + 'Animation just ended.<br/>';
    }
  });


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  document.addEventListener("DOMContentLoaded", function (event) {
  var g4, g5, g6;
  var g4 = new JustGage({
    id: "justgage_four",
    value: getRandomInt(0, 100),
    min: 0,
    max: 100,
    title: "Custom Width",
    label: "",
    gaugeWidthScale: 0.2
  });

  var g5 = new JustGage({
    id: "justgage_five",
    value: getRandomInt(0, 100),
    min: 0,
    max: 100,
    title: "Custom Shadow",
    label: "",
    showInnerShadow: true,
    shadowOpacity: 1,
    shadowSize: 5,
    shadowVerticalOffset: 10
  });

  var g6 = new JustGage({
    id: "justgage_six",
    value: getRandomInt(0, 100),
    min: 0,
    max: 100,
    title: "Hide Labels",
    hideMinMax: true
  });

  setInterval(function () {
    g1.refresh(getRandomInt(0, 100));
    g2.refresh(getRandomInt(0, 100));
    g3.refresh(getRandomInt(0, 100));
    g4.refresh(getRandomInt(0, 100));
    g5.refresh(getRandomInt(0, 100));
    g6.refresh(getRandomInt(0, 100));
  }, 2500);

});