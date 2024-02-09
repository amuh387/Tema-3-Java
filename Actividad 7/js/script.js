function comprobar() {
    let a;
    a=parseInt(document.getElementById("a"). value, 0);
    if(a<=10) {
        if(a>=5 && a<=10)
        document.getElementById("mensaje").innerHTML="Aprobado";
 else {
        document.getElementById("mensaje").innerHTML="Suspenso";
    }
} else {
        document.getElementById("mensaje").innerHTML="El número introducido no es válido";
   }
}
