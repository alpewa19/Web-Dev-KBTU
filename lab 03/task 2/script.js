'use strict';

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

function createTodoItem(text) {
  const li = document.createElement('li');

  const leftContainer = document.createElement('div');
  leftContainer.style.display = 'flex';
  leftContainer.style.gap = '10px';
  leftContainer.style.alignItems = 'center';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done');
  });

  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  leftContainer.appendChild(checkbox);
  leftContainer.appendChild(span);

  li.appendChild(leftContainer);
  li.appendChild(deleteBtn);

  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  list.appendChild(item);

  input.value = '';
});
