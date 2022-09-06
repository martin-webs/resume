const tooltip1 = document.getElementById("tooltip1");
const brushLogo = document.getElementById("brush-logo");
const thankyou = document.getElementById("thankyou");
const skillsetLi = document.querySelectorAll("#skillset li");
const skillShow = document.getElementById("skill-show");
const closeBtn = document.getElementById("close-button");
let mark = "";

/* Show tooltip in the footer */
brushLogo.addEventListener("click", () => {
  tooltip1.classList.toggle("show");
});

skillsetLi.forEach((skill, index) => {
  skill.addEventListener("click", () => {
    const div = document.createElement("div");
    skillShow.appendChild(div);
    div.setAttribute(
      "class",
      "absolute inset-x-1 h-96 overflow-y-scroll p-6 bg-[#1e1e1e] border-4 border-white rounded-lg md:border-8 md:drop-shadow-lg"
    );
    div.innerHTML = `<img src="./img/${index}.jpg" class="max-w-screen" alt="${skill.innerText} example" />`;
    closeBtn.classList.remove("hidden");
    closeBtn.addEventListener("click", () => {
      while (skillShow.firstChild) {
        skillShow.removeChild(skillShow.firstChild);
      }
      closeBtn.classList.add("hidden");
    });
  });
});
