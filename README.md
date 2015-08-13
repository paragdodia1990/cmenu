#CMENU
##Jquery Plugin for Customize menu for responsive sites.

###To download this plugin click here: http://biholaindrasinh.github.io/cmenu/

## Simply Initialize plugin like other jquery plugins

```
    $(function () {
        $('#container').cmenu();
    });
```
##Cmenu Options
###width
#### Default:'100%'
###Width Example
```
    $('#container').cmenu({width:'200px'});
```
###BgColor
#### Default:'grey'
###Container Background Color Example
```
    $('#container').cmenu({BgColor:'#00FF00'});
```
###togglePosition
#### Default:'left'
###Toggle Button Position Example
```
    $('#container').cmenu({togglePosition:'right'});
```
###toggleEvent
#### Default:null
###Custom Event binding in place of jquery slide toggle.
```
    $('#container').cmenu({toggleEvent:function(){
        toggleContainer.fadeToggle();
    }});
```
## You can pass multiple options in cmenu plugin.
```
    $('#container').cmenu({width: '50%', BgColor: 'magenta', togglePosition: 'left'});
```