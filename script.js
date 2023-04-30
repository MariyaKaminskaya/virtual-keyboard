import keyboard from './keyboard.js';
console.log(keyboard);

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
// add styles for active/removed keys
document.onkeydown= (event) => {
document.querySelectorAll('.key').forEach((element)=> {element.classList.remove('active')});
document.querySelector('.key[data="'+ event.code +'"]').classList.add('active');
}
