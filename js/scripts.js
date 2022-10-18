
  let inp1 = document.querySelector(".inp1");
  let inp2 = document.querySelector(".inp2");
  let go = document.querySelector(".go");
  let res = document.querySelector(".res");
  let select = document.querySelector(".select");
  let clear = document.querySelector(".clear");
  let form = document.querySelector(".form");


window.addEventListener("load", function () {

  go.addEventListener("click", function () {

	let num1 = parseInt(inp1.value);
	let num2 = parseInt(inp2.value);
	let sum;
    if (select.value === "+") {
	res.innerHTML = num1 + num2;
	//   res.innerHTML = sum;
    } else if (select.value === "-") {
		res.innerHTML = num1 - num2;
    } else if (select.value == "/") {
		res.innerHTML = num1 / num2;
    } else if (select.value == "*") {
      sum = num1 * num2;
	  res.innerHTML = sum;
    } 
	if (res.innerHTML == 'NaN' || res.innerHTML == 'undefined' || res.innerHTML == 'Infinity' ) {
		res.innerHTML = '¯|_(ツ)_|¯';
	} 
  });

  clear.addEventListener("click", function () {
    res.innerHTML = "";
    inp1.value = "";
    inp2.value = "";
    go.disabled = true;
    clear.disabled = true;
  });

  form.addEventListener("input", function() {
	inp1.value = inp1.value.replace(/[^\d]/g, '');
	inp2.value = inp2.value.replace(/[^\d]/g, '');
	if (inp1.value  !== "" && inp2.value !== "") {
	go.disabled = false;
    clear.disabled = false;
	} else {
		go.disabled = true;
		clear.disabled = true;
	}
  });

});


// let inp1 = document.querySelector(".inp1");
// let inp2 = document.querySelector(".inp2");
// let go = document.querySelector(".go");
// let res = document.querySelector(".res");
// let select = document.querySelector(".select");
// let clear = document.querySelector(".clear");
// let form = document.querySelector(".form");


// window.addEventListener("load", function () {

// go.addEventListener("click", function () {
  

//   let num1 = inp1.value;
//   let num2 = inp2.value;
  
// let str1 = '';
// let str2 = '';
// let arr1 = num1.split(' ');
// let arr2 = num2.split(' ');
  
// for(let i = 0; i < arr1.length; i++) {
//   if ( isNaN(+arr1[i]) ) {
// 	str1 = arr1[i];
// 	break;
//   }
// }
// for(let i = 0; i < arr2.length; i++) {
//   if ( isNaN(+arr2[i]) ) {
// 	str2 = arr2[i];
// 	break;
//   }
// }
  
// num1 = parseInt(inp1.value);
//   num2 = parseInt(inp2.value);
  
//   if (res.innerHTML == 'NaN' || res.innerHTML == 'undefended' || res.innerHTML == 'Infinity' || str1 != str2 ) {
// 		res.innerHTML = '¯|_(ツ)_/¯ ';
// 	} else if (select.value === "+") {
// 	let sum = num1 + num2;
// 	res.innerHTML = sum + ' ' + str1;
//   } else if (select.value === "-") {
// 	let sum = num1 - num2;
// 	res.innerHTML = sum + ' ' + str1;
//   } else if (select.value == "/") {
// 	let sum = num1 / num2;
// 	res.innerHTML = sum + ' ' + str1;
//   } else if (select.value == "*") {
// 	let sum = num1 * num2;
// 	res.innerHTML = sum + ' ' + str1;
//   } 

// });

// clear.addEventListener("click", function () {
//   res.innerHTML = "";
//   inp1.value = "";
//   inp2.value = "";
//   go.disabled = true;
//   clear.disabled = true;
// });

// form.addEventListener("input", function() {
//   if (inp1.value  !== "" && inp2.value !== "") {
//   go.disabled = false;
//   clear.disabled = false;
//   } else {
// 	  go.disabled = true;
// 	  clear.disabled = true;
//   }
// });

// });
