'use strict';


function timeHandler() {

	this.convertValue = function (req, res) {

			var d_unix = new Date(parseInt(req.params.time * 1000) );
			var d_natural = new Date(req.params.time.toString() + " GMT");
			var res_unix , res_natural;
			var monthNames = ["January", "February", "March", "April", "May", "June",
  			"July", "August", "September", "October", "November", "December"
			];

			//check if the parameter is unix
			if(Object.prototype.toString.call(d_unix) === "[object Date]" && !isNaN( d_unix.getMonth() ) ){
				res_unix = Math.floor(parseInt(d_unix.getTime()) / 1000);
				res_natural = monthNames[d_unix.getMonth()] + " " + d_unix.getDate() + ", " + d_unix.getFullYear();
			}
			//check if the parameter is natural
			else if(Object.prototype.toString.call(d_natural) === "[object Date]" && !isNaN( d_natural.getTime() )){
				res_unix = Math.floor( d_natural.getTime() / 1000);
				res_natural = monthNames[d_natural.getMonth()] + " " + d_natural.getDate() + ", " + d_natural.getFullYear();
			}
			else{
				res_unix = null;
				res_natural = null;
			}

			res.json({
				"unix" : res_unix ,
				"natural" : res_natural
			});

	};

	
}

module.exports = timeHandler;
