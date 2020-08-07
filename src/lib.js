function add(n1,n2){
	let result=Number(n1)+Number(n2);
	return result;
}
function format(number){
	if(number<10){
		return "0"+number;
	}else{
		return ""+number;
	}
}
export {add, format};