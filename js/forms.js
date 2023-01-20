const scriptURL = 'https://script.google.com/macros/s/AKfycbxBhIngTwxy0L9XylgzR29_7BC62vrd1ZDGftmYnHPoRKItIMylMoMkea2HLN-zS5gDsQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

function showPopup() {
  Swal.fire(
  'Good job!',
  'Thank you for submitting your work',
  'success'
  )
}

function popUp() {
  Swal.fire(
  'Thank you!',
  "we'll get back to you as soon as possible",
  'success'
  )
}

