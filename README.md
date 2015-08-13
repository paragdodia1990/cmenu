#CMENU
##Jquery Plugin for Customize menu for responsive sites.

####Check out fiddle Here: https://jsfiddle.net/biholaindrasinh/s0jyzrtw/5/embedded/result/

####This plugin tested on jquery-1.11.3.js and it requires font-awesome for submenu right arrow and toggle bars icons.

####To download this plugin click here: http://biholaindrasinh.github.io/cmenu/

####Simply Initialize plugin like other jquery plugins

```javascript
    $(function () {
        $('selector').cmenu();
    });
```
###Cmenu Options
####**width**
#####Default:'100%'
#####Width Example
```javascript
    $('selector').cmenu({width:'200px'});
```
####**BgColor**
#####Default:'grey'
#####Container Background Color Example
```javascript
    $('selector').cmenu({BgColor:'#00FF00'});
```
####**togglePosition**
#####Default:'left'
#####Toggle Button Position Example
```javascript
    $('selector').cmenu({togglePosition:'right'});
```
####**toggleEvent**
#####Default:null
#####Custom Event binding in place of jquery slide toggle.
```javascript
    $('selector').cmenu({toggleEvent:function(){
        toggleContainer.fadeToggle();
    }});
```
#####*You can pass multiple options in cmenu plugin.*
```javascript
    $('selector').cmenu({width: '50%', BgColor: 'magenta', togglePosition: 'left'});
```