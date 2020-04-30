var listiki = []; 

// Скрыть/показать все списки
function hideAll(hide) { 
  for (let listik of listiki) { 
    if (hide) listik.classList.add('collapsed'); 
    else listik.classList.remove('collapsed'); 
  }
}

// Скрыть показать конкретный список (срабатывает по клику на название)
function toggle(event) { 
  var listik = event.target.parentElement; 
  if (listik.classList.contains('collapsed')) 
    listik.classList.remove('collapsed'); 
  else listik.classList.add('collapsed'); 
}

// Добавить новый элемент в список
function addItem(event) { 
  var listik = event.target.parentElement; 
  var title = listik.getElementsByClassName('title')[0]; 
  var lastItem = event.target.previousElementSibling; 
  var msg = `Добавить элемент в [${title.innerText}]. Введите элемент:`; // Сообщение для пользователя
  var result = window.prompt(msg, lastItem.innerText); // Окно ОК/Отмена с полем ввода
  if (!result) return; 

  let newItem = document.createElement('li'); // Создаем новый пункт списка
  newItem.innerHTML = result; 
  listik.insertBefore(newItem, event.target); 
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('collapseAll').onclick = () => hideAll(true); 
  document.getElementById('expandAll').onclick = () => hideAll(false); 
  listiki = document.getElementsByClassName('list'); 
  for (let listik of listiki) { 
    let title = listik.getElementsByClassName('title')[0]; 
    title.onclick = toggle; 
    
    let add = document.createElement('li'); 
    add.classList.add('add'); 
    add.innerHTML = "Пополнить список"; 
    add.onclick = addItem; 

    listik.appendChild(add); 
  }
});