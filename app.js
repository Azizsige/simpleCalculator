function getInput(a) {
  const textNum = document.getElementById('textNum');
  if (textNum.innerHTML == '0') {
    textNum.innerHTML = a
  } else {
    textNum.innerHTML += a;
  }
  return textNum;
}

function clear() {
  const textNum = document.getElementById('textNum');
  textNum.innerHTML = '0';

  return textNum;
}

// function operateMath(handle) {
//   const textNum = document.getElementById('textNum');
//   if (handle == '+') return textNum.innerHTML;
//   if (handle == '-') return textNum.innerHTML;
//   if (handle == 'x') return textNum.innerHTML;
//   if (handle == '/') return textNum.innerHTML;

//   return handle;
// }

function logic(a, operate, b) {
  const textNum = document.getElementById('textNum');

  if (operate == '+') return textNum.innerHTML = a + b;
  if (operate == '-') return textNum.innerHTML = a - b;
  if (operate == 'x') return textNum.innerHTML = a * b;
  if (operate == '/') return textNum.innerHTML = a / b;

  return;
}


const btnNums = document.querySelectorAll('.button');

btnNums.forEach(btnNum => {
  btnNum.addEventListener('click', function (event) {

    const target = event.target;
    const textNum = document.getElementById('textNum');

    if (target.classList.contains('clear')) {
      clear();
      return;
    }
    if (target.classList.contains('operate')) {
      console.log(target.innerHTML);
      getInput(textNum.innerHTML = '');
      return;
    }
    if (target.classList.contains('equals')) {
      operateNum = target.classList.contains('operate');
      Num = parseInt(btnNum.innerHTML);
      textNum.innerHTML = logic(getInput(Num), operateNum, getInput(Num));
      return;
    }

    getInput(btnNum.innerHTML);
  })
})

// console.log(logic(1,'+',3))