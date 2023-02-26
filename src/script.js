const message = document.querySelector(".message");

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
      isMatch(answer.replaceAll(" ", ""), index);
    });
  });
};
// Question Function
questionMain();

// EVENTS
// btn.addEventListener("click", isMatch);

// Check For Matching User Input
function isMatch(ans, i) {
  let uResponseOne = document.querySelectorAll(".user-response")[i]; // users response
  console.log(ans);
  // console.log(uResponseOne.value.replaceAll(" ", ""));
  // console.log(questions_arr[1].answerTwo.replaceAll(" ", ""));
  if (uResponseOne.value.replaceAll(" ", "") == ans.replaceAll(" ", "")) {
    console.log("Match Found");
    message.innerHTML = `<p id="level-complete">Level Completed <i class="fa-solid fa-circle-check message-icon"></i></p>`;
  } else if (
    uResponseOne.value === null ||
    uResponseOne.value.replaceAll(" ", "") != ans.replaceAll(" ", "")
  ) {
    isIncorrect();
  }
}

function isIncorrect() {
  message.innerHTML = `<p id="incorrect-msg">Incorrect! <br> Please try again</p>`;
}
