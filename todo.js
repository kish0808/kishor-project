$(document).ready(function(){
	
	
	$('#addItem').on('click',addItem);
	$('#todos').on('change','.completeItem',completeItem);
	$('#todos').on('click','.deleteItem',deleteItem);
	$('#todos').on('click','.todoText',StartEditing);
	
	$('#todos').on('click','.saveItem',StopEditing);
	$('#newTodo').on('keypress',function(event){
		
		if(event.which ===13){
			addItem();
			event.preventDefault();
			
		}
	});
	
	
	
	function StartEditing(event){	
		var TaskLi=$(this).parent();
		
		 var currentText =TaskLi.parent().find('.todoText').text();
		TaskLi.find('.editText').val(currentText);//set the value current text
		TaskLi.find('.editText').show();	
          TaskLi.find('.saveItem').show();			 
		TaskLi.find('.todoText').hide();//hide orignal  or current text
		
		
	}
	
	
	
	
	
	function StopEditing(event){
	
$(this).hide();

var TaskLi=$(this).parent();
var newValue= TaskLi.parent().find('.editText').val();
TaskLi.find('.editText').hide();
TaskLi.find('.todoText').text(newValue);
TaskLi.find('.todoText').show();



	
	}
	
	
	
	
	function addItem(){
	

       var newTodotext =$('#newTodo').val();
	   
	   $('#todos').append('<li><input class="completeItem" type="checkbox"><span class="todoText">'+ newTodotext+ 
	   '</span><input type="text" class="editText"><button class="btn btn-success saveItem">save</button><span class="glyphicon glyphicon-trash deleteItem"> </Span></li>');
	   $('#newTodo').val("");
	   
	
	}
	
	function deleteItem(){
		$(this).parent().remove();
		
	}
	
	
	function completeItem(){
		
		$(this).parent().toggleClass('done');
		
		
		
	}
	
	
	
});
