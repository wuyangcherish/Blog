var constellation = localStorage.cons || "天蝎座";

document.getElementById("cons").value = cons;

document.getElementById("save").onclick = function() {
	localStorage.cons = document.getElementById('cons').value;
	document.getElementById('tip').innerText = '保存成功';
	setTimeout(function() {
		document.getElementById('tip').innerText = '';
	}, 2000)
}