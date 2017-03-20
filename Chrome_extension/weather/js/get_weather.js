// function getWeather(url, callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("get", url, true);
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState == 4) {
// 			callback(xhr.responseText)
// 		}
// 	}
// 	xhr.send();
// }

// var subBtn = document.getElementById('get-weather');
// var iptval = document.getElementById('ipt');
// subBtn.addEventListener('click', function() {
// 	var searchval = iptval.value;
// 	var searchurl = 'https://api.thinkpage.cn/v3/weather/now.json?key=x3bdogb3xz9xczby&location=' + searchval +
// 		'&language=zh-Hans&unit=c'
// 	getWeather(searchurl, function(res) {
// 		var parseRes = JSON.parse(res)
// 		document.getElementById('result').innerText = "位置：" + parseRes.results[0].location.name + "<br/>天气：" + parseRes.results[0].now.text
// 	})
// })
// 

var subBtn = $('#get-weather');
var iptVal = $('#ipt');

subBtn.on('click', function() {
	var searchVal = iptVal.val();
	var searchUrl = 'https://api.thinkpage.cn/v3/weather/now.json?key=x3bdogb3xz9xczby&location=' + searchVal +
		'&language=zh-Hans&unit=c';
	if (searchVal == '') {
		$('.err').text("内容为空，请重新输入")
	} else {
		$.ajax({
			type: "GET",
			url: searchUrl,
			success: function(res) {
				if (res !== undefined) {
					$("#result").text("位置：" + res.results[0].location.name + "天气：" + res.results[0].now.text)
				} else {
					$('#result').text("未能匹配到任何的城市")
				}
			},
			error: function() {
				$('#result').text("怕是你输入的城市有问题，小的查不到")
			}
		})
	}
})