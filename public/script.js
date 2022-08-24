const tooltip1 = document.getElementById("tooltip1");
const brushLogo = document.getElementById("brush-logo");
const thankyou = document.getElementById("thankyou");
const skillsetLi = document.querySelectorAll("#skillset li");
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

skillsetLi.forEach((skill, index) =>
  skill.addEventListener("click", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute(
      "class",
      "absolute top-24 inset-x-1 h-96 overflow-y-scroll p-6 bg-[#1e1e1e] border-4 border-yellow-300 rounded-lg delay-500 md:top-44 md:inset-x-36 md:border-[1rem] md:border-yellow-300 lg:h-2/4"
    );
    div.innerHTML = `<i id="close-button" class="fa-solid fa-circle-xmark sticky right-4 top-0 text-xl text-yellow-300 md:top-0"></i><img src="./img/${index}.jpg" alt="${skill.innerText} example" />`;
    /* Remove pop up */
    const closeBtn = div.children[0];
    closeBtn.addEventListener("click", () => {
      div.remove();
    });
  })
);
