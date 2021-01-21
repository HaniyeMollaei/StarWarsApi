let temp ;
var output = "";
var arr = [2 , 3 , 5 , 9 , 10 , 11 , 12 , 13 , 15 , 17];

var container = document.getElementsByClassName('data')[0];
window.addEventListener('load' , function(){getShipsName()});

function getShipsName(){
	for (var i = 0 ; i < arr.length; i++) {
		getListFromApi(arr[i]);
	}
}

// Defining async function 
async function getListFromApi(num) { 
    
    // Storing response 
    const response = await fetch(`https://swapi.dev/api/starships/${num}/`); 
    
    // Storing data in form of JSON 
    var data = await response.json();  
    if (response) { 
    	temp =JSON.parse(JSON.stringify(data)); // parse json data 

		item = document.createElement("div");
	    item.setAttribute("class", "item");
	    item.innerHTML = temp.name;
	    item.addEventListener("click", function() {
	    	document.getElementsByClassName('ship-data')[0].setAttribute("border" , "2px solid tomato");
        	getShipData(num);
    	});
   
    	container.appendChild(item);
    } 
} 

async function getShipData(num){
	const response = await fetch(`https://swapi.dev/api/starships/${num}/`); 
    
    // Storing data in form of JSON 
    var data = await response.json();  
    if (response) { 
    	temp =JSON.parse(JSON.stringify(data)); // parse json data 
    	document.getElementsByClassName('ship-data')[0].innerHTML = `name : <strong>${ temp.name}</strong><br />model : ${ temp.model}<br />
    	manufacturer : ${ temp.manufacturer}<br />crew : ${ temp.crew}<br />passengers : ${ temp.passengers}<br />`;
    }
   
    for (var i = 0 ; i <temp.films.length ; i++) {
    	if (i==0) {
    		document.getElementsByClassName('ship-data')[0].innerHTML += '<br /><strong> Films : </strong><br />';
    	}
    	getFilmData(temp.films[i]);
    }
   

}

async function getFilmData(url){
	const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json();  
    if (response) { 
    	temp =JSON.parse(JSON.stringify(data)); // parse json data 
    	document.getElementsByClassName('ship-data')[0].innerHTML += `${temp.title}<br />`;
    }

}