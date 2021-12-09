import throttle from 'lodash.throttle';

const STORAGE_KEY = `feedback-form-state`;
const formData = {};

const form = document.querySelector(`.feedback-form`);
const email = document.querySelector(`.feedback-form input`);
const message = document.querySelector(`.feedback-form textarea`);

form.addEventListener(`submit`, onFormSubmit);
form.addEventListener(`input`, throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
 }

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);    

    if (savedMessage) {
        const parseSavedMessage = JSON.parse(savedMessage);
        email.value = parseSavedMessage.email;
        message.value = parseSavedMessage.message;
    }
}