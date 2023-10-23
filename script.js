let userInput = document.getElementById('date');
    userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let today = new Date();

    let y3 = today.getFullYear() - birthDate.getFullYear();
    let m3 = today.getMonth() - birthDate.getMonth();
    let d3 = today.getDate() - birthDate.getDate();

    if (d3 < 0) {
        m3--;
        d3 += getDaysInMonth(today.getFullYear(), today.getMonth() + 1);
    }
    if (m3 < 0) {
        y3--;
        m3 += 12;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months & <span>${d3}</span> days old .`;
}


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}