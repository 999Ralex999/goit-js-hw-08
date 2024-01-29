import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

const updateFormData = throttle(event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}, 500);

const handleFormSubmit = event => {
  event.preventDefault();

  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
};

const populateForm = () => {
  Object.entries(formData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
};

form.addEventListener('input', updateFormData);
form.addEventListener('submit', handleFormSubmit);

document.addEventListener('DOMContentLoaded', populateForm);
