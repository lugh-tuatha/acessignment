const scriptURL = 'https://script.google.com/macros/s/AKfycbxBhIngTwxy0L9XylgzR29_7BC62vrd1ZDGftmYnHPoRKItIMylMoMkea2HLN-zS5gDsQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

function showPopup() {
  let name = document.getElementById("user-name").value;
  let repoLink = document.getElementById("repo-link").value;

  if (!name || !repoLink) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all the required fields',
    })
  } else {
    Swal.fire(
      'Good job!',
      'Thank you for submitting your work',
      'success'
    )
  }
}

function popUp() {
  let email = document.getElementById("email-address").value;
  let language = document.getElementById("language").value;
  let question = document.getElementById("question").value;

  if (!email || !language || !question) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all the required fields',   
    })
  } else {
    Swal.fire(
      'Thank you!',
      "we'll get back to you as soon as possible",
      'success'
    )
  }
}

function subPopup() {
  Swal.fire(
    "",
    "Thank you for subscribing to our newsletter!",
    'success'
  )
}