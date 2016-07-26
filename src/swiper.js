(function () {
	'use strict';
	var $;

	var Swiper = function (container, params) {
		if (!(this instanceof Swiper)) return new Swiper(container,params);

		var defaults = {
			direction: 'horizontal', //vertical:垂直
			touchEventsTarget: 'container',
			effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
			flip: {
                slideShadows : true,
                limitRotation: true
            },
            slideClass: 'swiper-slide',
            slidePrevClass: 'swiper-slide-prev',
            slideActiveClass: 'swiper-slide-active',
            slideNextClass: 'swiper-slide-next'
		};

		//传入参数处理
		params = params || {};
		var originalParams = {};
		for (var param in params) {
			if (typeof params[param] === 'object' && params[param] !== null ) {
					originalParams[param] = {};
				for (var deepParam in params[param]) {
					originalParams[param][deepParam] = params[param][deepParam];
				}
			}else {
				originalParams[param] = params[param];
			}
		}
		for (var def in defaults) {
			if (typeof params[def] === 'undefined') {
				params[def] = defaults[def];
			}else if (typeof params[def] === 'object') {
				for (var deepDef in defaults[def]) {
					if (typeof params[def][deepDef] === 'undefined') {
						params[def][deepDef] = defaults[def][deepDef];
					}
				}
			}
		}

		var s = this;

		s.params = params;
		s.originalParams = originalParams;
		s.classNames = [];

		/*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ === 'undefined' && typeof Dom7 !=='undefined') {
        	$ = Dom7;
        }
        if (typeof $ === 'undefined') {
        	if (typeof Dom7 === 'undefined') {
        		$ = window.Dom7 || window.Zepto || window.JQuery;
        	}else {
        		$ = Dom7;
        	}
        	if (!$) return;
        }

        s.$ = $;

        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/

        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1 ) {
        	var swipers = [];
        	s.container.each(function () {
        		swipers.push(new Swiper(this,params));
        	});
        	return swipers;
        }

		s.container[0].swiper = s;
		// console.log(s.container[0].swiper)
        s.container.data('swiper', s);   
        s.classNames.push('swiper-container-' + s.params.direction);  
        
        //is  horizontal
		s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };

        //左滑
        s.slideLeft = function () {
        	// body...
        };
        //右滑
        s.slideRight = function () {
        	// body...
        };
        //
		s.slide = function () {
			
		};

		return s;

	};

	window.Swiper = Swiper;
})();