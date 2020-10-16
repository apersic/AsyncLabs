window.onload = init();

function init() {
  const field = document.getElementById("field");
  const label = document.getElementById("label");

  if (label !== null) {
    label.addEventListener("focus", () => {
      field.classList.add("active");
      console.log("focus");
    });

    label.addEventListener("blur", () => {
      field.classList.remove("active");
      console.log("blur");
    });
  }
}
