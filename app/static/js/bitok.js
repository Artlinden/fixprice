$(document).ready(function(){
	getRate();
});

function getRate(){
	// https://api.coindesk.com/v1/bpi/currentprice.json
	$.get(
		"https://api.coindesk.com/v1/bpi/currentprice.json",
		function(data){
			data = JSON.parse(data);
			console.log(data);
			$('#EURBIT').html("1 BTC = € " + data.bpi.EUR.rate);
			$('#USDBIT').html("1 BTC = $ " + data.bpi.USD.rate);
		}
	);
}

