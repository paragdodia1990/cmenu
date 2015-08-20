/* 
 * The MIT License
 *
 * Copyright 2015 WD.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function ($) {

    $.fn.cmenu = function (options) {
        "use strict";

        /* Default Options for Custom Menu */
        var settings = $.extend({width: '100%', BgColor: '', toggleBtn: null, togglePosition: 'left'}, options);

        /* Customize Container Element */
        this.css({'width': settings.width, 'background-color': settings.BgColor});

        /* Customize Toggle Button */
        if (settings.toggleBtn === null) {
            settings.toggleBtn = "#toggle-btn";
        }
        var toggle = this.find(settings.toggleBtn);

        /* Add Plus and Minus Sign on submenus */

        this.find('.submenu1').each(function () {
            var link = $(this);
            link.parent().append('<i class="fa fa-plus"></i>');
        });

        this.find('.submenu2').each(function () {
            var link = $(this);
            link.parent().append('<i class="fa fa-plus"></i>');
        });


        /* Customize Toggle Container */
        var toggleContainer = toggle.next();
        var submenuContainer = this.find('.submenu1').next();
        var innersubMenuContainer = this.find('.submenu2').next();

        toggleContainer.css({left: "-320px"});
        toggle.children().first().css({'float': settings.togglePosition});
        toggle.children().first().click(function () {
            if (toggleContainer.css('left') === '0px') {
                submenuContainer.hide();
                innersubMenuContainer.hide();
                toggleContainer.animate({left: "-320px"});
            } else {
                toggleContainer.animate({left: "0"});
            }
        });

        /* Customize Sub Menu */
        this.find('.submenu1').siblings().filter('i').click(function () {
            $(this).toggleClass('fa-minus');
            $(this).parent().find('ul').first().slideToggle();
        });
        submenuContainer.hide();

        this.find('.submenu2').siblings().filter('i').click(function () {
            $(this).toggleClass('fa-minus');
            $(this).parent().find('ul').first().slideToggle();
        });
        innersubMenuContainer.hide();

        return this;
    };
})(jQuery);