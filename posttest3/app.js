window.onload = () => {
    let button = document.querySelector("#btn");
    let dark = document.querySelector("#gelap");

    dark.addEventListener("click", toggleFunction);
    button.addEventListener("click", calculateBMI);
};
function calculateBMI() {
    let tinggi = parseInt(document
            .querySelector("#tinggi").value);

    let berat = parseInt(document
            .querySelector("#berat").value);
    let hasil = document.querySelector("#hasil");

    if (tinggi === "" || isNaN(tinggi)) 
        hasil.innerHTML = "Mohon Isi Tinggi Badan!";

    else if (berat === "" || isNaN(berat)) 
        hasil.innerHTML = "Mohon Isi Berat Badan!";
        
    else {

        let bmi = (berat / ((tinggi * tinggi) 
                            / 10000)).toFixed(2);
      
        if (bmi < 18.6) hasil.innerHTML =
            `Kurang Berat dengan skor BMI : <span>${bmi}</span>`;
      
        else if (bmi >= 18.6 && bmi < 24.9) 
            hasil.innerHTML = 
                `Normal dengan skor BMI : <span>${bmi}</span>`;
      
        else hasil.innerHTML =
            `Obesitas dengan skor BMI : <span>${bmi}</span>`;
    }
}
var tugel = true;
function toggleFunction(){
    tugel ? darkMode() : lightMode();
    tugel = !tugel;
}
function darkMode() {
    document.getElementById('pranalaGaya').href ="gelap.css"
    alert("Dark Mode Aktif");
}
function lightMode() {
    document.getElementById('pranalaGaya').href ="style.css"
    alert("Light Mode Aktif");
}

