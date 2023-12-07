function hitungLuas() {
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;
  let hasilLuas;
  if (alas && tinggi != 0) {
    hasilLuas = (alas * tinggi) / 2;
    document.getElementById("hasilLuas").value = hasilLuas;
    document.getElementById("kalmatLuas").innerHTML =
      "Luas = alas * tinggi / 2";
    document.getElementById("penjabaranLuas").innerHTML =
      "Luas = " + alas + " * " + tinggi + " / 2";
    document.getElementById("kalLuas").innerHTML = "Luas = " + hasilLuas;
    event.preventDefault();
  } else {
    alert("Nilai yang dimasukkan tidak sesuai");
    event.preventDefault();
  }
}

function hitungKeliling() {
  let sisi_alas = document.getElementById("sisi_alas").value;
  let miring1 = document.getElementById("miring1").value;
  let miring2 = document.getElementById("miring2").value;
  let hasilKeliling;
  if (sisi_alas && miring1 && miring2 != 0) {
    hasilKeliling = parseInt(sisi_alas) + parseInt(miring1) + parseInt(miring2);
    document.getElementById("hasilKeliling").value = hasilKeliling;
    document.getElementById("kalmatKeliling").innerHTML =
      "Keliling = sisi alas + sisi miring 1 + sisi miring 2";
    document.getElementById("penjabaranKeliling").innerHTML =
      "Keliling = " + sisi_alas + " + " + miring1 + " + " + miring2;
    document.getElementById("kalKeliling").innerHTML =
      "Keliling = " + hasilKeliling;
    event.preventDefault();
  } else {
    alert("Nilai yang dimasukkan tidak sesuai");
    event.preventDefault();
  }
}

function resetFormluas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasilLuas").value = "";
  document.getElementById("kalmatLuas").innerHTML = "";
  document.getElementById("penjabaranLuas").innerHTML = "";
  document.getElementById("kalLuas").innerHTML = "";
}

function resetFormkeliling() {
  document.getElementById("sisi_alas").value = "";
  document.getElementById("miring1").value = "";
  document.getElementById("miring2").value = "";
  document.getElementById("hasilKeliling").value = "";
  document.getElementById("kalmatKeliling").innerHTML = "";
  document.getElementById("penjabaranKeliling").innerHTML = "";
  document.getElementById("kalKeliling").innerHTML = "";
}
