document.getElementById("calc").addEventListener("submit", calculate); 	
	
function calculate(e){
var radios = document.getElementsByName('gender');
var height = Number(document.getElementById("num1").value);
var weight = Number(document.getElementById("num2").value);
var bmi = (weight.value / (height.value*height.value));	
		e.preventDefault();
		document.getElementById("result").innerHTML = bmi.toFixed(2);
	for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
    break;
 }
}
if ( radios[i].value == 0){
	  
  if(bmi <= 20.7) {
		document.getElementById("message").innerHTML = "Gầy";
	 return;
	}
		else if (bmi <= 26.4) {
		document.getElementById("message").innerHTML = "Bình Thường";
	return;
	}
	
  else if (bmi <= 27.8) {
		document.getElementById("message").innerHTML = "Thừa Cân Nhẹ";
	return;
	}
	
  else if (bmi <= 31.1) {
		document.getElementById("message").innerHTML = "Trên lí tưởng!";
	return;
	}
	
  else if (bmi > 31.1) {
		document.getElementById("message").innerHTML = "Béo phì";
	return;
	}
	

 }
}