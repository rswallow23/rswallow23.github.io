
var key = "1812aca4e0173791c2dbb59f202a8e7f";
$(document).ready(function(){
	$.ajax({
        method: "GET",
        crossDomain: true,
        dataType: 'jsonp',
        url: "http://api.petfinder.com/pet.getRandom",
        data:"key="+key+"&callback=?&format=json&output=basic&animal=dog"
	}).done(function(data){
		console.log(data);
		$("body").append(data);
	});
})
