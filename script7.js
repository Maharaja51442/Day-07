//Solving problems using array functions on the rest countries' data .
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
  var result = JSON.parse(request.response);
  //a.Get all the countries from the Asia continent /region using the Filter function
  var res = result.filter((ele) => ele.region === "Asia");
  console.log(res);
  var final = res.map((ele) => ele.name.common);
  console.log(final);
//b.Get all the countries with a population of less than 2 lakhs using Filter function
var population=result.filter((ele)=>ele.population<200000);{
console.log(population);
}
var filterpopulation=population.map((ele)=>ele.name.common);{
  console.log(filterpopulation);
}
//c.Print the following details name, capital, flag using forEach function
  var a=result.forEach(ele => {
    console.log(`Name:${ele.name.common}`,`Capital:${ele.capital}`,`flag:${ele.flag}`);
  });
//d.Print the total population of countries using reduce function
var totalpopulation=result.reduce((acc,curr)=>acc+curr.population,0)
console.log(`The total population of all countries is ${totalpopulation}`);
//e.Print the country which uses US Dollars as currency.
var currency=result.filter((x)=>{
for( var i in x.currencies){
  if(x.currencies[0].code==="United States dollar"){
    return true;
  }
}
}).map((ele)=>ele.name);
console.log(currency);
}


