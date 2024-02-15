function mensajeif() {
    let a;
    a=parseInt(document.getElementById("a"). value, 0);
    if(a>=0 && a<=24) {
        if(a>=7 && a<=11){
            document.getElementById("mensaje").innerHTML="Buenos días";
        }
        else if(a>=12 && a<=21) {
            document.getElementById("mensaje").innerHTML="Buenas tardes";
        }
        else {
        document.getElementById("mensaje").innerHTML="Buenas noches";
        }   
    }
    else{
        document.getElementById("mensaje").innerHTML="El número introducido no es válido"; 
    }
}

function mensajeswitch(){
    a=parseInt(document.getElementById("a"). value, 0);
    if(a>=0 && a<=24) {
        switch(a){
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                document.getElementById("mensaje").innerHTML="Buenos días";
            break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                document.getElementById("mensaje").innerHTML="Buenas tardes";
            break;
            default:
                document.getElementById("mensaje").innerHTML="Buenas noches";

         }   
    }     
        else{
            document.getElementById("mensaje").innerHTML="El número introducido no es válido";       

        }
    
}
        
