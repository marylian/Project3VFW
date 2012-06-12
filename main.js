//activity 3
// Visual Frameworks 
//Marylia Nieves
//6-14-12

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function () {
	//getElementByID Function
	function getValue(x) {
		var taskData = document.getElementById(x);
		return taskData;
	}

	//Create select field element and populate with options		
	function makeTask(){
		var searchTag=document.getElementsByTagName("form"), 
		select=getValue('selectItem'),
		createItem=document.createElement('select');
		createItem.setAttribute("id", "tasks");
		for (var i=0, j=taskList.length; i<j; i++){
			var initiateTask=document.createElement('option');
			var taskText=taskList[i];
			initiateTask.setAttribute("value", taskText);
			initiateTask.innerHTML=taskText;
			createItem.appendChild(initiateTask);
		}
		select.appendChild(createItem);
	}
	
	//Find which checkbox is checked
	function getCheckedBox(){
		var check=document.forms[0].weekday;
		for(var i=0; i<check.length; i++){
			if(check[i].checked){
				dayValue=check[i].value;
			}
		}
	}

	//Set Link & Submit click events
	function submitData(){
		var id=Math.floor(Math.random()*53211245);
		getCheckedBox();
		var task={};
		task.weekday=["Day: ", dayValue];
		task.subject=["Subject: ", getValue('sub').value];
		task.period=["Period: ", getValue('period').value];
		task.age=["Age: ", getValue('age').value];
		task.tasks=["Tasks to be performed: ", getValue('tasks').value];
		task.date=["Due date: ", getValue('duedate').value];
		task.comments=["Your comments: ", getValue('comments').value];
		alert("Task has been saved");
		localStorage.setItem(id, JSON.stringify(task));
	}
	
	//Writes data from localStorage to the browser
	function getData(){
		alert("get data is working");
		var makeDiv=document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList=document.createElement('ul');
		console.log(makeList);
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli=document.createElement('li');
			var linksLi=document.createElement('li');
			makeList.appendChild(makeli);
			var key=localStorage.key(i);
			var value=localStorage.getItem(key);
			var obj=JSON.parse(value);
			var subUnList=document.createElement('ul');
			makeli.appendChild(subUnList);
			for (var x in obj){
				var makesubli=document.createElement('li');
				subUnList.appendChild(makesubli);
				var optSubText=obj[x][0]+" "+obj[x][1];
				makesubli.innerHTML=optSubText;
				makeSubList.appendChild (linksLi);
			}
			makeItemLinks (localStorage.key (i),linksLi);//create our edit and delete buttons for each item in local storage.
		}
	}
	//Make Item Links
	//Create the edit and delete links for each stored item when displayed.
	function makeItemLinks (key,linksLi) {
		//add edit single link
		var editLink=document.createElement('a');
		editLink.href= "#"; 
		editLink.key=key; 
		var editText= "Edit Task";
		//editLink.addEventListener("click",editItem);
		editLink.innerHTML=editText;
		linksLi.appendChild(editLink);
		
		//add a line break
		var breakTag=document.createElement('br');
		linksLi.appendChils(breakTag);
		
		//add delete single item link
		var deleteLink = document.createElement ('a');
		deleteLink.href= "#";
		deleteLink.key=key;
		var deleteText= "Delete Task";
		//deleteLink.addEventListener("click",deleteItem);
		deleteLink.innerHTML=deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	//Clears the data from localStorage
	function clearData(){
		if (localStorage.length===0){
			alert("There is no data to clear.");
		}
		else{
			localStorage.clear();
			alert("All data in localStorage has been cleared.");
			window.location.reload();
			return false;
		}
	}
	var displayLink=getValue('displaytask');
	displayLink.addEventListener("click", getData);
	
	var clearLink=getValue('cleartask');
	clearLink.addEventListener("click", clearData);
	
	//Variable defaults
	var taskList=[" --Choose a Task-- ", "Create Tests", "Look for Project Ideas", "Complete Lesson Plans", "Grade Papers", "Complete Paperwork", "Contact Parents", "Buy School Supplies"],
	 dayValue;
	makeTask(); //Calling the function that was created above.

	var submitButton=getValue('tasksubmit');
	submitButton.addEventListener("click", submitData);
});