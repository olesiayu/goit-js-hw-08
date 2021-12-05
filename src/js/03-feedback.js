// npm i lodash.throttle
// import throttle from 'lodash.throttle'

const STORAGE_KEY = `feedback-msg`;
const formData = {};

const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`.feedback-form textarea`);


form.addEventListener(`submit`, onFormSubmit);
// textarea.addEventListener(`input`, throttle(onTextareaInput, 500));
textarea.addEventListener(`input`, onTextareaInput);

form.addEventListener(`input`, e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    // stringify
})

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
 }


function onTextareaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {        
        textarea.value = savedMessage;
        // нужно будет распарсить
    }
}