

//获取 DOM 元素的函数

function $$(selector, context){
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

//检测浏览器属性  添加响应的代码

function testProperty(property){
	var root = document.documentElement;

	if(property in root.style){
		root.classList.add(property.toLowerCase());
		return true;
	}
	root.classList.add('no-'+property.toLowerCase());
	return false;
}