//


let countDownFrom = (num) =>{
	// when the num is 0 stop the function return to break the function
	if(num === 0 ) return 1
	// log the num
	console.log(num);
	// * the number by the num -1
	return num * countDownFrom(num -1);

}
// last log will be 6 becuse it will multiply numbers together 
countDownFrom(3)
