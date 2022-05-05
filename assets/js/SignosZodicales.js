function SignosZodiacales(){
    
    let mes = prompt("Ingresa tu Mes de Nacimiento");
    console.log("Mes" + mes)
    let dia = prompt("Ingresa tu Dia de Nacimiento");
    console.log("Dia" + dia)
    if((dia>=21&&mes==3)||(dia<=20&&mes==4)){
        alert("ARIES")
    } 
    if((dia>=21&&mes==4)||(dia<=20&&mes==5)){
        alert("TAURO")
    } 
    if((dia>=21&&mes==5)||(dia<=21&&mes==6)){
        alert("GEMINIS")
    }
    if((dia>=22&&mes==6)||(dia<=22&&mes==7)){
        alert("CANCER")
    } 
    if((dia>=23&&mes==7)||(dia<=23&&mes==8)){
        alert("LEO")
    } 
    if((dia>=24&&mes==8)||(dia<=22&&mes==9)){
        alert("VIRGO")
    } 
    if((dia>=24&&mes==9)||(dia<=23&&mes==10)){
        alert("LIBRA")
    } 
    if((dia>=24&&mes==10)||(dia<=22&&mes==11)){
        alert("ESCORPIO")
    } 
    if((dia>=23&&mes==11)||(dia<=21&&mes==12)){
        alert("SAGITARIO")
    }
    if((dia>=22&&mes==12)||(dia<=20&&mes==01)){
        alert("CAPRICORNIO")
    } 
    if((dia>=21&&mes==1)||(dia<=19&&mes==2)){
        alert("ACUARIO")
    } 
    if((dia>=20&&mes==2)||(dia<=20&&mes==3)){
        alert("PISCIS")
    } 
    
}
SignosZodiacales()

