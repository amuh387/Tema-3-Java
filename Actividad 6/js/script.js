function comprobar() {
    let a;
    a=parseInt(document.getElementById("a"). value, 0);
    if(a%2===0){
        document.getElementById("mensaje").innerHTML="EL NÚMERO ES PAR";
    }
   else{
        document.getElementById("mensaje").innerHTML="EL NÚMERO ES IMPAR";
   }
} 
