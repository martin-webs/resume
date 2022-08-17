const tooltip1 = document.getElementById("tooltip1");
const brushLogo = document.getElementById("brush-logo");
const thankyou = document.getElementById("thankyou");
const skillset = document.querySelectorAll("#skillset li");
let mark = "";

/* Show tooltip in the footer */
brushLogo.addEventListener("click", () => {
  tooltip1.classList.toggle("show");
});

/* Create exclamation mark on footer */
function createExclamationMark() {
  mark = document.createElement("span");
  mark.innerText = "!";
  mark.style.color = "#f8a839";
  mark.style.fontWeight = "bold";
  thankyou.appendChild(mark);
  if (thankyou.childElementCount > 0) {
    thankyou.removeEventListener("mouseover", createExclamationMark);
  }
}

thankyou.addEventListener("mouseover", createExclamationMark);

/* Show skill in a pop up */
skillset.forEach((skill, index) =>
  skill.addEventListener("click", () => {
    const divContent = `<div class="absolute top-[18rem] left-0 right-0 m-auto w-[20rem] h-[20rem] overflow-y-scroll bg-[#1e1e1e] p-6  md:w-[35rem] md:top-[20rem]"><i id="close-button" class="fa-solid fa-circle-xmark text-xl text-white float-right"></i> <img src="./img/${index}.jpg" alt="html-code"></div>`;
    const div = document.createElement("div");
    div.innerHTML = divContent;
    document.body.appendChild(div);
    /* Remove pop up */
    const closeBtn = div.childNodes[0].childNodes[1];
    closeBtn.addEventListener("click", () => {
      div.remove();
    });
  })
);
