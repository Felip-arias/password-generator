// Función para generar la contraseña

const generatePassword = (base_password, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base_password.length);
        password += base_password.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    let base_password = "abcdefghijklmnñopqrstuvwxyz";
    const numbers = "01234567891011121314151617181920";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><#";
    const mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    if (checkbox1.checked) base_password += numbers;

    if (checkbox2.checked) base_password += symbols;

    if (checkbox3.checked) base_password += mayus;

    generatedPassword.innerText = generatePassword(base_password, length);
};

window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        generate();
    });
});