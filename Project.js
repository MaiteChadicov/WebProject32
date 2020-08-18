var num=1;

function forward() {
	num++;
	if(num>3){
		num=1;
    }
    console.log(num)
	document.getElementById("photo").src="photo"+num+".png";

}

function backwards() {
	num --;
	if(num<0){
        num=3;
    }
    console.log(num)
	document.getElementById("photo").src="photo"+num+".png";
}
