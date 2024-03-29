const inputBox =document.querySelector(".inputfield input");
const addBtn=document.querySelector(".inputfield button");
const todolist=document.querySelector(".todolist");
const deleteAllBtn=document.querySelector(".footer button");

inputBox.onkeyup = () =>{
	let userData= inputBox.value;
	if(userData.trim() != 0){	
	    addBtn.classList.add("active");
	}else{
		addBtn.classList.remove("active");
	}

}
addBtn.addEventListener("click",()=>{
	let userData =inputBox.value;
	let getLocalStorage=localStorage.getItem("New Todo");
	if(getLocalStorage ==null){
		listArr =[];

	}else{
		listArr=JSON.parse(getLocalStorage);
	}
	listArr.push(userData);
	localStorage.setItem("New Todo",JSON.stringify(listArr));
	showTasks();
	addBtn.classList.remove("active")
})

function showTasks(){
	let getLocalStorage=localStorage.getItem("New Todo");
	if(getLocalStorage ==null){
		listArr =[];

	}else{
		listArr=JSON.parse(getLocalStorage);
	}
	const pendingNumb= document.querySelector(".pendingNumb");
	pendingNumb.textContent=listArr.length;
	if(listArr.length>0){
		deleteAllBtn.classList.add("active");

	}else{
		deleteAllBtn.classList.remove("active");

	}
	let newLiTag='';
	listArr.forEach((element,index)=>{
		newLiTag+=`<li> ${element} <span onclick="deleteTask(${index})";><i class="fa-sharp fa-solid fa-trash"></i></span></li>`;
	});
	todolist.innerHTML=newLiTag;
	inputBox.value=" ";
} 

function deleteTask(index){
	let getLocalStorage=localStorage.getItem("New Todo");
	listArr=JSON.parse(getLocalStorage);
	listArr.splice(index,1);

	localStorage.setItem("New Todo",JSON.stringify(listArr));
	showTasks();
}

deleteAllBtn.addEventListener("click",()=>{
	listArr=[];
	localStorage.setItem("New Todo",JSON.stringify(listArr));
	showTasks();

})
showTasks();
