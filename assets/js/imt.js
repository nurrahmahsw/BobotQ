// console.log("Hellooo");

const imt = {
    date: null,
    tinggiBadan: null,
    beratBadan: null,
    hasil: null,
};

function hitung_imt() {
    var tb = document.getElementById("tb").value;
    var bb = document.getElementById("bb").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var hour = String(today.getHours()).padStart(2, '0');
    var minute = String(today.getMinutes()).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hasil = bb / ((tb / 100) * (tb / 100));

    imt.date = mm + '/' + dd + '/' + yyyy + " " + hour + ":" + minute;
    imt.tinggiBadan = tb;
    imt.beratBadan = bb;

    if (hasil >= 18.5 && hasil <= 25) {
        imt.hasil = hasil.toFixed(2) + " (Normal)";
        document.getElementById("hasil").innerHTML = "<h2 style='color: green;'>Hasil Indeks Masa Tubuh Anda " + hasil.toFixed(2) + " termasuk Normal<h2>";
    } else if (hasil < 18.5) {
        imt.hasil = hasil.toFixed(2) + " (Kurang)";
        document.getElementById("hasil").innerHTML = "<h2 style='color: blue;'>Hasil Indeks Masa Tubuh Anda " + hasil.toFixed(2) + " termasuk Berat Badan Kurang<h2>";
    } else if (hasil > 25 && hasil <= 40) {
        imt.hasil = hasil.toFixed(2) + " (Berlebih)";
        document.getElementById("hasil").innerHTML = "<h2 style='color: orange;'>Hasil Indeks Masa Tubuh Anda " + hasil.toFixed(2) + " termasuk Berat Badan Berlebih<h2>";
    } else if (hasil > 40) {
        imt.hasil = hasil.toFixed(2) + " (Obesitas)";
        document.getElementById("hasil").innerHTML = "<h2 style='color: red;'>Hasil Indeks Masa Tubuh Anda " + hasil.toFixed(2) + " termasuk Obesitas<h2>";
    }

    const history = {
        date: imt.date,
        tinggiBadan: imt.tinggiBadan,
        beratBadan: imt.beratBadan,
        hasil: imt.hasil,
    }
    putHistory(history);
    renderHistory();
}

function reset_imt() {
    localStorage.clear();
    document.location.reload(true);
}
