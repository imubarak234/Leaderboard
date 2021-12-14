import _ from 'lodash';
import './style.css';
import List from './store.js';

const leader = new List();
leader.addToEnd('Name', 100);
leader.addToEnd('Name', 20);
leader.addToEnd('Name', 50);
leader.addToEnd('Name', 78);
leader.addToEnd('Name', 125);
leader.addToEnd('Name', 77);
leader.addToEnd('Name', 42);

const hold = document.querySelector('.table');

let count = 0;
const addToPage = (name, score) => {
  const maindiv = document.createElement('div');
  const message = document.createElement('p');

  hold.append(maindiv);
  maindiv.append(message);

  maindiv.setAttribute('class', 'fields');
  message.innerHTML = `${name}: ${score}`;
  if(count % 2 == 0)
  maindiv.style.backgroundColor = 'grey';
  count += 1;
}

leader.Lists.forEach((element) => {
  addToPage(element.Name, element.Score);
});

const form = document.getElementById('forms');
const add = document.getElementById('adding');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //console.log(event.target);
});

add.addEventListener('click', (e) => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  if((name.value != '') && (score.value != ''))
  addToPage(name.value, score.value);
})

