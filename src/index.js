/* eslint-disable no-console */

import './style.css';
import List from './store.js';
import postData from './api.js';

let id = '';
let url = '';
postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', { name: 'Awesome Games' })
  .then((data) => {
    const mike = data.result.split(' ');
    for (let x = 0; x < mike.length; x += 1) {
      if (mike[x] === 'ID:') { id = mike[x + 1]; }
    }
    url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  })
  .catch((error) => {
    console.error('Error: ', error);
  });

const leader = new List();

const hold = document.querySelector('.table');

let count = 0;
const addToPage = (name, score) => {
  const maindiv = document.createElement('div');
  const message = document.createElement('p');

  hold.append(maindiv);
  maindiv.append(message);

  maindiv.setAttribute('class', 'fields');
  message.innerHTML = `${name}: ${score}`;
  leader.addToEnd(name, score);
  if (count % 2 === 0) { maindiv.style.backgroundColor = 'grey'; }
  count += 1;
};

const form = document.getElementById('forms');
const add = document.getElementById('adding');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

add.addEventListener('click', () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  if ((name.value !== '') && (score.value !== '')) {
    addToPage(name.value, score.value);
    const entry = {
      user: name.value,
      score: score.value,
    };
    postData(url, entry)
      .catch((error) => {
        console.error('Error: ', error);
      });
  }
});

const refresh = document.getElementById('refreshButton');

refresh.addEventListener('click', () => {
  const requestURL = url;
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = () => {
    const nextup = request.response;
    nextup.result.forEach((element) => {
      addToPage(element.user, element.score);
    });
  };
});