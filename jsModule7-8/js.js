(function(s) {
    var n;
    s(".tabs").on("click", "li:not(.active)", function() {
        n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
    }), s.fn.dmtabs = function(n) {
        s(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq(s(this).index()).show(1, function() {
            s(this).addClass("open_tab")
        }).siblings(".box").hide(1, function() {
            s(this).removeClass("open_tab")
        })
    }
})(jQuery);



$(function firstname() {
	var $toolTips = $('.tooltiptext1');
	var $forms = $('#firstname');
	$forms.hover(function() {
		$toolTips.css('display', 'block');
	}, function(){
		$toolTips.css('display', 'none');
	})
	});

$(function lastname() {
	var $toolTips2 = $('.tooltiptext2');
	var $forms2 = $('#lastname');
	$forms2.hover(function() {
		$toolTips2.css('display', 'block');
	}, function(){
		$toolTips2.css('display', 'none');
	}) 
	});

$(function address() {
	var $toolTips3 = $('.tooltiptext3');
	var $forms3 = $('#address');
	$forms3.hover(function() {
		$toolTips3.css('display', 'block');
	}, function(){
		$toolTips3.css('display', 'none');
	})
	});


var $btn = $('.btn');
 $btn.on('click', function() {
 	$('.tooltiptext1').css('display', 'block');
 	$('.tooltiptext2').css('display', 'block');
 	$('.tooltiptext3').css('display', 'block');
 	});


