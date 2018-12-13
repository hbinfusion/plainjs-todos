document.addEventListener('DOMContentLoaded', function(){
    var theForm = document.getElementById('the-form')
    
    theForm.addEventListener('submit', function(event){
        
        //prevents the default page from reloading
        event.preventDefault()

        //target the new todo input field
        var newTodoFieldInput = document.getElementById('new-todo-field')

        //store the value of the input field
        var newTodo = newTodoFieldInput.value

        //create the new list item
        var newListItem = document.createElement('li')

        //add the todo to the list item text
        newListItem.innerText = newTodo

        var listOfTodos = document.getElementById('list-of-todos')

        listOfTodos.appendChild(newListItem)

        document.getElementById('the-form').reset()
    })
})