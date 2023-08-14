//Defining UI
const UIcelsius = document.querySelector('#result-celsius');
const UIfahrenheit = document.querySelector('#result-fahrenheit');
const UIkelvin = document.querySelector('#result-kelvin');
const UIinputValue = document.querySelector('#UIinputValue');
const UIinputValueUnit = document.querySelector('#UIinputValueUnit');

//Defining Calculating elements
const calculateBtn = document.querySelector('.calculateBtn');
const temperatureUnit = document.querySelector('#tempUnit');

//Listen for value when calculated clicked
calculateBtn.addEventListener('click',calculateResult);
//Listen for value when option is clicked
temperatureUnit.addEventListener('click',changeUIUnit);

//Defining variables in global scope so that it can be use in outer function.
let celsius,fahrenheit,kelvin;

//Calculate function
function calculateResult(e){
    //getting the input value
    let inputNumber = parseInt(UIinputValue.value);

    //getting the values from option
    let optionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();

    //Checking the input and assigning if statement according to that
    if(optionValue == "select your desire temperature unit" || isNaN(inputNumber)){
       alert('Please Enter Both Number / Temperature Value');

    }else
        if(optionValue == "celsius"){
            celsius = inputNumber;
            fahrenheit = ((inputNumber * 9/5)+32).toFixed(2);
            kelvin = (inputNumber + 273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "fahrenheit"){
            celsius = ((inputNumber-32)*5/9).toFixed(2);
            fahrenheit = inputNumber;
            kelvin = (((inputNumber-32)*5/9)+273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "kelvin"){
            celsius = (inputNumber - 273.15).toFixed(2);
            fahrenheit = ((inputNumber - 273.15)*9/5 + 32).toFixed(2);
            kelvin = inputNumber;
            UIresultOutput();
        }

    e.preventDefault();
};

//Dynamically Unit changing function
function changeUIUnit(){
    let UIoptionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();
        if(UIoptionValue == 'celsius'){
            UIinputValueUnit.innerHTML ='&deg;C';
        }
        if(UIoptionValue == 'fahrenheit'){
            UIinputValueUnit.innerHTML ='&deg;F';
        }
        if(UIoptionValue == 'kelvin'){
            UIinputValueUnit.innerHTML ='&deg;K';
        }
}

//Appending result into UI function
function UIresultOutput(){
    UIcelsius.value = celsius;
    UIfahrenheit.value = fahrenheit;
    UIkelvin.value = kelvin;
    if(celsius < 0){
        
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2942817.jpg')";
    }
   else if(celsius >= 0  &&  celsius <= 10){
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2943147.jpg')";
    }
    else if (celsius > 10  &&  celsius <= 25) {
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/894029936/photo/trees-covered-with-hoarfrost-and-snow-in-winter-mountains-christmas-snowy-backgroundic-holiday.jpg?s=612x612&w=0&k=20&c=BehWN8YVxcrvjqHYG6X1F71x9q40ojSMZjEKOAg3izc=')" ;
    }
    else if (celsius > 25  &&  celsius <= 35) {
        document.body.style.backgroundImage = "url('https://learn.zoner.com/wp-content/uploads/2015/09/Fall-II.jpg')";
    }
    else if (celsius > 35  &&  celsius <= 45) {
        document.body.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/616/116/desktop-wallpaper-top-beautiful-best-summer-season-for-backgrounds-summer-season.jpg')";
    }
    else if( celsius >45 ){
        document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg')";
    }

    //clear Input
    UIinputValue.value = '';
    UIinputValueUnit.value = '';

}