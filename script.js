
//call to update time at every second
setInterval(showTime,1000);





function showTime(){
// get the time and current time(hours,minutes and seconds)
let today = new Date();
todayHour = today.getHours();
todayMinutes = today.getMinutes();
todaySeconds = today.getSeconds();


  let time = document.getElementById('time');

  let greeting = "";
  let greetElement = document.getElementById("greet")
  // let hourStamp = "AM"; tested

  let	hour = todayHour <10 ? "0"+todayHour : todayHour;
	let minute = todayMinutes < 10 ? "0" +todayMinutes : todayMinutes;
	let	seconds = todaySeconds < 10 ? "0" + todaySeconds : todaySeconds;

   let hourStamp = todayHour >= 12 ? 'PM' : 'AM';
	//get the timestamp and check if the time is less than the requisite hour or time of launch and testing at the range thatv was given and specified 
  
  console.log(hour +":" + minute +":" +seconds);

	if(todayHour >=12 && todayHour <= 18){
    todayHour = todayHour % 12 || 12;
    hour = todayHour <10 ? "0"+todayHour : todayHour;
		time.innerHTML = hour + ":" + minute + ":" + seconds +":" + hourStamp;
		greetElement.innerHTML = "GoodEvening Monsieur  ";

	}else if(todayHour >=0 && todayHour <= 11){
		//conditional to check if hour or minute or even seconds is less than 10 cuz you know the 10th prefix
    
		hourStamp = "AM";
		time.innerHTML = todayHour + ":" + todayMinutes + ":" + todaySeconds +":" + hourStamp;
		greetElement.innerHTML = "Good Morning"
	}

}
showTime();