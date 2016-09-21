(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
// end carousel

// select-box start

$(document).ready(function() {
                $('#basic-usage-demo').fancySelect();
                // Boilerplate
                var repoName = 'fancyselect'
                $.get('https://api.github.com/repos/octopuscreative/' + repoName, function(repo) {
                    var el = $('#top').find('.repo');
                    el.find('.stars').text(repo.watchers_count);
                    el.find('.forks').text(repo.forks_count);
                });
                var menu = $('#top').find('menu');
                function positionMenuArrow() {
                    var current = menu.find('.current');
                    menu.find('.arrow').css('left', current.offset() + (current.outerWidth() / 2));
                }
                $(window).on('resize', positionMenuArrow);
                menu.on('click', 'a', function(e) {
                    var el = $(this),
                        href = el.attr('href'),
                        currentSection = $('#main').find('.current');
                    e.preventDefault();
                    menu.find('.current').removeClass('current');
                    el.addClass('current');
                    positionMenuArrow();
                    if (currentSection.length) {
                        currentSection.fadeOut(300).promise().done(function() {
                            $(href).addClass('current').fadeIn(300);
                        });
                    } else {
                        $(href).addClass('current').fadeIn(300);
                    }
                });
                menu.find('a:first').trigger('click')
            });

// selectbox end


// nav head menu
