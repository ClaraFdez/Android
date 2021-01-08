var hotelSeleccionada = 0;
function getHotel(id_hotel){
    id_hotel = localStorage.getItem("HOTEL");
               $.ajax({
                    url: 'Controller',
                    data:{
                         ACTION: 'HOTEL.FIND_ALL',
                         ID_HOTEL: id_hotel
                         
                        },
                    dataType: 'json',
                    success : function (responseText){
                        var imagenPeli = responseText[0].url; 
                        var cadenaBienFormada = "images/" 
                                + imagenPeli +".jpg";
                        $("#PELICULA").attr("src",cadenaBienFormada);
                        var trailerPeli = responseText[0].trailer;    
                        $('#TRAILER').attr("src",trailerPeli);
                        $('#SINOPSIS').html(responseText[0].sinopsis);
                        }    
                       }
                       );
            }
function hotel(id_hotel){
    alert("Javascript - Ficha de Hotel" 
            + id_hotel);
    //peliculaSeleccionada = idPelicula;
    localStorage.setItem("HOTEL", id_hotel);
    document.location="index.html";
    
}
function loginUsuario(){
                var email = $('#EMAIL').val();
                var contrasena  = $('#CONTRASENA').val();
                alert("Email:" + email + "-" + "Contraseña:" + contrasena);
                $.ajax({
                    url: 'Controller',
                    data:{
                         ACTION: 'USUARIO.LOGIN', 
                         EMAIL: email, 
                         PASSWORD: contrasena
                        },
                    success : function (responseText){
                        var divLogin = document.
                                getElementById('RESPUESTA_LOGIN');
                            divLogin.innerHTML = responseText;
                            alert(responseText);
                        $('#RESPUESTA_LOGIN').text(responseText);
                        }    
                       }
                    );
            }
function listarHoteles(){
        ///Controller?ACTION=PELICULA.LISTAR
        $.ajax({
            url: 'Controller',
            data:{
                 ACTION: 'HOTEL.FIND_ALL'
                },
            dataType: 'json',
            success : function (responseText){
               /* var divPeliculas = document.
                        getElementById('GALERY_PELICULAS');
*/
                    /*divPeliculas.innerHTML = responseText;*/

                  //  $('#GALERY_PELICULAS').text(responseText);

                    //console.log(json[i].nameTable)
                    //alert(responseText[pelicula].titulo);
                    //alert(responseText[contador].titulo);

var cad ="";
for (var contador in responseText) {
cad+="<div style='width: 30%;background-color: yellow; height: 10%; display: inline-block'>";
/*var imagenPeli = responseText[contador].url; 
                var cadenaBienFormada = "images/" 
                        + imagenPeli +".jpg";
var idP = responseText[contador].id;
cad+="<img onclick='pelicula("+idP+");' src='"+cadenaBienFormada+"' width='100' height='100'/>";
cad+="<h5 style='display: inline-block'>" + responseText[contador].titulo +"</h5>";
cad+="<h5 style='display: inline-block'>" + responseText[contador].sinopsis +"</h5>";
cad+="</div>";*/
}
//divPeliculas.innerHTML(cad);
//divPeliculas.insertAdjacentHTML('beforeend',cad);
//$('#GALERY_PELICULAS').text(cad);
//$('#GALERY_PELICULAS').html(cad);
                }    
               }
               );
    }
function filtrarHoteles(){
               var filtro = $('#FILTRO').val();
               $.ajax({
                    url: 'Controller',
                    data:{
                         ACTION: 'HOTEL.FIND_ALL',
                         NOMBRE: filtro
                         
                        },
                    dataType: 'json',
                    success : function (responseText){
var cad ="";
for (var contador in responseText) {
    cad+="<div style='width: 30%;background-color: yellow; height: 10%; display: inline-block'>";
    cad+="<img src='images/braveheart.jpg' width='100' height='100'/>";
    cad+="<h5 style='display: inline-block'>" + responseText[contador].nombre +"</h5>";
    //cad+="<h5 style='display: inline-block'>" + responseText[contador].sinopsis +"</h5>";
    cad+="</div>";
}
$('#GALERY_HOTELES').text(cad);
$('#GALERY_HOTELES').html(cad);
                        }    
                       }
                       );
            }

