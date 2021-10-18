console.log("merhaba kodlama.io");

//JS type safe değildir
let dolarBugun = 9.30
let dolarDun = 9.20

{
       let dolarDun = 9.10
}
console.log(dolarDun);

const euroDun = 11.2
// euroDun = 11 //bu hata

console.log(euroDun);

//array
//camelCasing = değişken ismi yazarken böyle yazılır
//pascalCasing
let konutKredileri = ["konut kredisi","emlak konut kredisi","kamu konut kredisi"]

console.log("<ul>")
for (let i=0; i<konutKredileri.length; i++) {
          console.log("<li>"+konutKredileri[i]+"</li>")
          
}
console.log("</ul>")



