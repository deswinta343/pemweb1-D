function dataDiri(name, nim) {
    var student = {
        name: name,
        nim: nim
    };

    console.log(student);
}

// Contoh pemanggilan fungsi
var name = "Deswinta Faadhilah Eka Susanto";
var nim = "V3922014";

dataDiri(name, nim);

console.log(dataDiri.length)