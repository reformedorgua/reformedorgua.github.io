/* НАЧАЛО АДАПТИВНАЯ КАРУСЕЛЬ нa owv-carousel */
$(document).ready(function() {
    // Горизонтальное меню
    var cbpHorizontalMenu = (function() {

        var $listItems = $( '#cbp-hrmenu > ul > li' ),
            $menuItems = $listItems.children( 'a' ),
            $body = $( 'body' ),
            current = -1;

        function init() {
            $menuItems.on( 'click', open );
            $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
        }

        function open( event ) {

            if( current !== -1 ) {
                $listItems.eq( current ).removeClass( 'cbp-hropen' );
            }

            var $item = $( event.currentTarget ).parent( 'li' ),
                idx = $item.index();

            if( current === idx ) {
                $item.removeClass( 'cbp-hropen' );
                current = -1;
            }
            else {
                $item.addClass( 'cbp-hropen' );
                current = idx;
                $body.off( 'click' ).on( 'click', close );
            }

            return false;

        }

        function close( event ) {
            $listItems.eq( current ).removeClass( 'cbp-hropen' );
            current = -1;
        }

        return { init : init };

    })();
    $(function() {
        cbpHorizontalMenu.init();
    });

    // БОКОВОЕ МЕНЮ СО СМЕЩЕНИЕМ НАЧАЛО
    ;( function( window ) {

        'use strict';

        function extend( a, b ) {
            for( var key in b ) {
                if( b.hasOwnProperty( key ) ) {
                    a[key] = b[key];
                }
            }
            return a;
        }

        // taken from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
        function hasParent( e, id ) {
            if (!e) return false;
            var el = e.target||e.srcElement||e||false;
            while (el && el.id != id) {
                el = el.parentNode||false;
            }
            return (el!==false);
        }

        // returns the depth of the element "e" relative to element with id=id
        // for this calculation only parents with classname = waypoint are considered
        function getLevelDepth( e, id, waypoint, cnt ) {
            cnt = cnt || 0;
            if ( e.id.indexOf( id ) >= 0 ) return cnt;
            if( classie.has( e, waypoint ) ) {
                ++cnt;
            }
            return e.parentNode && getLevelDepth( e.parentNode, id, waypoint, cnt );
        }

        // http://coveroverflow.com/a/11381730/989439
        function mobilecheck() {
            var check = false;
            (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }

        // returns the closest element to 'e' that has class "classname"
        function closest( e, classname ) {
            if( classie.has( e, classname ) ) {
                return e;
            }
            return e.parentNode && closest( e.parentNode, classname );
        }

        function mlPushMenu( el, trigger, options ) {
            this.el = el;
            this.trigger = trigger;
            this.options = extend( this.defaults, options );
            // support 3d transforms
            this.support = Modernizr.csstransforms3d;
            if( this.support ) {
                this._init();
            }
        }

        mlPushMenu.prototype = {
            defaults : {
                // overlap: there will be a gap between open levels
                // cover: the open levels will be on top of any previous open level
                type : 'overlap', // overlap || cover
                // space between each overlaped level
                levelSpacing : 40,
                // classname for the element (if any) that when clicked closes the current level
                backClass : 'mp-back'
            },
            _init : function() {
                // if menu is open or not
                this.open = false;
                // level depth
                this.level = 0;
                // the moving wrapper
                this.wrapper = document.getElementById( 'mp-pusher' );
                // the mp-level elements
                this.levels = Array.prototype.slice.call( this.el.querySelectorAll( 'div.mp-level' ) );
                // save the depth of each of these mp-level elements
                var self = this;
                this.levels.forEach( function( el, i ) { el.setAttribute( 'data-level', getLevelDepth( el, self.el.id, 'mp-level' ) ); } );
                // the menu items
                this.menuItems = Array.prototype.slice.call( this.el.querySelectorAll( 'li' ) );
                // if type == "cover" these will serve as hooks to move back to the previous level
                this.levelBack = Array.prototype.slice.call( this.el.querySelectorAll( '.' + this.options.backClass ) );
                // event type (if mobile use touch events)
                this.eventtype = mobilecheck() ? 'touchstart' : 'click';
                // add the class mp-overlap or mp-cover to the main element depending on options.type
                classie.add( this.el, 'mp-' + this.options.type );
                // initialize / bind the necessary events
                this._initEvents();
            },
            _initEvents : function() {
                var self = this;

                // the menu should close if clicking somewhere on the body
                var bodyClickFn = function( el ) {
                    self._resetMenu();
                    el.removeEventListener( self.eventtype, bodyClickFn );
                };

                // open (or close) the menu
                this.trigger.addEventListener( this.eventtype, function( ev ) {
                    ev.stopPropagation();
                    ev.preventDefault();
                    if( self.open ) {
                        self._resetMenu();
                    }
                    else {
                        self._openMenu();
                        // the menu should close if clicking somewhere on the body (excluding clicks on the menu)
                        document.addEventListener( self.eventtype, function( ev ) {
                            if( self.open && !hasParent( ev.target, self.el.id ) ) {
                                bodyClickFn( this );
                            }
                        } );
                    }
                } );

                // opening a sub level menu
                this.menuItems.forEach( function( el, i ) {
                    // check if it has a sub level
                    var subLevel = el.querySelector( 'div.mp-level' );
                    if( subLevel ) {
                        el.querySelector( 'a' ).addEventListener( self.eventtype, function( ev ) {
                            ev.preventDefault();
                            var level = closest( el, 'mp-level' ).getAttribute( 'data-level' );
                            if( self.level <= level ) {
                                ev.stopPropagation();
                                classie.add( closest( el, 'mp-level' ), 'mp-level-overlay' );
                                self._openMenu( subLevel );
                            }
                        } );
                    }
                } );

                // closing the sub levels :
                // by clicking on the visible part of the level element
                this.levels.forEach( function( el, i ) {
                    el.addEventListener( self.eventtype, function( ev ) {
                        ev.stopPropagation();
                        var level = el.getAttribute( 'data-level' );
                        if( self.level > level ) {
                            self.level = level;
                            self._closeMenu();
                        }
                    } );
                } );

                // by clicking on a specific element
                this.levelBack.forEach( function( el, i ) {
                    el.addEventListener( self.eventtype, function( ev ) {
                        ev.preventDefault();
                        var level = closest( el, 'mp-level' ).getAttribute( 'data-level' );
                        if( self.level <= level ) {
                            ev.stopPropagation();
                            self.level = closest( el, 'mp-level' ).getAttribute( 'data-level' ) - 1;
                            self.level === 0 ? self._resetMenu() : self._closeMenu();
                        }
                    } );
                } );
            },
            _openMenu : function( subLevel ) {
                // increment level depth
                ++this.level;

                // move the main wrapper
                var levelFactor = ( this.level - 1 ) * this.options.levelSpacing,
                    translateVal = this.options.type === 'overlap' ? this.el.offsetWidth + levelFactor : this.el.offsetWidth;

                this._setTransform( 'translate3d(' + translateVal + 'px,0,0)' );

                if( subLevel ) {
                    // reset transform for sublevel
                    this._setTransform( '', subLevel );
                    // need to reset the translate value for the level menus that have the same level depth and are not open
                    for( var i = 0, len = this.levels.length; i < len; ++i ) {
                        var levelEl = this.levels[i];
                        if( levelEl != subLevel && !classie.has( levelEl, 'mp-level-open' ) ) {
                            this._setTransform( 'translate3d(-100%,0,0) translate3d(' + -1*levelFactor + 'px,0,0)', levelEl );
                        }
                    }
                }
                // add class mp-pushed to main wrapper if opening the first time
                if( this.level === 1 ) {
                    classie.add( this.wrapper, 'mp-pushed' );
                    this.open = true;
                }
                // add class mp-level-open to the opening level element
                classie.add( subLevel || this.levels[0], 'mp-level-open' );
            },
            // close the menu
            _resetMenu : function() {
                this._setTransform('translate3d(0,0,0)');
                this.level = 0;
                // remove class mp-pushed from main wrapper
                classie.remove( this.wrapper, 'mp-pushed' );
                this._toggleLevels();
                this.open = false;
            },
            // close sub menus
            _closeMenu : function() {
                var translateVal = this.options.type === 'overlap' ? this.el.offsetWidth + ( this.level - 1 ) * this.options.levelSpacing : this.el.offsetWidth;
                this._setTransform( 'translate3d(' + translateVal + 'px,0,0)' );
                this._toggleLevels();
            },
            // translate the el
            _setTransform : function( val, el ) {
                el = el || this.wrapper;
                el.style.WebkitTransform = val;
                el.style.MozTransform = val;
                el.style.transform = val;
            },
            // removes classes mp-level-open from closing levels
            _toggleLevels : function() {
                for( var i = 0, len = this.levels.length; i < len; ++i ) {
                    var levelEl = this.levels[i];
                    if( levelEl.getAttribute( 'data-level' ) >= this.level + 1 ) {
                        classie.remove( levelEl, 'mp-level-open' );
                        classie.remove( levelEl, 'mp-level-overlay' );
                    }
                    else if( Number( levelEl.getAttribute( 'data-level' ) ) == this.level ) {
                        classie.remove( levelEl, 'mp-level-overlay' );
                    }
                }
            }
        }

        // add to global namespace
        window.mlPushMenu = mlPushMenu;

    } )( window );
    new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );


    /* начало popup-карты */

    var overlay = $('#overlaypopup'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.map-popup-showup'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.close-popup, #overlaypopup'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.map-popup-window'); // все скрытые мoдaльные oкнa

    open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
        event.preventDefault(); // вырубaем стaндaртнoе пoведение
        var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
        overlay.fadeIn(400, //пoкaзывaем oверлэй
            function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                    .css('display', 'block')
                    .animate({opacity: 1, top: '-60%'}, 200); // плaвнo пoкaзывaем
            });
    });

    close.click( function(){ // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .animate({opacity: 0, top: '20%'}, 200, // плaвнo прячем
                function(){ // пoсле этoгo
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });

    /* Начало popup-поиска */

    var Modal = (function() {

        var trigger = $qsa('.modal__trigger'); // what you click to activate the modal
        var modals = $qsa('.modal'); // the entire modal (takes up entire window)
        var modalsbg = $qsa('.modal__bg'); // the entire modal (takes up entire window)
        var content = $qsa('.modal__content'); // the inner content of the modal
        var closers = $qsa('.modal__close'); // an element used to close the modal
        var w = window;
        var isOpen = false;
        var contentDelay = 400; // duration after you click the button and wait for the content to show
        var len = trigger.length;

        // make it easier for yourself by not having to type as much to select an element
        function $qsa(el) {
            return document.querySelectorAll(el);
        }

        var getId = function(event) {

            event.preventDefault();
            var self = this;
            // get the value of the data-modal attribute from the button
            var modalId = self.dataset.modal;
            var len = modalId.length;
            // remove the '#' from the string
            var modalIdTrimmed = modalId.substring(1, len);
            // select the modal we want to activate
            var modal = document.getElementById(modalIdTrimmed);
            // execute function that creates the temporary expanding div
            makeDiv(self, modal);
        };

        var makeDiv = function(self, modal) {

            var fakediv = document.getElementById('modal__temp');

            /**
             * if there isn't a 'fakediv', create one and append it to the button that was
             * clicked. after that execute the function 'moveTrig' which handles the animations.
             */

            if (fakediv === null) {
                var div = document.createElement('div');
                div.id = 'modal__temp';
                self.appendChild(div);
                moveTrig(self, modal, div);
            }
        };

        var moveTrig = function(trig, modal, div) {
            var trigProps = trig.getBoundingClientRect();
            var m = modal;
            var mProps = m.querySelector('.modal__content').getBoundingClientRect();
            var transX, transY, scaleX, scaleY;
            var xc = w.innerWidth / 2;
            var yc = w.innerHeight / 2;

            // this class increases z-index value so the button goes overtop the other buttons
            trig.classList.add('modal__trigger--active');

            // these values are used for scale the temporary div to the same size as the modal
            scaleX = mProps.width / trigProps.width;
            scaleY = mProps.height / trigProps.height;

            scaleX = scaleX.toFixed(3); // round to 3 decimal places
            scaleY = scaleY.toFixed(3);


            // these values are used to move the button to the center of the window
            transX = Math.round(xc - trigProps.left - trigProps.width / 2);
            transY = Math.round(yc - trigProps.top - trigProps.height / 2);

            // if the modal is aligned to the top then move the button to the center-y of the modal instead of the window
            if (m.classList.contains('modal--align-top')) {
                transY = Math.round(mProps.height / 2 + mProps.top - trigProps.top - trigProps.height / 2);
            }


            // translate button to center of screen
            trig.style.transform = 'translate(' + transX + 'px, ' + transY + 'px)';
            trig.style.webkitTransform = 'translate(' + transX + 'px, ' + transY + 'px)';
            // expand temporary div to the same size as the modal
            div.style.transform = 'scale(' + scaleX + ',' + scaleY + ')';
            div.style.webkitTransform = 'scale(' + scaleX + ',' + scaleY + ')';


            window.setTimeout(function() {
                window.requestAnimationFrame(function() {
                    open(m, div);
                });
            }, contentDelay);

        };

        var open = function(m, div) {

            if (!isOpen) {
                // select the content inside the modal
                var content = m.querySelector('.modal__content');
                // reveal the modal
                m.classList.add('modal--active');
                // reveal the modal content
                content.classList.add('modal__content--active');

                /**
                 * when the modal content is finished transitioning, fadeout the temporary
                 * expanding div so when the window resizes it isn't visible ( it doesn't
                 * move with the window).
                 */

                content.addEventListener('transitionend', hideDiv, false);

                isOpen = true;
            }

            function hideDiv() {
                // fadeout div so that it can't be seen when the window is resized
                div.style.opacity = '0';
                content.removeEventListener('transitionend', hideDiv, false);
            }
        };

        var close = function(event) {

            event.preventDefault();
            event.stopImmediatePropagation();

            var target = event.target;
            var div = document.getElementById('modal__temp');

            /**
             * make sure the modal__bg or modal__close was clicked, we don't want to be able to click
             * inside the modal and have it close.
             */

            if (isOpen && target.classList.contains('modal__bg') || target.classList.contains('modal__close')) {

                // make the hidden div visible again and remove the transforms so it scales back to its original size
                div.style.opacity = '1';
                div.removeAttribute('style');

                /**
                 * iterate through the modals and modal contents and triggers to remove their active classes.
                 * remove the inline css from the trigger to move it back into its original position.
                 */

                for (var i = 0; i < len; i++) {
                    modals[i].classList.remove('modal--active');
                    content[i].classList.remove('modal__content--active');
                    trigger[i].style.transform = 'none';
                    trigger[i].style.webkitTransform = 'none';
                    trigger[i].classList.remove('modal__trigger--active');
                }

                // when the temporary div is opacity:1 again, we want to remove it from the dom
                div.addEventListener('transitionend', removeDiv, false);

                isOpen = false;

            }

            function removeDiv() {
                setTimeout(function() {
                    window.requestAnimationFrame(function() {
                        // remove the temp div from the dom with a slight delay so the animation looks good
                        div.remove();
                    });
                }, contentDelay - 50);
            }

        };

        var bindActions = function() {
            for (var i = 0; i < len; i++) {
                trigger[i].addEventListener('click', getId, false);
                closers[i].addEventListener('click', close, false);
                modalsbg[i].addEventListener('click', close, false);
            }
        };

        var init = function() {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Modal.init();

    /**
     Табы для исповеданий
     */
    $('div.tabs div').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('div.tabs div').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
    /**
     Спойлер (аккардеон) для содержания
     */
    $('.content-reducer-head').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.content-reducer-head').not(this).removeClass('in').next().slideUp();
    });

    /**
     Пепелсбей превью. Он гений фронтенда
     */
    function findVideos() {
        var videos = document.querySelectorAll('.video-adaptive-169-box');

        for (var i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        var link = video.querySelector('.video-link');
        var media = video.querySelector('.video-cover');
        var button = video.querySelector('.video-button');
        var id = parseMediaURL(media);

        video.addEventListener('click', () => {
            var iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

        link.removeAttribute('href');
        video.classList.add('video-enabled');
    }

    function parseMediaURL(media) {
        var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        var url = media.src;
        var match = url.match(regexp);

        return match[1];
    }

    function createIframe(id) {
        var iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video-cover');

        return iframe;
    }

    function generateURL(id) {
        var query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }

    findVideos();

    $(".img-standard-in-text").click(function(){	// Событие клика на маленькое изображение
        var img = $(this);	// Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='img-popup-box'>"+ //Добавляем в тело документа разметку всплывающего окна
            "<div class='img-popup-bg'></div>"+ // Блок, который будет служить фоном затемненным
            "<img src='"+src+"' class='img-popup-big' />"+ // Само увеличенное фото
            "</div>");
        $(".img-popup-box").fadeIn(800); // Медленно выводим изображение
        $(".img-popup-bg").click(function(){	// Событие клика на затемненный фон
            $(".img-popup-box").fadeOut(800);	// Медленно убираем всплывающее окно
            setTimeout(function() {	// Выставляем таймер
                $(".img-popup-box").remove(); // Удаляем разметку всплывающего окна
            }, 800);
        });
    });
});




