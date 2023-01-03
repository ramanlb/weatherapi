var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var wind= document.querySelector('.wind');
var error= document.querySelector('.error');
// document.querySelector('.output').style.border='1px solid black';

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2bc9babbc9df85f3a4c96123c705903f')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var windValue = data['wind']['speed'];
// console.log(data)
  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  wind.innerHTML = "wind - "+windValue;
  input.value ="";

})

.catch(err => 
    alert(("Wrong city name!")));
})







// let loc='2bc9babbc9df85f3a4c96123c705903f';
// var button = document.querySelector(".button")
// var searchinput = document.querySelector("#search-input")
// var main = document.querySelector(".name")
// var desc = document.querySelector(".desc")
// var temp = document.querySelector(".temp")

// var API = 'https://api.openweathermap.org/data/2.5/weather?'+inputValue.value+'&2bc9babbc9df85f3a4c96123c705903f';

// button.addEventListener ('click',function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2bc9babbc9df85f3a4c96123c705903f')

    // fetch("https://api.openweathermap.org/data/2.5/weather?q= '+searchinput.value+'&appid=2bc9babbc9df85f3a4c96123c705903f")
//       .then(response =>response.json() )
//        .then(data => {
//         var nameValue = data['name'];
//         var tempValue = data['main']['temp'];
//         var descValue = data['weather'][0]['description'];

//         main.innerHTML = nameValue;
//         temp.innerHTML = 'Temp -'+tempValue;
//         desc.innerHTML = "Desc -"+descValue;
//         input.value = "";
//        })
      
//       .catch(err => {
//         console.log("wrong city name");
//       })
// })

 