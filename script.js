const main = document.querySelector("main");
const faqAnswers = main.querySelectorAll(".answer");
const minusSigns = main.querySelectorAll(".minus-sign");

main.addEventListener("click", (event) => {
     const plusSign = event.target.closest(".plus-sign");
     const minusSign = event.target.closest(".minus-sign");

     if (plusSign || minusSign) {
          const questionBox = event.target.closest(".question-box");
          const answer = questionBox.nextElementSibling;
          answer.classList.toggle("show");
          const plus = questionBox.querySelector(".plus-sign");
          const minus = questionBox.querySelector(".minus-sign");

          plus.style.display = answer.classList.contains("show") ? "none" : "block";
          minus.style.display = answer.classList.contains("show") ? "block" : "none";
     }
});
