function ValidityState(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgBox = document.getElementById("message");

    let message = '';

    if (email === '') {
        message = "Please enter an E-Mail";
        msgBox.style.color = 'red';
} else if (password === '') {
    message = "Password must be at least 8 characters";
    msgBox.style.color = 'red';
}else if (age === '') {
    message = "Age must be between 12 and 50";
    msgBox.style.color = 'red';
}
} 