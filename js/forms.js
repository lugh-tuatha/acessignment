const scriptURL = 'https://script.google.com/macros/s/AKfycbxBhIngTwxy0L9XylgzR29_7BC62vrd1ZDGftmYnHPoRKItIMylMoMkea2HLN-zS5gDsQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})