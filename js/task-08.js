const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();


  const formData = new FormData(event.currentTarget);
  const dataObject = {};
  const formEl = event.currentTarget;
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;


  formData.forEach((value, name) => {
    dataObject[name] = value;

  })


  if ((email === "") || (password === "")) {
    alert("All field must be filed");
  } else{
    console.log(dataObject);
    formEl.reset();
  }

}
