//connect API to the site
fetch('http://api.openweathermap.org/data/2.5/group?id=2267057,2988507,2802359,703448,293397,360630,5128638,1261481,5391959,1850147,2147714&units=metric&appid=3dd41a2f722a90162edcef9c8a26f919')
  .then(function (response) {  return response.json()  })
  .then(function(data) {
    
    var citiesName = document.querySelectorAll('.city_name'); // NodeList of cells with the city name
    var citiesTemp = document.querySelectorAll('.city_temperature'); // NodeList of cells with the temperature
    var citiesIcon = document.querySelectorAll('.city_weather-icon'); //NodeList of cells with the weather-icon
    var footerElement = document.querySelector('footer span'); //element in the footer

    // the loop that sorts the city cells and runs the loops to filling data
    for(var i = 0; i < citiesName.length; i++){

      // the loop that sorts through the city data and adds the city name
      for(var k = 0; k < data.list.length; k++){         
        citiesName[i].innerHTML = data.list[k].name;
        i++;
      }

      // the loop that sorts through the city data and adds the city temperature
      for(var j = 0; j < citiesTemp.length; j++){
        citiesTemp[j].innerHTML = Math.round(data.list[j].main.temp) + '&deg';
      }

      // the loop that sorts through the city data and adds the city weather-icon
      for(var g = 0; g < citiesIcon.length; g++){
        citiesIcon[g].innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.list[g].weather[0].icon + '.png">';
      }
    }

    // the loop that sorts through the city data and, if it rains somewhere, add an extra string 
    for(var s = 0; s < data.list.length; s++){
      if(data.list[s].weather[0].main.toLowerCase() === 'rain'){
        return footerElement.innerHTML = 'and dont forget umbrella if you are in' + ' ' + data.list[s].name + ' ' + 'now'
      }
    }
  });


