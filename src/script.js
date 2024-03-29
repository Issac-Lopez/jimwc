let mainQuestion = document.querySelector("#main-question");
console.log(mainQuestion);

// spead operator
let questions_arr = [...questions];

// Grab HTML tag for questions to appenchild to main question section

// Pass in the id of an element

const questionMain = () => {
  let q_arr = questions_arr
    .map((question, index) => {
      const { src, quest } = question;
      console.log(src);
      return `
              <div class="question block">
                <h3 class="questionOne">
                  Implement the following <span>${quest}</span> Section
                </h3>
                <img
                  class="question-img-1"
                  src="./${src}"
                  alt="question-2"
                />
              </div>
              <p class="instruct">To indent use <span>[SPACE BAR]</span></p>
              <form action="">
                <div class="user-input">
                  <textarea
                    id="user-res"
                    class="user-response"
                    cols="390px"
                    rows="5"
                  ></textarea>
                </div>
                <br />
                <button id="btn-check" class="btns" type="button">Check Answer</button>
                <div id="message-id">
                  <p class="message"></p>
                </div>
              </form>`;
    })
    .join("");
  mainQuestion.innerHTML = q_arr;

  let btn = document.querySelectorAll(".btns");
  btn.forEach((qBtn, index) => {
    qBtn.addEventListener("click", () => {
      let { answer } = questions_arr[index];
      isMatch(answer.replaceAll(" ", ""), index, mainQuestion);
    });
  });
};
// Question Function
questionMain();

// EVENTS
// btn.addEventListener("click", isMatch);

// Check For Matching User Input
function isMatch(ans, i, mainQuestion) {
  let uResponseOne = document.querySelectorAll(".user-response")[i]; // users response
  console.log(ans);
  // console.log(uResponseOne.value.replaceAll(" ", ""));
  // console.log(questions_arr[1].answerTwo.replaceAll(" ", ""));

  const message = document.querySelectorAll(".message");
  console.log(message);

  if (uResponseOne.value.replaceAll(" ", "") == ans.replaceAll(" ", "")) {
    console.log("Match Found");
    correct(message[i]);
  } else if (
    uResponseOne.value === null ||
    uResponseOne.value.replaceAll(" ", "") != ans.replaceAll(" ", "")
  ) {
    isIncorrect(message[i]);
  }
}

function isIncorrect(message) {
  message.innerHTML = `<p id="incorrect-msg">Incorrect! <br> Please try again</p>`;
}
function correct(message) {
  message.innerHTML = `<p id="level-complete">Level Completed <i class="fa-solid fa-circle-check message-icon"></i></p>`;
}

// arrow function
const scrollTopBtn = document.getElementById("scroll-top-btn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// When the button is clicked, scroll to the top of the document
scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

