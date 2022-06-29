let nombre= parseInt(prompt("ingrese su nombre"))
for (tiempo=0 ; tiempo>=0; tiempo+=10 ){
    espera = tiempo + 0;
    alert("lo sentimos "+nombre+" pero tienes que esperar "+espera+" minutos");
    nombre= parseInt(prompt("Ingrese otro nombre"))
}
/*anda con += pero no con + solo*/

while (cuenta=0 ; cuenta<=100 ; cuenta++){
    console.log(cuenta);
}