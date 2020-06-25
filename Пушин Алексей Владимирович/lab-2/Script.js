function tree_toggle(event) {
	event = event || window.event
	var clickedElem = event.target || event.srcElement
	if (!hasClass(clickedElem, 'Expand')) {
		return // клик не там
	}
	// Node, на который кликнули
	var node = clickedElem.parentNode
	if (hasClass(node, 'ExpandLeaf')) {
		return // клик на листе
	}
	// определить новый класс для узла
	var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen'
	// заменить текущий класс на newClass
	// регексп находит отдельно стоящий open|close и меняет на newClass
	var re = /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/
	node.className = node.className.replace(re, '$1'+newClass+'$3');
}

function hasClass(elem, className) {
	return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className)
}

function razdelSelectType() {
	var inp = document.getElementsByName('type');
	for (var i = 0; i < inp.length; i++) {
		if (inp[i].type == "radio" && inp[i].checked) {
		inp = inp[i].value;
	}
	}
	let a = document.getElementsByName("type");
	let b = document.getElementsByName("info");
	if(a[0].checked){
		b[0].style.display="none";
	}
	else if(a[1].checked){
		b[0].style.display="block";
	}
}

$(document).ready(function(){
	$(".popup").magnificPopup();
	//Скрыть PopUp при загрузке страницы
	PopUpHide();
});

//Функция отображения PopUp
function PopUpShow(){
	$("#popup1").show();
}

//Функция скрытия PopUp
function PopUpHide(){
	$("#popup1").hide();
}

var last;
window.onload = function () {
	var divB = document.getElementsByClassName("typeB");
	for (var i=0; i<divB.length; i++)
	{
		divB[i].onclick = function () {
		var j = 0;
		var div = document.getElementsByClassName("txt");
		for (var i=0; i<divB.length; i++)
		{
			if(divB[i] == this)
				j = i;
		}
		document.getElementById('table').innerText = "";
		const div1 = document.createElement('div');
		const div2 = document.createElement('ul');
		div1.innerText = divB[j].innerText;
		div2.innerText = div[j].innerText;
		var ult = div1.close;
		document.getElementById('table').appendChild(div1);
		document.getElementById('table').appendChild(div2);
		};
	}
	var divA = document.getElementsByClassName("typeA");
	for (var i=0; i<divA.length; i++)
	{
		divA[i].onclick = function() {
			var div = document.getElementsByClassName("txt");
			last = this;
		};
	}
}

var last1;
function add(){
	var method = document.querySelector("[name='type']:checked").value;
	if(method == "Информация")
	{	const div = document.createElement('div');
		const ul = document.createElement('ul');
		const li = document.createElement('li');
		const div1 = document.createElement('div');
		div.innerText = document.forms["form"].elements["text1"].value;
		div1.innerText = document.forms["form"].elements["text2"].value;
		div1.classList.add("txt");
		div.classList.add("Content");
		div.classList.add("typeB");
		ul.classList.add("Container");
		li.classList.add("Node");
		li.classList.add("ExpandLeaf");
		li.appendChild(div);
		li.appendChild(div1);
		ul.appendChild(li);
		last.parentNode.insertBefore(ul, last.nextSibling);
		a();

		ul.onclick = function () {
		document.getElementById('table').innerText = "";
		const div = document.createElement('div');
		div.innerText = document.forms["form"].elements["text1"].value;
		document.getElementById('table').appendChild(div);
		const div1 = document.createElement('div');
		div1.innerText = document.forms["form"].elements["text2"].value;
		document.getElementById('table').appendChild(div1);
		};
	}

	if(method == "Раздел"){
		const div = document.createElement('div');
		const ul = document.createElement('ul');
		const li = document.createElement('li');
		const div1 = document.createElement('div');
		div.innerText = document.forms["form"].elements["text1"].value;
		div.classList.add("Content");
		div.classList.add("typeA");
		ul.classList.add("Container");
		li.classList.add("Node");
		li.classList.add("ExpandLeaf");
		if(last1 != null){
			last1.classList.remove("ExpandLeaf");
			last1.classList.add("ExpandOpen");
		}
		last1 = li;
		div1.classList.add("Expand");
		li.appendChild(div1);
		li.appendChild(div);
		ul.appendChild(li);
		last.parentNode.insertBefore(ul, last.nextSibling);
		a();
		$('.typeA').click(function() {
			last = this;
		});
	}
	event.preventDefault();
	$.magnificPopup.close();
}

function a(){
	$('.typeA').click(function() {
		$('.typeA').removeClass('blue');
		$(this).addClass('blue');
	});

	$('.typeB').click(function() {
		$('.typeB').removeClass('red');
		$(this).addClass('red');
	});
}

$(document).ready(function () {
	a();
});