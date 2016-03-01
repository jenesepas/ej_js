// javascripts

window.onload=iniciar;


function iniciar()
{									
	//evento onclick boton enviar	
	document.getElementById("boton").addEventListener('click',validar,false);
	
   //evento de pulsacion de tecla		
	document.addEventListener('keypress',pulsa,false);
		
	

}

function validar(eventopordefecto)	// En la variable que pongamos aquí gestionaremos el evento por defecto 
{									// asociado al botón de "enviar" (type=submit) que en este caso
									// lo que hace por defecto es enviar un formulario.				
								
		insertaImg();					
		return true;
	
}


function insertaImg()
{
	//creamos nuevo nodo para la tabla	
	var img = document.createElement('img');
	img.setAttribute('src','dwec_img1.jpg');
	img.setAttribute('width','300');
	img.setAttribute('height','300');
	document.getElementsByTagName('body')[0].appendChild(img); 		
	
}

function pulsa(evt)
{
	//alert("Pulsa Izq.:"+document.getElementsByTagName('img')[0].getAttribute('src'));	
	//valor img actual
	var img_actual=document.getElementsByTagName('img')[0].getAttribute('src');
 	
 	if (evt.keyCode==37)  // Código de la tecla izq. (<--)
	{		
		switch (img_actual){
		case 'dwec_img1.jpg':
		   document.getElementsByTagName('img')[0].setAttribute('src','dwec_img3.jpg')
			break
		case 'dwec_img2.jpg':
		   document.getElementsByTagName('img')[0].setAttribute('src','dwec_img1.jpg')
			break
		case 'dwec_img3.jpg':
		   document.getElementsByTagName('img')[0].setAttribute('src','dwec_img2.jpg')	
			break						
		}  
	}	
	else
	{
		if (evt.keyCode==39)  // Código de la tecla dcha. (-->)
		{
			switch (img_actual){
		case 'dwec_img1.jpg':
		   document.getElementsByTagName('img')[0].setAttribute('src','dwec_img2.jpg')
			break
		case 'dwec_img2.jpg':
		   document.getElementsByTagName('img')[0].setAttribute('src','dwec_img3.jpg')
			break
		case 'dwec_img3.jpg':
		   document.getElementsByTagName('img')[0].setAttribute('src','dwec_img1.jpg')	
			break						
		}
		}
	}	       

}

