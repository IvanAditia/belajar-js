//OPERATOR ARITMATIKA
//PENJUMLAHAN +
//PENGURANGAN -
//PEMBAGIAN /
//PERKALIAN *
//PEMANGKATAN **
//SISA BAGI %
//KENAIKAN ++
//PENURUNAN --


document.write("Kode javascript daru File External");
console.log("Test kode")

//Operator penugasan
document.write("Mula-mula nilai score...<br>");

var score = 100;
document.write("score ="+ score + "<br/>");

//mengisi dan menjumlah
score += 5;
document.write("score ="+ score + "<br/>");

//mengisi dan mengurangi
score -= 2;
document.write("score ="+ score + "<br/>");

//mengisi dan mengalikan
score *= 2;
document.write("score ="+ score + "<br/>");

//mengisi dan membagi
score /= 4;
document.write("score ="+ score + "<br/>");

//mengisi dan memangkatkan
score **= 2;
document.write("score ="+ score + "<br/>");

//mengisi dan modulo
score %= 5;
document.write("score ="+ score + "<br/>");

//----------------------------------------------------

//Operator perbandingan
var me = 20;
var you = 19;

//sama dengan
var result = me == you;
document.write(`${me} == ${you} == ${result}<br/>`);

//lebih besar
var result = me > you;
document.write(`${me} > ${you} = ${result}<br/>`);

//lebih besar sama dengan
var result = me >= you;
document.write(`${me} >= ${you} = ${result}<br/>`);

//lebih kecil
var result = me < you;
document.write(`${me} < ${you} = ${result}<br/>`);

//lebih kecil sama dengan
var result = me <= you;
document.write(`${me} <= ${you} = ${result}<br/>`);

//tidak sama dengan
var result = me != you;
document.write(`${me} != ${you} = ${result}<br/>`);

//------------------------------------

//OPERATOR LOGIKA
//masih menggunakan variebel operator sebelumnya me = 20, you =19

var benar = me > you;
var salah = me < you;

//operator && (and)
var result = benar && salah;
document.write(`${benar} && ${salah} = ${result}<br/>`);

//operator || (or)
var result = benar || salah;
document.write(`${benar} || ${salah} = ${result}<br/>`);

//operator ! (not)
var result = !benar;
document.write(`!${benar} = ${result}<br/>`);

//---------------------------------------------

//OPERATOR BITWISE
var x = 4;
var y = 3;

//operator AND(&)
var result = x & y;
document.write(`${x} & ${y} = ${result}<br/>`);

//operator OR(|)
var result = x | y;
document.write(`${x} | ${y} = ${result}<br/>`);

//operator XOR (^)
var result = x ^ y;
document.write(`${x} ^ ${y} = ${result}<br/>`);

//operator NEGASI(~)
var result = ~x;
document.write(`~${x} = ${result}<br/>`);

//operator right shift (>>)
var result = x >> y;
document.write(`${x} >> ${y} = ${result}<br/>`);

//opersi left shift (<<)
var result = x << y;
document.write(`${x} << ${y} = ${result}<br/>`);

//operasi rightshift unsigned(>>>)
var hasil = x >>> y;
document.write(`${x} >>> ${y} = ${hasil}<br/>`);
