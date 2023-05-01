import keyboard from './keyboard.js';
console.log(keyboard);
let isCapsOn = false;


// add main wrapper

const addAppWrap = () => {
    const wrap = document.createElement('div');
    document.body.appendChild(wrap);
    wrap.classList.add('wrap');
}
addAppWrap();
// add title to HTML
const addTitle = () => {
    const title = document.createElement('h1');
    title.textContent = 'Virtual Keyboard';
    const wrap = document.querySelector('.wrap')
    wrap.appendChild(title);
    title.classList.add('title');
}
addTitle();

// add text-area

const addTextArea = () => {
    const textArea = document.createElement('textarea');
    const wrap = document.querySelector('.wrap')
    textArea.setAttribute('autofocus', '');
    wrap.appendChild(textArea);
    textArea.classList.add('textarea');
};
addTextArea();

// add keyboard wrap
const addKeyboardWrap = () => {
     const keyboardWrap = document.createElement('div');
     const wrap = document.querySelector('.wrap')
     wrap.appendChild(keyboardWrap);
     keyboardWrap.classList.add('keyboard');
     keyboardWrap.setAttribute('id','keyboard');
     
};
addKeyboardWrap();
// add additional info
const addInfoContent = () => {
    const infoWrap = document.createElement('div');
    const wrap = document.querySelector('.wrap')
    wrap.appendChild(infoWrap);
    infoWrap.classList.add('info-wrap');
    infoWrap.innerHTML = `
    <p class="info-wrap__content">
        Клавиатура создана в операционной системе Windows
    </p>
    <p class="info-wrap__content">
        Для переключения языка комбинация: левыe ctrl + alt
    </p>`
};
addInfoContent();
// add rows in keyboard
const addRows = () => {
    const rowFirst = document.createElement('div');
    const keyboardWrap = document.querySelector('.keyboard');
    keyboardWrap.appendChild(rowFirst);
    rowFirst.classList.add('keybord__item','row','row-first');

    const rowSecond = document.createElement('div');
    keyboardWrap.appendChild(rowSecond);
    rowSecond.classList.add('keybord__item','row','row-second');

    const rowThird = document.createElement('div');
    keyboardWrap.appendChild(rowThird);
    rowThird.classList.add('keybord__item','row','row-third');

    const rowFourth = document.createElement('div');
    keyboardWrap.appendChild(rowFourth);
    rowFourth.classList.add('keybord__item','row','row-fourth');

    const rowFifth = document.createElement('div');
    keyboardWrap.appendChild(rowFifth);
    rowFifth.classList.add('keybord__item','row','row-fifth');
};
addRows();

// add keys

const addFirstRow = () => {
    for(let i = 0; i < 14; i++) {
      let key = document.createElement('div');
      key.classList.add('key',`${keyboard[i].code}`);
      key.setAttribute('data', `${keyboard[i].code}`);
      key.textContent =  keyboard[i].content;
      document.querySelector('.row-first').appendChild(key);
      let adChar =document.createElement('span');
      adChar.classList.add('aditional-content');
      adChar.textContent =  keyboard[i].aditionalContent;
      key.appendChild(adChar);
    }
    }
    addFirstRow();

const addSecondRow = () => {
    for(let i = 14; i < 29; i++) {
        let key = document.createElement('div');
        key.classList.add('key',`${keyboard[i].code}`);
        key.setAttribute('data', `${keyboard[i].code}`);
        key.textContent =  keyboard[i].content;
        document.querySelector('.row-second').appendChild(key);
        }
    }
    addSecondRow();


const addThirdRow = () => {
    for(let i = 29; i < 42; i++) {
        let key = document.createElement('div');
        key.classList.add('key',`${keyboard[i].code}`);
        key.setAttribute('data', `${keyboard[i].code}`);
        key.textContent =  keyboard[i].content;
        document.querySelector('.row-third').appendChild(key);
        }
    }
    addThirdRow();
const addFourthRow = () => {
    for(let i = 42; i < 55; i++) {
        let key = document.createElement('div');
        key.classList.add('key',`${keyboard[i].code}`);
        key.setAttribute('data', `${keyboard[i].code}`);
        key.textContent =  keyboard[i].content;
        document.querySelector('.row-fourth').appendChild(key);
        }
    }
    addFourthRow();
const addFifthRow = () => {
    for(let i = 55; i < keyboard.length; i++) {
        let key = document.createElement('div');
        key.classList.add('key',`${keyboard[i].code}`);
        key.setAttribute('data', `${keyboard[i].code}`);
        key.textContent =  keyboard[i].content;
        document.querySelector('.row-fifth').appendChild(key);
        }
    }
    addFifthRow();

// add styles for active keys
document.onkeyup= (event) => {
document.querySelectorAll('.key').forEach((element)=> {
   element.classList.remove('active')});
document.querySelector('.key[data="'+ event.code +'"]').classList.add('active');
};

// add events
let keys = [];
const addKeysArrow = () => {keyboard.forEach(element=>{
    keys.push(element.content);
})};
addKeysArrow();
console.log(keys);
const keysArr = document.getElementsByClassName('key');
console.log(keysArr);
let input = document.querySelector('.textarea');

const setLowerCaseKeys = () => {
    for (const key of keysArr) {
      if (key.innerHTML.length === 1) {
        key.innerHTML = key.innerHTML.toLowerCase();
      }
    }
  };
  const setUpperCaseKeys = () => {
    for (const key of keysArr) {
      if (key.innerHTML.length === 1) {
        key.innerHTML = key.innerHTML.toUpperCase();
      }
    }
  };
// KEY events
  
//CLICK events
  //  Spacebar
  keysArr[58].addEventListener('click', () => {
    input.innerHTML += ' '
  });
  
  // Tab
  keysArr[14].addEventListener('click', () => {
    input.innerHTML += '   '
  });
  
  // Enter
  keysArr[41].addEventListener('click', () => {
    input.innerHTML += '\n'
  });
  
  // L-Shift
  keysArr[42].addEventListener('mousedown', () => {
    setUpperCaseKeys()
  });
  keysArr[42].addEventListener('mouseup', () => {
    setLowerCaseKeys()
  })
  
  // R-Shift
  keysArr[54].addEventListener('mousedown', () => {
    setUpperCaseKeys()
  });
  keysArr[54].addEventListener('mouseup', () => {
    setLowerCaseKeys()
  });
  
  //  Capslock
  keysArr[29].addEventListener('click', () => {
    isCapsOn = !isCapsOn;
    if (isCapsOn === true) {
      keysArr[29].classList.add('active')
      setUpperCaseKeys();
    } else {
      keysArr[29].classList.remove('active')
      setLowerCaseKeys();
    }
  });
  
  // Backspace
  keysArr[13].addEventListener('click', () => {
    if (input.innerHTML !== undefined) {
      input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1)
    }
  });
  
  //Del
  keysArr[28].addEventListener('click', () => {
    input.innerHTML = '';
  });
  
  // Display Text
  for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
      if(key.innerHTML !== '▲' && key.innerHTML !== '►' && key.innerHTML !==  '▼' && key.innerHTML !== '◄'){
        key.addEventListener('click', () => input.innerHTML += key.innerHTML)
        }
    }
  }
