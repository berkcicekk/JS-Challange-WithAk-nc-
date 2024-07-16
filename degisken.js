// veriturleri.js

// Farklı veri türlerinde değişkenler oluşturma
var isim = "Berk Bey";           // String
let yas = 30;                    // Number
const ogrenciMi = true;          // Boolean
let boy;                         // Undefined
var araba = null;                // Null
let sembol = Symbol("sembol");   // Symbol
let nesne = { ad: "Berk", yas: 30 }; // Object
let fonksiyon = function() { return "Merhaba"; }; // Function

// Veri türlerini kontrol etme ve konsola yazdırma
console.log("isim türü:", typeof isim);           // String
console.log("yas türü:", typeof yas);             // Number
console.log("ogrenciMi türü:", typeof ogrenciMi); // Boolean
console.log("boy türü:", typeof boy);             // Undefined
console.log("araba türü:", typeof araba);         // Object (Null veri türü özel bir durumdur ve typeof null "object" döner)
console.log("sembol türü:", typeof sembol);       // Symbol
console.log("nesne türü:", typeof nesne);         // Object 
console.log("fonksıyon:",typeof fonksıyon); 
