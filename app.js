
var main = function(){

	$('#content').val(''); //clears the textfield when the page is refreshed


	$(document).on('click','.item',function(){
        
        $('.active-item').removeClass('active-item');
		$(this).toggleClass('active-item');
	});//handles the click event on selected task and higlights it
	
	$(document).on('dblclick','.active-item',function(){

		var doneText = $(this).text();
			addToDoneList(doneText);
	});	//removes a done task and adds it to the done list


	$(document).keypress(function(event){

		if(event.keyCode  === 13)
		{
			var toDo = $('#content').val();
			addToDoList(toDo);
			
		}//handles the enter key event and adds a task to the toDo list

		else if(event.keyCode === 46)
		{
			var doneText = $('.active-item').text();
			addToDoneList(doneText);
		}//handles the delete key event and adds a task to the done list
	});

}

var addToDoList = function(toDo){
	if(toDo === ''){
			alert("Field Cannot be empty");
	}
	else{

		 toDo = $('<li class = "item">').text(toDo);

		 toDo.appendTo('.list');

		 $('#content').val('');
	}
};//function to add the selected task to the todo list


var addToDoneList = function(doneText){
	if(doneText === ''){
		//do nothing
	}
	else{
		var doneItem = $('<li class = "doneItem">').text(doneText);
		doneItem.appendTo('.done');
		$('.active-item').remove();
	}
};//function to remove the done task from to do list and add it to the done list

$(document).ready(main);//Enry point for the app