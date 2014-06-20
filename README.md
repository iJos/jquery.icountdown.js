jquery.icountdown.js
===========

A really lightweight jQuery plugin to create simple an nice countdowns

Dependencies
------------

This plugin uses the following dependences

Last jQuery Version
* [jQuery](https://github.com/jquery/jquery)

Use
------

Add `jquery.icountdown.js`, after jQuery to the head of your HTML document. Then call icountdown on document ready.

```javascript
$(document).ready(function () {

    $('body').icountdown({
		future      : new Date("June 30 2015 21:15:00 GMT+0200"),
        seconds_sel : '.seconds',
        minutes_sel : '.minutes',
        hours_sel   : '.hours',
        days_sel    : '.days'
	});
	
});
```
### PARAMETERS


#### future

Set the future date, the objective of our countdown. Default `new Date("June 30 2018 21:15:00 GMT+0200")`
`future      : new Date("June 30 2015 21:15:00 GMT+0200")`


#### seconds_sel

Set the CSS selector of our SECONDS wrapper. Default `#seconds`
`seconds_sel : '.seconds'`

#### minutes_sel

Set the CSS selector of our MINUTES wrapper. Default `#minutes`
`minutes_sel : '.minutes'`

#### hours_sel

Set the CSS selector of our HOURS wrapper. Default `#hours`
`hours_sel : '.hours'`

#### days_sel

Set the CSS selector of our DAYS wrapper. Default `#days`
`days_sel : '.days'`


Copyright
---------

Copyright (c) 2014 Jose Luis Jimenez | @iJos.