	//计算重复最多的那个字母
	//
	/*
			首先： 将重复的都存一遍
			然后：比较重复率

	 */
	var str = "asdffkjjspcfkaaaaaaaakkskskdlcmxndepwor";

	var charObj = {};
	for (var i = 0; i < str.length; i++) {
	    if (!charObj[str.charAt(i)]) {
	        charObj[str.charAt(i)] = 1;
	    } else {
	        charObj[str.charAt(i)] = 1;
	    }
	}

	var maxchar = '';
	var maxVal = 1;

	for (var k in charObj) {
	    if (charObj[k] >= maxVal) {
	        maxChar = k;
	        maxVal = charObj[k]
	    }
	}

	return maxchar;
	}

	//生成制定字符串长度的字符
	//
	function(n) {
	    var str = "sdffffffgdfgbfbvdgbfaefwergertasfcsdfb";
	    var tmp = "";
	    var i = 0,
	        len = str.length;
	    for (i = 0; i < n; i++) {
	        tmp += str.chartAt(Math.floor(Math.random() * len))
	    }
	}
	var arr = [1, 2, 2, 3, 5, 5, 5, 3, 1, 6];
	/*
	    获取到数组的元素然后遍历找出个数是奇数的那个
	*/
	function findOdd(A) {
	    //happy coding!
	    var obj = {};
	    var newArr = [];
	    for (var i = 0; i < A.length; i++) {
	        if (!obj[A[i]]) {
	            obj[A[i]] = 1;
	        } else {
	            obj[A[i]]++;
	        }
	    }
	    for (var key in obj) {
	        if (obj[key] % 2 !== 0) {
	            return parseInt(key);
	        }
	    }
	}
	console.log(findOdd(arr));



	/** 判断一个元素是否是质数**/
	function isPrime(value) {
	    var isPrime = false;
	    if (value == 1 || value == 2) {
	        console.log("The number is Prime")
	    }
	    for (var i = 2; i < value; i++) {
	        if (value % i == 0) {
	            isPrime = true;
	            console.log("The number is prime")
	            return true;
	        }
	    }
	    console.log("The number is not a Prime")
	}


	//把每个位上面的数字加起来  最后得到一个一位数字
	function digital_root(n) {
	    var arr = n.toString().split('');
	    var sum = 0;
	    for (var i = 0; i < arr.length; i++) {
	        sum += parseInt(arr[i], 10)
	    }
	    if (sum >= 10) {
	        digital_root(sum)
	    } else {
	        return sum;
	    }
	}

	//找到数字的所有除数
	function divisors(interger) {
	    var arr = [];
	    if (typeof interger !== 'number') {
	        return;
	    }
	    if (interger !== parseInt(interger, 10)) {
	        return;
	    }
	    for (var i = 1; i < interger; i++) {
	        if (interger % i == 0) {
	            arr.push(i)
	        } else {
	            continue;
	        }
	    }
	    return arr.length ? arr : interger + ' is prime'
	}



	// covert charactor  - 如果字符串中的元素出现过一次则用“(” 替代  如果出现超过一次
	//则用 “)” 替代
	function duplicateEncode(word) {
	    var word = word.toLowerCase();
	    /*思路  都先放到一个对象里面然后根据对象的次数进行替换*/
	    var obj = {};
	    for (var i = 0; i < word.length; i++) {
	        if (!obj[word.charAt(i)]) {
	            obj[word.charAt(i)] = 1;
	        } else {
	            obj[word.charAt(i)]++;
	        }
	    }
	    for (var key in obj) {
	        if (obj[key] == 1) {
	            var str = key;
	            word.replace(, )
	        }
	    }
	}

	/**传进来一个数字  然后前面的数字跟最后一个平方之后相加**/
	function narcissistic(value) {
	    // Code me
	    if (value < 10) {
	        return value + 'is narcissistic';
	    }
	    var arr = value.toString().split('');
	    for (var i = 0; i < arr.length; i++) {
	        var sum = 0;
	        for (var j = 0; j < arr.length; j++) {
	            sum += Math.pow(arr[j], arr[i]);
	            if (sum === value) {
	                return value + ' is narcissistic'
	            }
	        }
	    }
	}

	/**传进来一组数字  然后前面的数字跟最后一个平方之后相加**/

	function narcissistic(value) {
	    // Code me
	    if (value < 10) {
	        return value + 'is narcissistic';
	    }
	    var arr = value.toString().split('');
	    for (var i = 0; i < arr.length; i++) {
	        var sum = 0;
	        for (var j = 0; j < arr.length; j++) {
	            sum += Math.pow(arr[j], arr[i]);
	            if (sum === value) {
	                return value + ' is narcissistic'
	            }
	        }
	    }
	    return value + ' is not narcissistic'
	}

	function test(value) {
	    var arr = value.toString().split(",")
	    for (var i = 0; i < arr.length; i++) {
	        console.log(arr[i])
	            //         narcissistic(arr[i])
	    }
	}


	/** is a prime 
	    如果 str 中有显示的 prime 则也算是is a prime 
	    如果是数字 则直接判断是否是 prime
	**/

	function isPrime(str) {
	    if (parseInt(str, 10).toString() === 'NaN') {
	        var newStr = str.toLowerCase();
	        if (!newStr.indexOf("prime")) {
	            return false;
	        } else {
	            return true;
	        }
	    } else {
	        var str = parseInt(str, 10);
	        for (var i = 2; i < str; i++) {
	            if (str % i == 0) {
	                return false;
	            } else {
	                continue;
	            }
	        }
	        return true;
	    }
	}



	/*找到缺省的数字*/

	function findMissingNumber(str) {
	    //your code here
	    var arr = str.split(" ").sort();
	    var obj = {};
	    var miss = [];
	    for (var i = 0; i < arr.length; i++) {
	        if (Number(arr[i]).toString() == 'NaN') {
	            return 1;
	        }
	        obj[arr[i]] = arr[i];
	    }

	    for (var i = 1; i < arr[arr.length - 1]; i++) {
	        if (!obj[i]) {
	            miss.push(i);
	        }
	    }

	    if (miss.length == 0) {
	        return 0;
	    } else if (miss.length == 1) {
	        return miss[0];
	    } else {
	        return 2;
	    }
	}

	/**简洁的写法**/
	fucntion findMissingNumber(sequence) {
	    if (Number.isInteger(+sequence.split(" ").join(''))) return 1;
	    var arr = sequence.split(' ').map(n => +n;);
	    for (var i = 1; i < Math.max(...arr); i++) {
	        if (!arr.includes(i))
	            return i;
	    }
	    return 0;
	}


	/**重复字符串**/

	function accum(str) {
	    var arr = str.split('');
	    var newStr = [];
	    for (var i = 0; i < arr.length; i++) {
	        newStr.push(arr[i].toUpperCase() + Array(i + 1).join(arr[i].toLowerCase()))
	    }
	    return newStr.join("-")

	}
	accum("ZpglnRxqenU")


	/**简洁的写法 es6**/
	function accum(s) {
	    return s.split('').map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLoweCase())).join('-')
	}


	/**
	    1 -> 1
	    2 -> 3
	    4 ->10
	    ....
	**/
	function triangular(n) {
	    var sum = 0;
	    for (var i = 1; i <= n; i++) {
	        sum += i;
	    }
	    return sum;
	}

	/*anthor way**/
	function triangular(n) {
	    return (n > 0) ? ((n * n) + n) / 2 : 0;
	}


	/** 字符串每隔两位转化为大写**/
	function toWeirdCase(str) {
	    var arr = str.split(' ');
	    var newStr = [];
	    for (var i = 0; i < arr.length; i++) {
	        var str = '';
	        for (var j = 0; j < arr[i].length; j++) {
	            if (j % 2 == 0) {
	                str += arr[i].charAt(j).toUpperCase()
	            } else {
	                str += arr[i].charAt(j).toLowerCase()
	            }

	        }
	        newStr.push(str)
	    }
	    console.log(newStr.join(' '))
	}
	toWeirdCase('This is a test')



	/**还有一个好的方案**/
	function toWeirdCase(string) {
	    return string.split(' ').map(function(word) {
	        return word.split('').map(function(letter, index) {
	            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
	        }).join('');
	    }).join(' ')
	}


	/**
	    找到number以内的并且是3 or 5 的倍数的 然后相加之和
	**/

	function solution(number) {
	    var obj = {};
	    var sum = 0;
	    for (var i = 0; i < number; i++) {
	        if (i % 3 == 0 || i % 5 == 0) {
	            if (!obj[i]) {
	                obj[i] = 1;
	                sum += i;
	            } else {
	                sum += i;
	            }
	        }
	    }
	    console.log(sum)
	}



	/** 
	    把一个1234567890这一长度的数字显示成 (123) 456-7890 这种类型的
	    有两种做法  第一种是我自己想的  知道正则实现  但是忘掉了具体是怎么实现的了  看到别人这么实现了  
	    赶紧记下来
	**/

	function　 createPhoneNumber(numbers) {
	    var numStr = numbers.join('');
	    numstr = '(' + numstr.substring(0, 3) + ') ' + numstr.substring(3, 6) + '-' + numstr.substring(6);

	    return numstr;
	}

	function createPhoneNumber(numbers) {
	    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
	    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
	}


	/**
	    将元素倒序  --之后再在后面添加一个ay
	**/
	function pigIt(str) {
	    var arr = str.split(' ');
	    for (var i = 0; i < arr.length; i++) {
	        arr[i] = arr[i].split('').reverse().join('') + 'ay'
	    }
	    return arr.join(" ")
	}

	/**
	    将元素的第一个元素添加到最后之后嘉加上 ‘ay’
	**/



	/**
	 *  一个函数  输出的要求如下所示：
	 *  likes [] // must be "no one likes this"
	    likes ["Peter"] // must be "Peter likes this"
	    likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
	    likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
	    likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
	 */

	//方法1  -- 笨办法

	function likes(names) {
	    // TODO
	    var len = names.length;
	    if (len == 0) {
	        return "no one likes this"
	    } else if (len == 1) {
	        return names[0] + ' likes this'
	    } else if (len == 2) {
	        return names[0] + ' and ' + names[1] + ' like this'
	    } else if (len == 3) {
	        return names[0] + ',' + names[1] + ' and ' + names[2] + ' like this'
	    } else {
	        var rest = len - 2;
	        return names[0] + ',' + names[1] + ' and ' + rest + ' others like this'
	    }
	}


	function likes(names) {
	    var len = names.length;
	    switch (len) {
	        case 0:
	            return "no one likes this";
	            break;
	        case 1:
	            return names[0] + ' likes this'
	            break;
	        case 2:
	            return names[0] + ' and ' + names[1] + ' like this';
	            break;
	        case 3:
	            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
	            break;
	        case 4:
	            return names[0] + ', ' + names[1] + ' and ' + (len - 2) + ' others like this'
	            break;
	    }
	}

	//好办法

	function likes(names) {
	    var len = names.length;
	    var templates = [
	        "no one likes this",
	        "{name} likes this",
	        "{name} and {name} like this",
	        "{name}, {name}, and {name} like this",
	        "{name}, {name}, and {n} like this"
	    ];

	    //如果不是第四步则直接走第四步
	    var idx = Math.min(len, 4)
	    return templates[idx].replace(/{name}|{n}/, function() {
	        return val === '{name}' ? names.shift() : names.length;
	    })
	}