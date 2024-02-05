document.write("<h2>1. PERULANGAN FOR</h2>");
//PERULANGAN FOR
for(i=1;i<3;i++){
    document.write("<p>Perulangan ke-"+i+"</p>");
}

document.write("<h2>2. PERULANGAN WHILE</h2>");
//PENGULANGAN WHILE
var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    var jawab = confirm("Apakah anda mau mengulang?")
    counter++;
    if(jawab == false){
        ulangi = false;
    }
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter + "kali");

document.write("<h2>3. PERULANGAN DO/WHILE</h2>");
//PERULANGAN DO/WHILE

var ulangi = confirm("Apakah anda mau mengulang?");;
var counter = 0;

do {
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
} while(ulangi)

document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");

document.write("<h2>4. PERULANGAN FOREACH</h2>");
//PERULANGAN FOREACH
//cara pertama

var languages = ["Javascript", "HTML", "CSS", "Typescript"]

for(i in languages){
    document.write(i+". "+ languages[i]+"<br/>");
}

//cara kedua
languages.forEach((day) => {
    document.write("<p>" + day + "</p>");
});

document.write("<h2>5. PERULANGAN DENGAN METODE repeat()</h2>");
//PERULANGAN REPEAT()

document.write("Ulangi kalimat ini! ".repeat(3));

document.write("<h2>6. PERULANGAN BERSARANG(NESTED)</h2>");
//PERULANGAN NESTED
var ulangi = confirm("apakah anda ingin mengulang?");
var counter = 0;

while (ulangi) {
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    ulangi = confirm("apakah anda ingin mengulang?");
}
