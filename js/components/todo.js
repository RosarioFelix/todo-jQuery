'use strict'

const TodoItem =(data,update) =>{
  const todo = $('<div class = "todo">');
  const checkbox = $('<input  class = "check-box" type = "checkbox">');
  const span = $('<span> ' + data.text + ' </span>');
  const remove = $('<button> Remove</button>');

  todo.append(checkbox);
  todo.append(span);
  todo.append(remove);

  checkbox.on('change', (e) =>{
    data.completed = !data.completed;
    update();
  });

  remove.on('click', (e) =>{
    const idx = state.todos.map( x => x.test).indexOf(data.text);
    state.todos.splice(idx,1);
    update();
  })
  return todo;
}

const reRender = (todoList,completedList) =>{
  todoList.empty();
  completedList.empty();
  state.todos.forEach(todo =>{
    if(!todo.completed){
      todoList.append(TodoItem(todo, _ =>{ reRender(todoList,completedList);}));
    }else{
      completedList.append(TodoItem(todo, _ => { reRender(todoList,completedList);}));
    }
  });
}

const Todo = () =>{
  const parent = $('<div class = "container-white"></div>');
  const input = $('<input id ="input-item" type="text" placeholder = "Ingrese Tarea"/>');
  const title = $('<h3>To Do Items:</h3>');
  const list = $('<div class ="list" ></div>');
  const hr = $('<hr>');
  const completedTitle = $('<p>Completed Items<p>');
  const completedList = $('<div class = "complete"></div>');

  parent.append(input);
  parent.append(title);
  parent.append(list);
  parent.append(hr);
  parent.append(completedTitle);
  parent.append(completedList);

 input.on('keypress',(e) =>{
   if(e.which === 13){
     if(input.val() != ""){
       state.todos.push({
         text : input.val(),
         completed:false
       });
       input.val('');
       reRender(list,completedList)
     }
   }
 });
 return parent;
};
