$(function() {
	var cons = localStorage.cons || "天蝎座";
	$('.pic img').attr("src", 'img/' + cons + '.png')
	var search = "consName=" + encodeURIComponent(cons) + "&type=today&key=b136fbc45d7456e59938632fb62ded65"
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: "http://web.juhe.cn:8080/constellation/getAll",
		data: search,
		success: function(res) {
			$('.name span').text(res.name)
			$('.color span').text(res.color)
			$('.star span').text(res.QFriend)
			$('.work span').text(res.work)
			$('.summary span').text(res.summary)
		}
	})

	function change() {
		var val = $('.ipt').val();
		var reg = /座$/;
		if (val == '') {
			$('.wrongtip').text("请输入要查询的星座")
		} else if (reg.test(val) == false) {
			$('.wrongtip').text("请输入正确的星座-以“座”结尾")
		} else {
			$('.wrongtip').text("");
			var newS = "consName=" + encodeURIComponent(val) +
				"&type=today&key=b136fbc45d7456e59938632fb62ded65";
			$.ajax({
				type: 'GET',
				dataType: "json",
				data: newS,
				url: "http://web.juhe.cn:8080/constellation/getAll",
				success: function(res) {
					if (res.error_code == 0) {
						$('.name span').text(res.name)
						$('.color span').text(res.color)
						$('.star span').text(res.QFriend)
						$('.work span').text(res.work)
						$('.summary span').text(res.summary)
						$('.pic img').attr("src", 'img/' + val + '.png');
						localStorage.cons = val;
					} else {
						$('.wrongtip').text(res.reason)
					}

				}
			})
		}
	}

	$('.submit').on("click", function() {
		change();
	})

	//enter的时候也出发事件
	$('.ipt').on('keyup', function(e) {
		$('.wrongtip').text('')
		if (e.keyCode == 13) {
			change();
		}
	})
})