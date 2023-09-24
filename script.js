const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
});
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const reenterPassword = document.getElementById('reenterPassword').value;
    const email = document.getElementById('email').value;

   
    if (username === '' || password === '' || reenterPassword === '' || email === '') {
        alert('Ju lutem plotësoni të gjitha fushat.');
    } else if (password !== reenterPassword) {
        alert('Fjalëkalimi nuk përputhet.');
    } else {
        form.submit();
    }
});


