"use_strict";

let currentDropable=null;

function handler(event){
	let chapter=event.target;
	if (chapter.className=="del_item"||chapter.className=="del"||chapter.className=="add_item"){
		let think=chapter.closest('section');
		if(think.className=='list'){
			if(confirm("Вы уверены, что хотите удалить запись?")){
				think.remove();
				Save();
				return;
				
			}
		}
		if(think.className=='inner_colum'){
			let parent_c=think.parentNode;
			if(parent_c.className=='columns'&&
			confirm("Вы уверены, что хотите удалить колонку?")){
				parent_c.remove();
				Save();
				return;
			}
		}
		if(chapter.className=='add_item'){
			let name_l=prompt("Введите задание", "Новое");
			let string=`<section class="list" >
						<div class="item">
							<div class="schedule" onmousedown="handler(event)" title="Можно перетащить">${name_l}</div>
							<button class="del" onmousedown="handler(event)" title="Удалить запись">X</button>
						</div>
					</section>`;
			let parent_cont=chapter.parentNode;
			while (parent_cont.className!='colum'){
				parent_cont=parent_cont.parentNode;
			}
			parent_cont.insertAdjacentHTML('afterbegin',`${string}`);
			Save();
			return;
		}
	}
	
	
	else {
		
		let father_exs=false;
		let father;
		let droppableBelow;
	
		let thinks=chapter.closest(".list");
		
		thinks.ondragstart = function() {
			return false;
		};
	
		let shiftX = event.clientX - thinks.getBoundingClientRect().left;
		let shiftY = event.clientY - thinks.getBoundingClientRect().top;
		
		let instring=thinks.outerHTML;

		thinks.style.position = 'absolute';
		thinks.style.zIndex = 1000;
		document.body.append(thinks);

		moveAt(event.pageX, event.pageY);

		function moveAt(pageX, pageY) {
			thinks.style.left = pageX - shiftX + 'px';
			thinks.style.top = pageY - shiftY + 'px';
		}
		
		function onMouseMove(event) {
			
			moveAt(event.pageX, event.pageY);
			
			for(let i=0; i<thinks.childNodes.length; i++){
				thinks.childNodes[i].hidden=true;
			}
			thinks.hidden = true;
			let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
			thinks.hidden = false;
			for(let i=0; i<thinks.childNodes.length; i++){
				thinks.childNodes[i].hidden=false;
			}

			if (!elemBelow) return;

			droppableBelow=elemBelow.closest('.colum');
			if (father_exs==false){
				father=droppableBelow;
				father_exs=true;
			}
		}

		document.addEventListener('mousemove', onMouseMove);

		thinks.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseMove);
			thinks.onmouseup = null;
			
			thinks.remove();
			if(droppableBelow){
				let target_spot=droppableBelow;
				target_spot.insertAdjacentHTML('afterbegin',`${instring}`);
			}
			else{
				let target_spot=father;
				target_spot.insertAdjacentHTML('afterbegin',`${instring}`);
			}
		};
		Save();
	}
}

function createNew(event){
	let name_l=prompt("Введите название колонки", "Новая колонка");
	let string=`<section class="columns">
			<section class="inner_colum">
				<h3 class="head">${name_l}
					<button class="del_item" onmousedown="handler(event)" title="Удалить колонку" >X</button>
				</h3>
				<section class="colum">			
					<section class="bottom">
					<center>
						<button class="add_item" onmousedown="handler(event)" title="Создать новую запись" >Создать</button>
					</center>
					</section>
				</section>
			</section>	
		</section>`;
	
	myBtn.insertAdjacentHTML("beforebegin",string);
	Save();
	return;
}

function Save(){
	let string=document.body.innerHTML;
	localStorage.setItem('memory',`${string}`);
	localStorage.setItem('true','true');
}

document.addEventListener("DOMContentLoaded", Load_mem);

function Load_mem(event){
	if(localStorage.getItem('true')=='true'){
		let a=document.querySelector('.container');
		a.remove();
		document.body.insertAdjacentHTML("afterbegin",`${localStorage.getItem('memory')}`);
	}
}



    




