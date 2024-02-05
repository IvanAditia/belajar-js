//PENCABANGAN IF
    //var totalBelanja = prompt("Total Belanja?", 0);
    //
    //if(totalBelanja > 100000){
    //    document.write("<h2>Selamat Anda dapat hadiah</h2>");
    //}
    //
    //document.write("<p>Terimakash sudah berbelanja di toko //kami</p>");
//PENCABANGAN IF/ELSE
    //var password = prompt("Password: ");
    //
    //if(password == "kopi"){
    //    document.write("<h2>Selamat datang bos!</h2>");
    //}else {
    //    document.write("<p>Password salah, coba lagi</p>");
    //}
    //
    //document.weite("<p>Terima kasih sudah menggunakan aplikasi  //ini!</p>");

//PENCABANGAN IF/ELSE/IF
    //var nilai = prompt("Inputkan nilai akhir: ");
    //var grade = "";
    //
    //if(nilai >= 90) grade = "A"
    //else if(nilai >= 80) grade = "B+"
    //else if(nilai >= 70) grade = "B"
    //else if(nilai >= 60) grade = "C+"
    //else if(nilai >= 50) grade = "C"
    //else if(nilai >= 40) grade = "D"
    //else if(nilai >= 30) grade = "E+"
    //else grade = "F";
    //
    //document.write(`<p>Grade anda: ${grade}</p>`);

//PENCABANGAN SWITCH/CASE
    //var jawab = prompt("Kamu beruntung! Silahkan pilih  //hadiahmu dengan memasukan angka 1 sampai 5");
    //var hadiah = "";
    //
    //switch(jawab){
    //    case "1":
    //        hadiah = "Tisu";
    //        break;
    //    case "2":
    //        hadiah = "1 Kotak Kopi";
    //        break;
    //    case "3":
    //        hadiah = "Sticker";
    //        break;
    //    case "4":
    //        hadiah = "Minyak Goreng";
    //        break;
    //    case "5":
    //        hadiah = "Uang Rp 50.000";
    //        break;
    //
    //    default:
    //        Document.write("<p>Opps! anda salah pilih</p>");
    //}
    //
    //if(hadiah === ""){
    //    document.write("<p>Kamu gagal mendapat hadiah</p>");
    //}else {
    //    document.write("<h2>Selamat kamu mendapatkan "+ hadiah  //+ "</h2>");
    //}

//PENCABANGAN TERNARY

    //var jwb = prompt("Apakah Jakarta ibu kota Indonesia?");
    //
    //var jawaban = (jwb.toUpperCase() == "IYA") ?    //"Benar":"Salah";
    //
    //document.write(`Jawaban anda: <b>${jawaban}</b>`);

//PENCABANGAN BERSARANG (NESTED)
var username = prompt("Username: ");
var password = prompt("Password: ");

//ditambah dengan operator logika
if(username == "petanikode" && password == "kopi"){
    document.write("<h2>Selamat datang pak bos!</h2>");
} else {
    document.write("<p>Password salah, coba lagi!</p>");
}