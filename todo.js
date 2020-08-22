//selector
const todoInput = document.querySelector('#todoInput');
const formTodo = document.querySelector('#formTodo');
const todoList = document.querySelector('#todoList');
const time = document.querySelector('#time');

//Event Listener
formTodo.addEventListener('submit', addTodo);
todoList.addEventListener('click',Target);

//functions

//TYPING EFFECT IN ABOUT ME
const texts = ["Markhair's TO DO LIST"];
let count = 0;
let index = 0;
let currentText ="";
let letter = "";

(function type() {
	
	currentText = texts[count];
	letter = currentText.slice(0, ++index);
	document.querySelector("#header").textContent = letter;
	
	
		setTimeout(type,200);
})();

//Time
(function renderTime(){
	let currentTime = new Date();
	let hr = currentTime.getHours();
	let min = currentTime.getMinutes();
	let sec = currentTime.getSeconds();

	let ampm = '';

	if(hr >= 12){
		ampm= 'PM';
	}else{
		ampm = 'AM';
	}

	document.querySelector("#clock").innerHTML ='Clock: '+hr+' : '+min+' : '+sec+' : '+ampm;
	//setTimeout(renderTime,1000)
		setTimeout(renderTime,500);
})();



//ADD LIST
function addTodo(e){
e.preventDefault();
//input time value
let setTime = time.value;
//add todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo-div');
//add li
const newTodo = document.createElement('li');
newTodo.innerHTML = todoInput.value + " @ "+ setTime;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
// addcheck button
const checkButton = document.createElement('button');
checkButton.innerHTML = '<i class="checkbtn fa fa-lg fa-check"></i>';
checkButton.classList.add('check-btn');
//append to todoDiv
todoDiv.appendChild(checkButton);
// add delete button
const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class="delbtn fa fa-lg fa-trash"></i>';
deleteButton.classList.add('delete-btn');
deleteButton.id="deleteBtn";
//append to todoDiv
todoDiv.appendChild(deleteButton);
//append to LI
todoList.appendChild(todoDiv);

//remove input value
todoInput.value ="";
time.value ="";


//return reminder;
//const todoTime = newTodo.getAttribute('reminder');

}



//check or Delete list
function Target(e){
const click = e.target;

//if delete-btn is clicked
if(click.classList[0] === 'delete-btn'){
	//click.parentElement.remove();
	
	click.parentElement.classList.add('fall');
	click.parentElement.addEventListener('transitionend', function(){
	click.parentElement.remove();
	})

}

//if check-btn is clicked

if(click.classList[0] === 'check-btn'){
	if(click.parentElement.classList.contains('done')){
		click.parentElement.classList.remove('done');
	}else{
		click.parentElement.classList.add('done');	
	}
}

}

