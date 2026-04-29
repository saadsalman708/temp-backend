const special = document.querySelector(".special");

special.addEventListener("click", () => {
    if (special.textContent === "Click and get a joke at your own risk") {
        special.textContent = "You Clicked that button! Huh... Finally you’re doing something with your life. Hope your father won't be disappointed this time. 🤞";
    } else {
        special.textContent = "Click and get a joke at your own risk";
    }
});

const repeat = ()=> setTimeout(() => {
    if (special.textContent === "Click and get a joke at your own risk") {
        special.textContent = "You Clicked that button! Huh... Finally you’re doing something with your life. Hope your father won't be disappointed this time. 🤞";
    } else {
        special.textContent = "Click and get a joke at your own risk";
    }
    repeat();
}, 5000);

repeat();