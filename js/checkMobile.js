define([], function() {
	'use strict';

 	var checkMobile = function(){
 		var mobile = false;
		if ( matchMedia !== undefined) // for ie < 10
	    {
	        if ( matchMedia('(max-width: 700px)').matches ){
	            mobile = true;
	        }
	    }
	    return mobile;
 	};

 	return checkMobile;
});			