(function($){

/**
 * Loading js for single charity page.
 * Pulls charity info from ajaxUrl
 * Populates info into charity.php page
 * Assumes element ids from charity.php
 */
CHARITY = function(id){
	
	var self = this;
	
	self.init = function(){
		console.log("charity init");
		self.ajaxUrl = "/tbd-load-charity";
		self.charityId = id;
		self.ajax();
	};
	
	self.ajax = function(){
		console.log("pulling ajax from: "+self.ajaxUrl);
		$.ajax({
			url: self.ajaxUrl,
			type: "POST",
			data: {
				charityId : self.charityId
			},
			success: function(data){
				console.log("ajax success!");
				self.populate(data);
			},
			error: function(j,t,e){
				console.log("error loading charity: "+self.charityId);
				window.location.href = "/";
			}
		});
	};
	
	self.populate = function(data){
		console.log("populating data");
		$('#name').html(data.name);
		$('#desc').html(data.longDescription);
		$('#link a').attr('href', data.link);
	};
	
	
	self.init();
};

})(jQuery);