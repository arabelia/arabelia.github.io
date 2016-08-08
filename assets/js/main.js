function fechaEspanol(){
   mueveReloj()
   imprimirFechaEspanol()
}

function fechaEnglish(){
   mueveReloj()
   imprimirFechaEnglish()
}

function fechaPortugues(){
   mueveReloj()
   imprimirFechaPortugues()
}

function mueveReloj(){ 
  	momentoActual = new Date() 
   hora = momentoActual.getHours() 
   minuto = momentoActual.getMinutes() 
   segundo = momentoActual.getSeconds() 

   str_segundo = new String (segundo) 
   if (str_segundo.length == 1) 
      segundo = "0" + segundo 

   str_minuto = new String (minuto) 
   if (str_minuto.length == 1) 
      minuto = "0" + minuto 

   str_hora = new String (hora) 
   if (str_hora.length == 1) 
      hora = "0" + hora 

   horaImprimible = hora + " : " + minuto + " : " + segundo
   document.getElementById("reloj").innerHTML= horaImprimible
   setTimeout("mueveReloj()",1000)  
}

function imprimirFechaEspanol(){
   dia = momentoActual.getDate()
   mes = momentoActual.getMonth()
   year = momentoActual.getFullYear()
   numDia = momentoActual.getDay()
   // formato fecha
   var nombreDia = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
   var nombreMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
   fechaImprimible = nombreDia[numDia] + ", " + dia + " de " + nombreMes[mes] + " del " + year
   document.getElementById("fecha").innerHTML= fechaImprimible
}

function imprimirFechaEnglish(){
   dia = momentoActual.getDate()
   mes = momentoActual.getMonth()
   year = momentoActual.getFullYear()
   numDia = momentoActual.getDay()
   // formato fecha
   var nombreDia = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Daturday"]
   var nombreMes = ["January","February","March","April","May","June","July","August","September","October","November","Dicember"]
   fechaImprimible = nombreDia[numDia] + ", " + dia + " de " + nombreMes[mes] + " del " + year
   document.getElementById("fecha").innerHTML= fechaImprimible
}

function imprimirFechaPortugues(){
   dia = momentoActual.getDate()
   mes = momentoActual.getMonth()
   year = momentoActual.getFullYear()
   numDia = momentoActual.getDay()
   // formato fecha
   var nombreDia = ["Domingo","Segunda-feira","Terça-feira","Quarta.feira","Quinta-feira","Sexta-feira","Sabado"]
   var nombreMes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
   fechaImprimible = nombreDia[numDia] + ", " + dia + " de " + nombreMes[mes] + " del " + year
   document.getElementById("fecha").innerHTML= fechaImprimible
}