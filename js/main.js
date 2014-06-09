var Gae = {};
Gae.Ui = (function() {

    var imageList = [
    	{ src: 'images/01.jpg' }, 
    	{ src: 'images/02.jpg' },
    	{ src: 'images/03.jpg' },
    	{ src: 'images/04.jpg' },
    	{ src: 'images/05.jpg' },
    	{ src: 'images/06.jpg' },
    	{ src: 'images/07.jpg' },
    	{ src: 'images/08.jpg' }
    ];

    function init() {
        setupSlider(imageList);
    }

    function setupSlider(imageList) {
        $.vegas('slideshow', {
            backgrounds: imageList
        })();
    }

    return {
        init: init
    }
}());

$(function() {
    Gae.Ui.init();
});