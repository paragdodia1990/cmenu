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

$.fn.cmenu = function (options) {
    var settings = $.extend({width: 200, BgColor: 'grey', toggleEvent: null, togglePosition: 'left'}, options);
    this.css({'width': settings.width, 'background-color': settings.BgColor});
    this.find('.submenu ul').hide();
    var toggleContainer = this.find('#toggle-btn').next();
    toggleContainer.hide();
    this.find('#toggle-btn').find('.fa-bars').css({'float': settings.togglePosition});
    if (settings.toggleEvent != null) {
        this.find('#toggle-btn').click(toggleEvent);
    } else {
        this.find('#toggle-btn').click(function () {
            toggleContainer.slideToggle();
        });
    }
    return this;
};