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

