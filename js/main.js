var Gae = {};
Gae.Ui = (function() {

    var slider = [
    	{ src: 'images/slider/01.jpg' }, 
    	{ src: 'images/slider/02.jpg' },
    	{ src: 'images/slider/03.jpg' },
    	{ src: 'images/slider/04.jpg' },
    	{ src: 'images/slider/05.jpg' }
    ];

    var links = [
        'openday-viso-fotoringiovanimento.html',
        'openday-viso-micropigmentazione.html',
        'openday-corpo.html',
        'linea-gold.html',
        'linea-diamante.html'
    ];

    function init(imageList) {
        var setup = (imageList.length > 1) ? setupSlider(imageList) : setupBackground(imageList);
        secondLevelMenu();
    }

    function setupSlider(imageList) {
        $.vegas('slideshow', {
            backgrounds: imageList
        })();
        $('body').bind('vegaswalk',
            function(e, bg, step) {
                $('a.more').attr('href', links[step]);
            }
        );
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