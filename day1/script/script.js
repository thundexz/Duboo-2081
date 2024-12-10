
let isiland = false;
let language = "nepali";
const country = "Nepal" ;
const continent = "asia";
let population= 30; // in millions
console.log("Country :" , country);
console.log("Continent :" ,continent);
console.log("population /in millions :", population);
console.log("nepal is not iland :",isiland);
console.log("spoken language is : ", language)
population = population / 2;
console.log("if country split in half then population would be :", population);
population = population + 1;
console.log("if population add 1 then pop  :", population);
let finland = 6 ;// in millions
let hasMore = population > finland ;
console.log (country," has Mor epopulation  :" , hasMore);

let avgpop =33; // in millions
let avg = population > avgpop ;
console.log(country," has avg population ", avg);

let description = `${country}  is in  ${continent}  and its ${population} millions pepole speak  ${language}`

console.log(description);
population = 22 ; //in millions

if (population > avgpop){
    console.log( `${country} population is above average`);
}
else {
    let difference =  avgpop - population;
    console.log(`${country}'s population is ${difference} is below average`);
}
