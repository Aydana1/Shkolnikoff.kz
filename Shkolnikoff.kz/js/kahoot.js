var lis = document.querySelectorAll("li");

for(var i=0; i<lis.length; i++){

	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	})

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	})
}

var variant1 = document.getElementById("A");
var variant2 = document.getElementById("B");
var variant3 = document.getElementById("C");

variant1.addEventListener("click", function(){  });
variant2.addEventListener("click", function(){  });
variant3.addEventListener("click", function(){  });


var score1 = document.getElementById("1st");
var score3 = document.getElementById("3rd");
var score2 = document.getElementById("2nd");
var score4 = document.getElementById("4th");
var score5 = document.getElementById("5th");
var score6 = document.getElementById("6th");

var hero1 = document.getElementById("1");
var hero3 = document.getElementById("3");
var hero2 = document.getElementById("2");
var hero4 = document.getElementById("4");
var hero5 = document.getElementById("5");
var hero6 = document.getElementById("6");


var correctAnswer = "n - 1";
var j=0;

hero1.addEventListener("click", function(){
	j++;
	score1.textContent = j;
});

hero2.addEventListener("click", function(){
	j++;
	score2.textContent = j;
});

hero3.addEventListener("click", function(){ 
	j++;
	score3.textContent = j;
});

hero4.addEventListener("click", function(){ 
	j++;
	score4.textContent = j;
});

hero5.addEventListener("click", function(){ 
	j++;
	score5.textContent = j;
});

hero6.addEventListener("click", function(){ 
	j++;
	score6.textContent = j;
});


function setTime(){
	for(var i=1; i<=10; i++){
		setTimeout(function(){document.getElementById("next").innerHTML = i + " seconds";
	}, 1000*i); 
	}
}

