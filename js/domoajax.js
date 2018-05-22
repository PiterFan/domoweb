document.addEventListener("DOMContentLoaded", function() {
  if (!('webkitClipPath' in document.body.style)) {
    alert('Sorry, this demo is available just with webkitClipPath. Try with Chrome/Safari.');
  }
	Barba.Pjax.start();
	var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    require(['']);
  }
});
});
