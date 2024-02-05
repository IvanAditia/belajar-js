var buah = ["nangka", "apel", "stroberry"];

//CARA MENGAMBIL DATA

for(let i=0; i<buah.length; i++){
    document.write(`<li>${buah[i]}</li>`);
}
document.write("</ol>");

//CARA MENAMBAHKAN DATA

buah.push("Semangka");

document.write("<h5>Menampilkan Isi Array</h5>");
document.write(buah);

//menghapus data array(lakukan di console)

//delete buah[1];(tidak bisa menghilangkan panjang array)

//namaArray.pop()


//array var buah = ["apel","semangka","jeruk","nanas"]
//buah.shift(); menghapus data dari depan di file
//buah.splice(<indeks>,<total>);
//contoh buah.splice(2.1); yang terhapus jeruk


//array[<indeks>] = "isi"; (mengubah isi array)

