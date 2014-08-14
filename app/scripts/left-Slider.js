'use strict';

(function($) {

  var

  defaultOptions = {
    timeout: 8000,
    doTimeout: false,
    animationTime: 400,
    current: 0,
    paddingLeft: 0,

    timing: 'swing',
    slideObjs: '.slide_obj',
    box: '.slide_box',
    paginatorActive: 'active',
    slider: '.slider',
    centerIfHasLittle: true,
    rightIfHasLittle: false,
    hidePaginatorIfHasLittle: true,
    callbackIfHasLittle: function() {},

    paginator: null,
    prevPaginator: null,
    nextPaginator: null
  },

    toString = Object.prototype.toString;


  function ResponsiveManySlider(father, options) {
    var
    that = this,
      opt;

    opt = $.extend({}, defaultOptions, options);

    this.opt = opt;


    this.timeout = opt.timeout;
    this.doTimeout = opt.doTimeout;
    this.centerIfHasLittle = opt.centerIfHasLittle;
    this.rightIfHasLittle = opt.rightIfHasLittle;
    this.callbackIfHasLittle = opt.callbackIfHasLittle;
    this.father = $(father);
    this.box = this.father.find(opt.box);
    this.timing = this.father.find(opt.timing);
    this.minMargin = parseInt(opt.minMargin);
    this.current = parseInt(opt.current);
    this.paginatorActive = opt.paginatorActive;
    this.slider = this.father.find(opt.slider);
    this.animationTime = parseInt(opt.animationTime);
    this.paddingLeft = parseInt(opt.paddingLeft);
    this.slideObjs = this.father.find(opt.slide);
    this.childCount = this.slideObjs.length;

    this.init();

    return this;
  }

  ResponsiveManySlider.prototype = {
    init: function() {
      var that = this;

      this.box.css({
        position: 'relative'
      });

      this.appendListeners();

      this.resizer();
      $(window).resize(function() {
        that.resizer();
      });

      this.slideObjs.length > 1 && this.remakeTimeout();

      this.slider.css('position', 'relative');

      this.changePaginator(this.current);

    },
    appendListeners: function() {
      // testa se tem paginator
      var opt = this.opt,
        that = this;

      if (toString.call(opt.paginator) === '[object String]' && opt.paginator !== '') {
        this.paginator = this.father.find(opt.paginator);
        this.hasPaginator = this.paginator.length > 0;

        this.paginator.each(function(index) {

          $(this).attr('data-index', index);

        }).click(function(e) {

          if (e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
          }

          that.set(parseInt($(this).attr('data-index')));

          return false;
        });

      } else {
        this.hasPaginator = false;
      }

      // testa se tem prev and next
      if (toString.call(opt.prevPaginator) === '[object String]' && opt.prevPaginator !== '') {
        this.prevPaginator = this.father.find(opt.prevPaginator);
        this.hasPrevPaginator = this.prevPaginator.length > 0;

        this.prevPaginator.click(function(e) {
          if (e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
          }

          that.prev();

          return false;
        });
      } else {
        this.hasPrevPaginator = false;
      }

      if (toString.call(opt.nextPaginator) === '[object String]' && opt.nextPaginator !== '') {
        this.nextPaginator = this.father.find(opt.nextPaginator);
        this.hasNextPaginator = this.nextPaginator.length > 0;

        this.nextPaginator.click(function(e) {
          if (e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
          }

          that.next();

          return false;
        });
      } else {
        this.hasNextPaginator = false;
      }
    },
    resizer: function() {
      this.boxWidth = this.box[0].offsetWidth;
      this.paginate();
      this.animate();

    },
    paginate: function() {
      var
      paginator = this.paginator,
        AUXpaginatorLengthArray = [],
        AUXpertencToPag,
        AUXslideObj,
        boxWidth = this.boxWidth,
        slideObjs = this.slideObjs,
        prevPaginator = this.prevPaginator,
        nextPaginator = this.nextPaginator,
        lastTileLeft = 0,
        paginatorLength = 0;

      for (var i = 0, k = slideObjs.length; i < k; i++) {
        AUXslideObj = slideObjs[i];

        if (AUXslideObj.offsetLeft + AUXslideObj.offsetWidth - lastTileLeft > boxWidth) {
          paginatorLength++;
          lastTileLeft = AUXslideObj.offsetLeft;
        }
      }

      paginatorLength++;

      if (paginator !== undefined) {
        paginator.parent().hide();

        for (i = 0; i < paginatorLength; i++) {
          paginator.eq(i).parent().show();
        }
      }

      this.paginatorLength = paginatorLength;

      if (paginatorLength <= 1) {
        if (paginator !== undefined) {
          paginator.fadeOut(500);
        }
        if (prevPaginator !== undefined) {
          prevPaginator.fadeOut(500);
        }
        if (nextPaginator !== undefined) {
          nextPaginator.fadeOut(500);
        }

        this.callbackIfHasLittle();
      } else {
        if (paginator !== undefined) {
          paginator.fadeOut(500);

          for (i = 0; i < paginatorLength; i++) {
            paginator.eq(i).stop().fadeIn(500);
          }
        }
        if (prevPaginator !== undefined) {
          prevPaginator.fadeIn(500);
        }
        if (nextPaginator !== undefined) {
          nextPaginator.fadeIn(500);
        }
      }

    },
    remakeTimeout: function() {
      var that = this;
      if (that.doTimeout) {
        clearInterval(this.timeoutObj);
        this.timeoutObj = setInterval(function() {
          that.next();
        }, this.timeout);
      }
    },
    next: function() {
      this.current++;
      if (this.current >= this.paginatorLength) {
        this.current = 0;
      }
      this.changePaginator();
      this.animate();
      this.remakeTimeout();
    },
    prev: function() {
      this.current--;
      if (this.current < 0) {
        this.current = this.paginatorLength - 1;
      }
      this.changePaginator();
      this.animate();
      this.remakeTimeout();
    },
    changePaginator: function() {
      var number = this.current;
      if (this.paginator && this.paginator.length && this.paginator.length > 0) {
        this.paginator.removeClass(this.paginatorActive).
        eq(number).addClass(this.paginatorActive);
      }
    },
    set: function(number) {
      this.current = number;
      this.animate();
      this.remakeTimeout();
      this.changePaginator();
    },
    update: function() {
      this.slideObjs = this.father.find(this.opt.slideObjs);
      this.childCount = this.slideObjs.length;
      this.paginate();
      this.animate();
    },
    animate: function() {
      var
      current = this.current,
        boxWidth = this.boxWidth,
        slideObjs = this.slideObjs,
        AUXslideObj,
        newLeft,
        lastTileLeft = 0,
        currentTile = 0;

      if (current === 0) {
        newLeft = 0;
      } else {
        for (var i = 0, k = slideObjs.length; i < k; i++) {
          AUXslideObj = slideObjs[i];

          if (AUXslideObj.offsetLeft + AUXslideObj.offsetWidth - lastTileLeft > boxWidth) {
            currentTile++;
            lastTileLeft = AUXslideObj.offsetLeft;

            if (currentTile === current) {
              newLeft = -lastTileLeft;
            }
          }
        }
      }


      // testa se o novo left é menor do que o permitido
      if (slideObjs.length === 0) {
        return false;
      }
      var AUXminLeftObj = slideObjs[slideObjs.length - 1],
        minLeft = boxWidth - (AUXminLeftObj.offsetLeft + AUXminLeftObj.offsetWidth);



      if (minLeft > 0) {

        if (this.rightIfHasLittle) {

        } else if (this.centerIfHasLittle) {
          // center
          minLeft /= 2;
        } else {
          minLeft = 0;
        }
      }

      newLeft = Math.max(minLeft, newLeft);

      if (newLeft === minLeft) {
        newLeft -= this.paddingLeft;
      }

      this.slider.stop(true, true).
      animate({
        left: newLeft + 'px'
      }, this.animationTime);


    } // animate

  };

  var methods = {
    init: function(options) {
      return this.each(function() {
        if ($(this).data('responsiveManySlider')) {
          delete $(this).data('responsiveManySlider');
        }

        $(this).data('responsiveManySlider', new ResponsiveManySlider(this, options));
      });
    },
    update: function() {
      return this.each(function() {
        if (!$(this).data('responsiveManySlider')) {
          $(this).data('responsiveManySlider', new ResponsiveManySlider(this, options));
        }

        $(this).data('responsiveManySlider').update();

      });
    },
    remakeTimeout: function() {

    }
  };

  $.fn.responsiveManySlider = function(method) {

    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.responsiveManySlider');
    }

  };

})(window.jQuery);
