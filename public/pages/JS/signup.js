const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signup = document.querySelector("#signup");

const signupUser = async () => {

    const email = emailInput.value;
    const password = passwordInput.value;

    const res = await fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) {
        window.location.href = "/pages/login.html";
    }
};





signup.addEventListener("click", () => {
    signupUser();
});