/*!
 * jquery.icountdown.js | jQuery Count Down Plugin v0.0.1
 * 
 * https://github.com/iJos/jquery.icountdown.js
 *
 * Copyright 2015 Jose Luis Jimenez | @iJos
 * 
 * Released under MIT License
 */


(function($){

    var methods = {
        init : function(options) {
            var defaults = {
                future      : new Date("June 30 2018 21:15:00 GMT+0200"),  // default date to count down
                seconds_sel : '#seconds',
                minutes_sel : '#minutes',
                hours_sel   : '#hours',
                days_sel    : '#days'
            };
            var options = $.extend(defaults, options);
            var o = options;
            setInterval(function(){
                newClock(o);
            }, 1000);
        },
    };

    $.fn.icountdown = function(methodOrOptions) {
        if(methods[methodOrOptions]){
            //Methods
            //this.data('icountdown', $.extend(true, {}, defaults, methodOrOptions));
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        }else if(typeof methodOrOptions === 'object' || ! methodOrOptions){
            // Default to "init"

            //this.data('icountdown', $.extend(true, {}, defaults, methodOrOptions));
            //var arguments = $.extend(defaults, methodOrOptions); console.log();
            return methods.init.apply(this, arguments);
        }else{
            //Error
            $.error('Method ' +  methodOrOptions + ' does not exist on jQuery.icountdown');
        }    
    };

    function newClock(params) {
        var future      = params.future;
        var now         = new Date();
        var difference  = Math.floor((future.getTime() - now.getTime()) / 1000);
        
        var seconds = fixIntegers(difference % 60);
        difference = Math.floor(difference / 60);
        
        var minutes = fixIntegers(difference % 60);
        difference = Math.floor(difference / 60);
        
        var hours = fixIntegers(difference % 24);
        difference = Math.floor(difference / 24);
        
        var days = difference;
        
        $(params.seconds_sel).text(seconds);
        $(params.minutes_sel).text(minutes);
        $(params.hours_sel).text(hours);
        $(params.days_sel).text(days);    
    };

    function fixIntegers(integer){
        if (integer < 0){
            integer = 0;
        }
        if (integer < 10){
            return "0" + integer;
        }
        return "" + integer;
    }

})(jQuery);