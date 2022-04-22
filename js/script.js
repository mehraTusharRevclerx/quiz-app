"use strict";

const quesArr = [
  "Javascript is an _______ language?",
  "What keyword is used to check whether a given property is valid or not?",
  "Which of the following methods is used to access HTML elements using Javascript?",
  "Upon encountering empty statements, what does the Javascript Interpreter do?",
  "Which of the following methods can be used to display data in some form using Javascript?",
];
//"How can a datatype be declared to be a constant type?",
const ans = [
  ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
  ["in", "is in", "exists", "lies"],
  [
    "getElementbyId()",
    "getElementsByClassName()",
    "Both A and B",
    "None of the above",
  ],
  [
    "Throws an error",
    "Ignores the statements",
    "Gives a warning",
    "None of the above",
  ],
  ["document.write()", "console.log()", "window.alert()", "All of the above"],
];
// ["const", "let", "var", "constant"],
const quesRes = [
  "Object-Oriented",
  "in",
  "Both A and B",
  "Ignores the statements",
  "All of the above",
];
// "const",
let i = 0;

const owlCarousel = document.createElement("div");
owlCarousel.classList.add("owl-carousel");
document.querySelector(".card").insertAdjacentElement("beforeend", owlCarousel);

while (quesArr.length > i) {
  let owlHtml = `

    <div class="item">
    <div class="card-body">
    <h4 class="card-title">${quesArr[i]}</h4>
    <button type="button" class="btn btn-outline-dark btn-block w-100 my-2" value="${
      ans[i][0]
    }">${ans[i][0]}</button>
        <button type="button" class="btn btn-outline-info btn-block w-100 my-2" value="${
          ans[i][1]
        }">${ans[i][1]}</button>
        <button type="button" class="btn btn-outline-secondary btn-block w-100 my-2" value="${
          ans[i][2]
        }">${ans[i][2]}</button>
        <button type="button" class="btn btn-outline-primary btn-block w-100 my-2" value="${
          ans[i][3]
        }">${ans[i][3]}</button>
        <p class="card-text">${i + 1} of ${quesArr.length} questions</p>
        </div>

        `;
  const owl = document.querySelector(".owl-carousel");
  owl.insertAdjacentHTML("beforeend", owlHtml);

  //   if (!document.querySelector(".item").classList.contains("active")) {
  //     document.querySelector(".item").classList.add("active");
  //   }
  //   document.querySelector(".owl-nav").classList.remove("disabled");
  //   document.querySelector(".owl-dots").classList.remove("disabled");
  i++;
}
const userRes = [];
const allBtn = document.querySelectorAll(".btn");
[...allBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    userRes.push(btn.value);
    btn.classList.toggle("btn-success");
    btn.classList.toggle("text-white");
    console.log(userRes);
  });
});
let finalAns = [];
const btn = `<button type="button" class="btn btn-success" id="submitBtn" style="margin: 1rem auto; max-width: 100px">Submit</button>`;
document.querySelector(".card").insertAdjacentHTML("beforeend", btn);
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", () => {
  userRes.find((res, i) => {
    if (res === quesRes[i]) {
      finalAns.push(res);
    }
  });

  const resultHtml = `
    <div class="item">
        <div class="card-body text-center">
            <h5 class="card-title">you have answer ${quesArr.length}/${finalAns.length} questions correctly</h5>
            <button class="btn btn-primary reset">reset</button>
        </div>
    </div>
  `;
  document.querySelector(".owl-stage").innerHTML = "";
  const owl = document.querySelector(".owl-carousel");
  owl.insertAdjacentHTML("afterbegin", resultHtml);
  document.querySelector(".owl-nav").style.display = "none";

  submitBtn.style.display = "none";

  document.querySelector(".reset").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload();
    // alert(`out of ${quesArr.length} correct ans are ${finalAns.length}`);
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  document.querySelector(".owl-dots").style.display = "none";
  const nav = document.querySelector(".owl-nav");
  const owlOuter = document.querySelector(".owl-stage-outer");
  //   nav.style.marginLeft = "1rem";
  //   nav.style.marginRight = "1rem";
  nav.style.margin = "1rem";
  //   nav.style.position = "absolute";
  owlOuter.style.position = "relative";
  const prev = document.querySelector(".owl-nav .owl-prev");
  const next = document.querySelector(".owl-nav .owl-next");
  prev.innerHTML = `<button type="button" class="btn btn-primary mr-2 ">prev</button>`;
  next.innerHTML = `<button type="button" class="btn btn-primary mx-3 ">next</button>`;
  //   prev.style.fontSize = "3rem";
  //   next.style.fontSize = "3rem";
  //   prev.style.position = "absolute";
  next.style.position = "absolute";
  next.style.right = "0";
});
