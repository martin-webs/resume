const tooltip1 = document.getElementById("tooltip1");
const brushLogo = document.getElementById("brush-logo");
const thankyou = document.getElementById("thankyou");
const skillsetLi = document.querySelectorAll("#skillset li");
const skillShow = document.getElementById("skill-show");
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
    skillShow.appendChild(div);
    div.setAttribute(
      "class",
      "absolute inset-x-1 h-96 overflow-y-scroll p-6 bg-[#1e1e1e] border-4 border-yellow-300 rounded-lg md:border-[1rem] md:border-yellow-300"
    );
    div.innerHTML = `<img src="./img/${index}.jpg" class="max-w-screen" alt="${skill.innerText} example" />`;
    skillShow.innerHTML +=`<i id="close-button" class="absolute -inset-7 fa-solid fa-circle-xmark text-4xl text-yellow-300 fixed  text-xl"></i>`;
    /* Remove pop up */
    // const closeBtn = skillShow.childNodes[1];
    const closeBtn = document.getElementById("close-button");
    const skillShowChildren = skillShow.children;
    closeBtn.addEventListener("click", () => {
      console.log(skillShowChildren);
      // skillShow.removeChild(skillShowChildren);
      while(skillShow.firstChild) {
        console.log('child');
        skillShow.removeChild(skillShow.firstChild);
      }
    });
  })
);
