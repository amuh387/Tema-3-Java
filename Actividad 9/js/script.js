function factorial() {
    let a;
    a=parseInt(document.getElementById("a"). value, 0);
    let resultado= 1;
    let iteracion=1;

    while(iteracion<=a){
        resultado*=iteracion;
        iteracion++;
    }
    document.getElementById("mensaje").innerHTML="El factorial de " + a + " es " + resultado;
}