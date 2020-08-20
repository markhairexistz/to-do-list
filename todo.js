//selector
const todoInput = document.querySelector('#todoInput');
const btnAdd = document.querySelector('#btnAdd');
const todoList = document.querySelector('#todoList');
const time = document.querySelector('#time');


//Event Listener
btnAdd.addEventListener('click', addTodo);

todoList.addEventListener('click',Target);

//functions


//ADD LIST
function addTodo(e){

let setTime = time.value;

e.preventDefault();
//add todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo-div');
//add li
const newTodo = document.createElement('li');
newTodo.innerHTML = todoInput.value + " @ "+ setTime;
const reminder = newTodo.setAttribute('reminder',setTime);
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
	click.parentElement.classList.add('done');
}

}

