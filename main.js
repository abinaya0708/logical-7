//Chck if two numbers x and y is in the range between 50 and 99---

function num(x,y){
    if((x>=50)&&(x<=99)||(y>=50)&&(y<=99)){
        return true
    }
    else{
        return false
    }
}
document.write(num(52,91)+"<br>");
document.write(num(10,101));