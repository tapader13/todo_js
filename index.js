let form = document.querySelector('form');
let input = document.querySelector('textarea');
let date = document.querySelector('#inp');
let output = document.querySelector('.output');
let del = document.querySelector('#del');
let button = document.querySelector('button');
// localStorage.clear();
window.addEventListener('load', (e) => {
  let data = localStorage.getItem('postData');
  if (data) {
    output.innerHTML = data;
  }
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
  //   console.log(12);
});

let dleteIcon = (e) => {
  e.parentElement.parentElement.remove();
  saveDataToLocalStorage();
};

let editIcon = (e) => {
  let ans1 = e.parentElement.parentElement;
  let ansh4 = ans1.querySelector('h4');
  let ansp = ans1.querySelector('p');
  ansp.style.display = 'none';
  ansh4.style.display = 'none';
  let ansSave = ans1.querySelector('#save');
  button.style.display = 'none';
  ansSave.style.display = 'inline';
  input.value = ansp.innerText;
  date.value = ansh4.innerText;
  //   console.log(ansh4.innerText);
  saveDataToLocalStorage();
  //   console.log();
};

let saveIcon = (e) => {
  let ans2 = e.parentElement.parentElement;
  let ansP = ans2.querySelector('p');
  let ansh4 = ans2.querySelector('h4');
  ansP.innerText = input.value;
  ansh4.innerText = date.value;
  ansP.style.display = 'inline';
  ansh4.style.display = 'inline';
  e.style.display = 'none';
  button.style.display = 'inline';
  input.value = '';
  date.value = '';
  saveDataToLocalStorage();
};
let str = {};
let store = () => {
  str.text = input.value;
  str.d = date.value;
  //   console.log(str);
};

const validation = () => {
  if (input.value == '' || date.value == '') {
    alert('write something...');
  } else {
    store();
    createPost();
    saveDataToLocalStorage();
  }
};

let createPost = () => {
  output.innerHTML += `
     <div class="secO">
            <h4>${str.d}</h4>
            <p>
              ${str.text}
            </p>
            <div class="icon">
              <i id="del" onclick="dleteIcon(this)" class="fa-solid fa-trash"></i>
              <i id="edit" onclick="editIcon(this)" class="fa-solid fa-pen-to-square"></i>
              <i id="save" onclick="saveIcon(this)" class="fa-regular fa-window-restore"></i>
            </div>
             <hr />
          </div>
          
    `;
  input.value = '';
  date.value = '';
};

let saveDataToLocalStorage = () => {
  localStorage.setItem('postData', output.innerHTML);
};
