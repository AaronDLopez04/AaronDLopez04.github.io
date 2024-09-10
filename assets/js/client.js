function saludar(){
    console.log('Diseño Web 1')
    //alert('Diseño Web 1')
    console.log(document);
    console.log(document.getElementById('parrafo1').innerHTML);

    console.log(document.getElementById('parrafo1').getAttribute('style'));
}

function cambiarParrafo3(){
    console.log(document.getElementById('parrafo3').innerHTML="FES Aragon");
}

function cambiarFondoBody(){
    const colores = ['#FFFFFF', '#3409F3', '#00FFFF', '#00BB09', '#D09B3B'];
    const colorAlea = colores[Math.floor(Math.random() * 5)];
    console.log(colorAlea);
    document.getElementById('cuerpo').style.backgroundColor = colorAlea;
}