// add title to HTML
const addTitle = () => {
    const title = document.createElement('h1');
    title.textContent = 'Virtual Keyboard';
    document.body.appendChild(title);
    title.classList.add('title');
}
addTitle();

// add text-area

const addTextArea = () => {
    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.classList.add('input-wrap');
};
addTextArea();

// add keyboard wrap
const addKeyboardWrap = () => {
     const keyboardWrap = document.createElement('div');
     document.body.appendChild(keyboardWrap);
     keyboardWrap.classList.add('keyboard-wrap');
     
};
addKeyboardWrap();
// add additional info
const addInfoContent = () => {
    const infoWrap = document.createElement('div');
    document.body.appendChild(infoWrap);
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

