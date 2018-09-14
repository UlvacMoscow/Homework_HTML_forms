const taskAll = document.getElementsByTagName('input');
const list = document.getElementsByClassName('list-block')[0];
const result = document.getElementsByTagName('output')[0];
var total = 0;
var counter = 0;

for (let item of taskAll) {
  total++;
  if (item.checked) {
    counter++;
  }
  item.addEventListener('click', check);
}

result.value = `${counter} из ${total}`;

function check() {
  if (this.checked) {
    counter++;
  } else {
    counter--;
  }

  if (counter === 4) {
    list.classList.add('complete');
  } else {
    list.classList.remove('complete');
  }
}
