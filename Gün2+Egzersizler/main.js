//let Challenge = '30 Days Of JavaScript';

// console.log(Challenge); // Çıktı: 30 Days Of JavaScript

// console.log(Challenge.length);

/*let toUpperCase = Challenge.toUpperCase();
console.log(toUpperCase);*/

// let Challenge = '30 Days Of JavaScript';

/*// İlk kelimeyi kesmek için substring() kullanma
let remainingString = Challenge.substr(3);
console.log(remainingString); // Çıktı: Days Of JavaScript*/

/*let phrase = "JavaScript'in 30 Günü";
let charAtIndex15 = phrase.charAt(15);
console.log(charAtIndex15); // Çıktı: G */

/*let tekrar = '30 Gün JavaScript';
let repeatedTekrar = tekrar.repeat(2);
console.log(repeatedTekrar); // Çıktı: 30 Gün JavaScript30 Gün JavaScript*/

let sentence = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.';
let wordToCount = 'aşk';

// Cümleyi küçük harfe çevirerek ve boşluk ile bölerek kelimelere ayırıyoruz
let words = sentence.toLowerCase().split(' ');

// Belirli bir kelimeyi saymak için bir sayaç kullanıyoruz
let count = 0;

for (let word of words) {
    if (word.includes(wordToCount)) {
        count++;
    }
}

console.log(`Cümledeki '${wordToCount}' kelimesi sayısı:`, count);
