remark.create({
  navigation: { scroll: false, click: false },
  highlightLines: true,
  highlightStyle: 'github',
  slideNumberFormat: function (current, total) {
    var percentComplete = Math.round(current / total * 100);
    return "<div id='progress'><div id='progress-bar' style='width:" + percentComplete + "%'></div></div>";
  },
  countIncrementalSlides: false
});
