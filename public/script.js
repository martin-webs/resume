const tooltip1 = document.getElementById("tooltip1");
const brushLogo = document.getElementById("brush-logo");
const thankyou = document.getElementById("thankyou");
let mark = "";

brushLogo.addEventListener("click", () => {
  tooltip1.classList.toggle("show");
});

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
