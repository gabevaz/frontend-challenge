const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const doggoName = document.getElementById("doggo-name");
const doggoBreed = document.getElementById("doggo-breed");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirm-email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const successModal = document.getElementById("modal-success");
const errorModal = document.getElementById("modal-error");

const formItems = document.getElementsByClassName("form__control");

initFormListeners(form);
initCookieBanner();
populateDoggoBreedSelect();

function initFormListeners(formToInit) {
  formToInit.addEventListener("submit", (e) => {
    e.preventDefault();

    for (var i = 0; i < formItems.length; i++) {
      formItems[i].classList.remove('error');
      formItems[i].classList.remove('success');
    }

    if (validateAllInputs()) {
      sendInfos(
        firstName.value,
        lastName.value,
        doggoName.value,
        doggoBreed.value,
        email.value,
        confirmEmail.value,
        password.value,
        confirmPassword.value
      )
    }
  });
}

function initModals(modalToInit) {
  let closeButtons = document.getElementsByClassName("modal__close");

  for (let el of closeButtons) {
    el.onclick = function () {
      modalToInit.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == successModal || event.target == errorModal) {
      modalToInit.style.display = "none";
    }
  };
}

function initCookieBanner() {
  if (document.cookie === 'accepted') {
    let cookieBanner = document.getElementById("cookie-banner");
    let cookieMask = document.getElementById("cookie-mask");

    cookieBanner.style.display = "none";
    cookieMask.style.display = "none";
  }
  
  let acceptCookiesButton = document.querySelector("#cookie-banner .button__primary");
  acceptCookiesButton.onclick = function () {
    document.cookie = 'accepted';

    let cookieBanner = document.getElementById("cookie-banner");
    let cookieMask = document.getElementById("cookie-mask");

    cookieBanner.style.display = "none";
    cookieMask.style.display = "none";
  }

  let rejectCookiesButton = document.querySelector("#cookie-banner .button__secondary");
  rejectCookiesButton.onclick = function () {
    let cookieBanner = document.getElementById("cookie-banner");
    let submitButton = document.querySelector("form button");
    let cookieMask = document.getElementById("cookie-mask");

    submitButton.disabled = true;
    cookieBanner.style.display = "none";
    cookieMask.style.display = "none";
  };
}

function populateDoggoBreedSelect() {
  fetch("https://api.devnovatize.com/frontend-challenge")
    .then(
      function (response) {
        if (!response.ok) {
          console.log("Error calling external API. Status Code: " +
            response.status);
          return;
        }

        response.json().then(function (data) {
            let orderData = data.sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
          })
          var selectElem = document.getElementById("doggo-breed");
          fillSelectElem(selectElem, orderData);

        });
      }
    )
    .catch(function (err) {
      console.log("Fetch Error : ", err);
    });
}

function fillSelectElem(selectElem, dataToFill) {
  dataToFill.forEach((element) => {
    var optionElem = document.createElement("option");
    optionElem.innerHTML = element;

    if (element.toLowerCase() === "labernese") {
      optionElem.setAttribute("selected", "selected");
    }
    selectElem.appendChild(optionElem);
  });
}

function validateAllInputs() {
  let allInputValids =
    validateInput(firstName) &&
    validateInput(lastName) &&
    validateInput(doggoName) &&
    validateInput(doggoBreed) &&
    validateInput(email, validateEmail) &&
    validateInput(confirmEmail, function (value) { return value === email.value.trim(); }) &&
    validateInput(password, validatePassword) &&
    validateInput(confirmPassword, function (value) { return value === password.value.trim(); });

  return allInputValids;
}

function validateInput(element, validationFunction) {
  let inputValid = isInputValid(element, validationFunction);

  inputValid ? setSuccessInput(element) : setErrorInput(element);

  return inputValid;
}

function isInputValid(element, validationFunction) {
  let value = element.value.trim();

  return !(value === "" || (validationFunction && !validationFunction(value)));
}

function validateEmail(email) {
  let re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // 8 chars, lower, upper and digits
  return re.test(String(email));
}

function validatePassword(password) {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; // 8 chars, lower, upper and digits
  return re.test(String(password));
}

function setErrorInput(input) {
  const formControl = input.parentElement.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccessInput(input) {
  const formControl = input.parentElement.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

function displaySuccessModal() {
  initModals(successModal);
  successModal.style.display = "block";
}

function displayErrorModal(errorType) {
  var paragraph = document.getElementById("modal-error-message");
  paragraph.textContent = errorType;
  initModals(errorModal);
  errorModal.style.display = "block";
}

function sendInfos(name, lastName, doggoName, doggoBreed, email, confirmEmail, password, confirmPassword) {
  const data = {
    "first-name": name,
    "last-name": lastName,
    "doggo-name": doggoName,
    "doggo-breed": doggoBreed,
    "email": email,
    "confirm-email": confirmEmail,
    "password": password,
    "confirm-password": confirmPassword
  };

fetch("https://api.devnovatize.com/frontend-challenge", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.status === 201) {
      displaySuccessModal();
    }
    else if (response.status === 400) {
      response.json().then(text => {displayErrorModal(text.error)});
    }
  })
  .catch((error) => {
    console.log("Fetch Error : ", error);
    displayErrorModal();
  })
}