var main = function () {
	var twitter = new ctwitter.CTwitter();
	twitter.stream("statuses/filter", {lang:"en", track:["phonegap"]}, function(stream) {
		stream.on("data", function(tweet) {
			$("#tweets").prepend("<p class='response'>" + tweet.text + "</p>");
			$(".response").fadeOut(5000, function() {
				$(this).remove();
			});
		});
	});
}


$(document).ready(main);