 const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;


    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate()
    let mesAño = meses[fecha.getMonth()];
    let año = fecha.getFullYear()
    document.getElementById("fecha").innerHTML = `${diaSemana}, ${dia} de ${mesAño} de${año}`;

    document.getElementById("contenedor").classList.toggle("animacion")
  
}

 setInterval(mostrarReloj,1000);

 const formatoHora = (hora) => {
    if (hora < 10) 
        hora = '0' + hora;
        return hora;
    
 }

let caja = {
    nombre: "leandro",
    apellido: "costas"
}



console.log(caja);




 