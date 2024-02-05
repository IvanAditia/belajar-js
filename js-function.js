//Membuat fuction dengan biasa
function namaFungsi(){
    console.log("Hello World!");
}

//membuat fungsi dengan ekspresi
var namaFungsi = funtion(){
    console.log("Hello World!");
}

//membuat fungsi dengan tanda panah
var namaFungsi = () => {
    console.log("Hello World!");
}

//membuat function dengan konstruktor
var namaFungsi  = new Function('console.log("Hello World!");');

//cara memanggil function
function sayHello(){
    console.log("Hello World!");
}

sayHello();

//function dengan parameter
function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
}

kali(a, b);

//fungsi yang mengembalikan nilai
function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
}

// memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilPembagian = bagi(nilai1, nilai2);

console.log(hasilPembagian); //-> 4

