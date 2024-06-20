let input = document.querySelector("input");
let p = document.querySelector("p");
let button = document.querySelector("button");

p.textContent = localStorage.getItem("ism");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let value = input.value;

    localStorage.setItem("ism", value);
    
    p.textContent = localStorage.getItem("ism");
});