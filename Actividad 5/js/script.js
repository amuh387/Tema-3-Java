function calcular() {
    let a;
    let b;
    a=parseInt(document.getElementById("a"). value, 0);
    b=parseInt(document.getElementById("b"). value, 0);
    
 document.getElementById("mensaje").innerHTML = ("El primer número es : " + (a)+ "<br>El segundo número es : " + (b) + "<br>La suma es: " + (a + b)  + "<br>La resta es: " + (a-b) + "<br>La multiplicacion es: " + 
 (a*b) + "<br>La división es: " + (a/b) + "<br>El resto es: " + (a%b) );
} 