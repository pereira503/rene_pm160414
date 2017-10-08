  window.onload = function(){
  	var uluru = {lat: 13.6739996, lng: -89.2367663};
        var uluru2 = {lat: 13.7159035, lng: -89.1536987};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
          var image  ='Universidad_don_bosco.png';
        var marker = new google.maps.Marker({
          position: uluru,
          animation: google.maps.Animation.BOUNCE,
          map: map,
          icon:image,


          
        });
          var marker2 = new google.maps.Marker({
          position: uluru2,
          animation: google.maps.Animation.BOUNCE,
          map: map,
          icon:image,

        });

  	var boton="";
  	var boton2="";
  	var boton3="";
  	boton = document.getElementById("boton1");
  	boton2 = document.getElementById("boton2");
  	boton3 =document.getElementById("boton3");

  	     
  	boton.addEventListener("click", function(){
  				alert("la Universidad_don_bosco te da la bienvenida")
  			
			});
  	boton2.addEventListener("click",function(){
  		window.location.href="ejemplo.html";
  	});
  	boton3.addEventListener("click",function(){
  		window.location.href="udb.html";
  	});


       
   }
