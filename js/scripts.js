


var randoms=[];
while(randoms.length < 5){
	var rand = Math.ceil(Math.random()*5) ;
	if(randoms.indexOf(rand) == -1)
		randoms.push(rand) ;
}

var taken = [] , elements=[] , cnt=0, clicks=0;

while(taken.length < 10){
	var random = Math.ceil(Math.random()*10) ;
	if(taken.indexOf(random) == -1){
		taken.push(random) ;
	}
}

// put every image twice 
while(elements.length < 10) {
	var randomIndex = Math.floor(Math.random()*5) ;
	for (var i = 0 ; i < elements.length ; i++) {
		if(elements[i] == randoms[randomIndex])
			cnt++ ;
		if(cnt == 2)
			break ;
	}
	if(cnt < 2)
		elements.push(randoms[randomIndex]) ;
	cnt = 0 ;
}

var bool = true , previous_id , previous_index, previous_imgPath , opened=[];
for (var i = 0; i < 10; i++) {
	opened[i] = false; 
}
function flip(clicked_id){
	clicks++ ;
	var numberOfDiv = parseInt(clicked_id[clicked_id.length -1]) ;
	var index = taken.indexOf(numberOfDiv+1) ;
	var imgPath = "imgs/" + elements[index] + ".jpg" ;

	if(bool){
		previous_index = index; 
		previous_id = clicked_id ;
		previous_imgPath = imgPath ;
		document.getElementById(clicked_id).src = imgPath ;
		bool = false ;
	}
	else{
		document.getElementById(clicked_id).src = imgPath ;
		if(previous_id == clicked_id){
			bool = false ;
			return;
		}
		setTimeout(function(){
			if(imgPath != previous_imgPath){
				if(opened[index] != true && opened[previous_index] != true){
					document.getElementById(clicked_id).src = "imgs/main.jpg" ;
					document.getElementById(previous_id).src = "imgs/main.jpg" ;
				}
				else if(opened[index] != true)
					document.getElementById(clicked_id).src = "imgs/main.jpg" ;
				else
					document.getElementById(previous_id).src = "imgs/main.jpg" ;
			}
			else{
				opened[index] = opened[previous_index] = true ;
				cnt++ ;
				if(cnt == 5){
					alert("congratulation! you took " + clicks + " clicks") ;
					return;
				}
			}
			bool = true ;
		} , 500);
	}
}



