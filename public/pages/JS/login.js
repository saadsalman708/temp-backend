const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const login = document.querySelector("#login");

const loginUser = async () => {

    const email = emailInput.value;
    const password = passwordInput.value;

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) {
        window.location.href = "/pages/loggedin.html";
    }
};





login.addEventListener("click", () => {
    loginUser();
});