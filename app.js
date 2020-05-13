function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //Check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      }else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else{
          parent.style.animation = "shake 0.5s ease"
      }
      //get rid of animation
      parent.addEventListener('animationend', () => {
        parent.style.animation = "";
      })
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    error("rgb(189, 87,87)");
    return false;
  } else {
    error("aqua");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("aqua");
    return true;
  } else {
    error("rgb(189, 87,87)");
    return false;
  }
}

function validateNumber(number) {
  const validation = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
  if (validation.test(number.value)) {
    error("aqua");
    return true;
  } else {
    error("rgb(189, 87,87)");
    return false;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  parent.classList.add("inactive");
  nextForm.classList.remove("inactive");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
