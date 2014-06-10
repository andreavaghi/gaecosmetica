var Gae = {};
Gae.Ui = (function() {

    var slider = [
    	{ src: 'images/slider/01.jpg' }, 
    	{ src: 'images/slider/02.jpg' },
    	{ src: 'images/slider/03.jpg' },
    	{ src: 'images/slider/04.jpg' },
    	{ src: 'images/slider/05.jpg' }
    ];

    function init(imageList) {
        var setup = (imageList.length > 1) ? setupSlider(imageList) : setupBackground(imageList);
        secondLevelMenu();
    }

    function setupSlider(imageList) {
        $.vegas('slideshow', {
            backgrounds: imageList
        })();
    }

    function setupBackground(imageList) {
        $.vegas({
            src: imageList[0]
        });
    }

    function secondLevelMenu() {
        $('a.second-level').off('click').on('click', function(e) {
            e.preventDefault();
            var section = $(this).attr('data-section');
            $('nav.second-level').slideDown(500, function(){
                $(this).find('ul').hide();
                $(this).find('ul.' + section).show();
            });
        });
    }

    return {
        slider: slider,
        init: init
    }
}());