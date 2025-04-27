const form = document.getElementById("form");
const errMsg = document.getElementById("errMsg");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        errMsg.textContent = "All fields are required.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errMsg.textContent = "Please enter a valid email.";
        return;
    }

    errMsg.textContent = "";
    alert("Form submitted successfully!");
    form.reset();
});

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task === "") return;
}
const li = document.createElement("li");
li.innerHTML = `${task} <button onclick="removeTask(this)">Delete</button>`;
document.getElementById("taskList").appendChild(li);
input.value = "";

function removeTask(btn) {
    btn.parentElement.remove();
}