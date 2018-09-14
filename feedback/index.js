const Collection = document.getElementsByClassName('contentform')[0];
const submitBtn = document.getElementsByClassName('button-contact')[0];
const editBtn = document.getElementsByClassName('button-contact')[1];
const output = document.getElementById('output');
var form = Array.from(Collection);


Collection.zip.addEventListener('input', zipCheck);

form.forEach( field => {
  field.addEventListener('change', formCheck);
})

function zipCheck() {
  this.value = this.value.replace (/\D/gi, '').replace (/^0+/, '');
}

function  formCheck() {
  var filled = true;
  form.forEach( (field, i) => {
    if (i === 0 || i === 7 || i === 13) return;
    if (field.value === "") filled = false;
  })
  if (filled == true) {
    submitBtn.removeAttribute('disabled');
    submitBtn.addEventListener('click', editform);
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault(event);
    })
  }
  else {
    if (!submitBtn.hasAttribute('disabled')){
      submitBtn.setAttribute('disabled',"");
      submitBtn.removeEventListener('click', editform);
    }
  }
}

function editform() {
  Collection.classList.add('hidden');
  output.classList.remove('hidden');
  editBtn.addEventListener('click', backToEdit);
  editBtn.addEventListener('click', (event) => {
        event.preventDefault(event);
    })
  document.getElementById('name').innerText = Collection.name.value;
  document.getElementById('lastname').innerText = Collection.lastname.value;
  document.getElementById('company').innerText = Collection.company.value;
  document.getElementById('role').innerText = Collection.role.value;
  document.getElementById('zip').innerText = Collection.zip.value;
  document.getElementById('city').innerText = Collection.city.value;
  document.getElementById('address').innerText = Collection.address.value;
  document.getElementById('subject').innerText = Collection.subject.value;
  document.getElementById('message').innerText = Collection.message.value;
}

function backToEdit() {
  output.classList.add('hdden');
  Collection.classList.remove('hdden');
}
