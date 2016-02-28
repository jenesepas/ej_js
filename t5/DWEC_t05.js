// javascripts

window.onload=iniciar;

function iniciar()
{
	//inicializamos cookie  
	document.cookie="contador=0";
	
	//eventos perdida de foco
	document.getElementById("nombre").addEventListener('blur',convertirMayusculas,false);
	document.getElementById("apellidos").addEventListener('blur',convertirMayusculas,false);
	
	//evento onclick boton enviar	
	document.getElementById("enviar").addEventListener('click',validar,false);
}

function validar(eventopordefecto)	// En la variable que pongamos aquí gestionaremos el evento por defecto 
{									// asociado al botón de "enviar" (type=submit) que en este caso
									// lo que hace por defecto es enviar un formulario.
		
	//contamos las veces q pulsamos enviar
	intentados();

	// Validamos cada uno de los campos.
	if (validaText(this) && validarEdad() && validarNif() && validarEmail() && validarProvincia() && 
	validarFecha() && validarTelefono() && validarHora() && confirm("¿Deseas enviar el formulario?"))
		return true;
	else
	{
		// Cancelamos el evento de envío por defecto asignado al boton de submit enviar.
		eventopordefecto.preventDefault();		
		return false;	// Salimos de la función devolviendo false.
	}


}

function intentados()
{
			
	//recogemos cookie
	var cadena = document.cookie;
	
	//sacamos valor numérico	
	var n_intentos= cadena.substr(cadena.indexOf('=') + 1);		
	n_intentos++;
	
	//sacamos mensaje en contenedor intentos		
	document.getElementById("intentos").innerHTML="Intento de Envíos del formulario: " + n_intentos;
	
	//guardamos cookie.
	document.cookie="contador=" + n_intentos;
}



function validaText(objeto)
{	 	
	 // A esta función le pasamos un objeto (que en este caso es el botón de enviar.	
	var formulario = objeto.form;	// La propiedad form del botón enviar contiene la referencia del formulario dónde está ese botón submit.	
	
	// De esta manera podemos recorrer todos los elementos del formulario, buscando los que son de tipo texto.
	// Para validar que contengan valores.
	for (var i=0; i<formulario.elements.length; i++)
	{
		//Si campo no vacio (quitamos espacios en blanco)		
		if (!formulario.elements[i].value.trim() || formulario.elements[i].length==0)
		{
			document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" no puede estar en blanco";				
			formulario.elements[i].focus();
			return false;
		}
/*		
		// Aprovechamos y dentro de la función validamos también la edad.
		else if (formulario.elements[i].id=="edad")
			{
				if (isNaN(formulario.elements[i].value) || formulario.elements[i].value <0 || formulario.elements[i].value >105)
				{
					document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" posee valores incorrectos o la edad <0 o >105";
					//formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
			}
			// Aprovechamos y dentro de la función validamos también el nif.
			else if (formulario.elements[i].id=="nif")
			{				
				// nif: ^: empieza; \d{8}: 8 numeros; -: guion; [a-zA-Z]:letra; $: termina.
				var patron = /^\d{8}-[a-zA-Z]$/;
				
				if (!patron.test(formulario.elements[i].value))
				{										
					document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" posee valores incorrectos.";
					//formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
			}
			// Aprovechamos y dentro de la función validamos también el email.
			else if (formulario.elements[i].id=="email")
			{				
				// email: nombre: \w+([\.-]?\w+)* : empieza por letra o numero (1 o más) y le siguen + letras, números, puntos y guiones {0 o +}.
				//servidor: @\w+([\.-]?\w+)* : @ + empieza por letra o numero (1) y le siguen + letras, números, puntos y guiones {0 o +}
				//dominio: (\.\w{2,4})+ :punto + letras, numeros {de 2 a 4}, {1 o más}

				var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
				
				if (!patron.test(formulario.elements[i].value))
				{										
					document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" posee valores incorrectos.";
					//formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
			}

			// Aprovechamos y dentro de la función validamos también la provincia.
			else if (formulario.elements[i].id=="provincia")
			{				
				// Comprueba que la opción seleccionada sea diferente a 0.
				// Si es la 0 es que no ha seleccionado ningún nombre de Provincia.
				if (formulario.elements[i].selectedIndex==0)
				{
					document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" está sin seleccionar.";
					//formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
				
			}

			// Aprovechamos y dentro de la función validamos también la fecha.
			else if (formulario.elements[i].id=="fecha")
			{				
				// fecha: ^: 2 digitos; barra o guion{1}; 2 digitos;barra o guion{1}; 4 digitos
				var patron = /^\d{2}([\/-]?){1}\d{2}([\/-]?){1}\d{4}$/;
				
				if (!patron.test(formulario.elements[i].value))
				{										
					document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" posee valores incorrectos.";
					//formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
			}
			// Aprovechamos y dentro de la función validamos también el tfno.
			else if (formulario.elements[i].id=="telefono")
			{				
				// tfno: ^: 9 digitos; 
				var patron = /^\d{9}$/;
				
				if (!patron.test(formulario.elements[i].value))
				{										
					document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" posee valores incorrectos.";
					//formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
			}

			// Aprovechamos y dentro de la función validamos también la hora.
			else if (formulario.elements[i].id=="hora")
			{				
				// hora: ^: 2 digitos; 2 puntos; 2 digitos
				var patron = /^\d{2}:\d{2}$/;
				
				if (!patron.test(formulario.elements[i].value))
				{										
					document.getElementById("errores").innerHTML="Error: El campo "+formulario.elements[i].name+" posee valores incorrectos.";
					//formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
			}
	*/	
	}
	
	return true;
}

function validarEdad()
{
	 	
	if (isNaN(document.getElementById("edad").value) || document.getElementById("edad").value <0 || document.getElementById("edad").value >105)
	{
		document.getElementById("errores").innerHTML="Error: El campo Edad posee valores incorrectos o la edad <0 o >105";		
		document.getElementById("edad").focus();
		return false;
	}
	else
		return true;
}

function validarNif()
{
	 	
	// nif: ^: empieza; \d{8}: 8 numeros; -: guion; [a-zA-Z]:letra; $: termina.
	var patron = /^\d{8}-[a-zA-Z]$/;
	
	if (!patron.test(document.getElementById("nif").value))
	{										
		document.getElementById("errores").innerHTML="Error: El campo Nif posee valores incorrectos.";
		//formulario.elements[i].className="error";
		document.getElementById("nif").focus();
		return false;
	}
	else
		return true;
}


function validarEmail()
{
	 	
	// email: nombre: \w+([\.-]?\w+)* : empieza por letra o numero (1 o más) y le siguen + letras, números, puntos y guiones {0 o +}.
	//servidor: @\w+([\.-]?\w+)* : @ + empieza por letra o numero (1) y le siguen + letras, números, puntos y guiones {0 o +}
	//dominio: (\.\w{2,4})+ :punto + letras, numeros {de 2 a 4}, {1 o más}

	var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	
	if (!patron.test(document.getElementById("email").value))
	{										
		document.getElementById("errores").innerHTML="Error: El campo Email posee valores incorrectos.";
		//formulario.elements[i].className="error";
		document.getElementById("email").focus();
		return false;
	}
	else
		return true;
}

function validarProvincia()
{
	 	
	// Comprueba que la opción seleccionada sea diferente a 0.
	// Si es la 0 es que no ha seleccionado ningún nombre de Provincia.
	if (document.getElementById("provincia").selectedIndex==0)
	{
		document.getElementById("errores").innerHTML="Error: El campo Provincia está sin seleccionar.";		
		document.getElementById("provincia").focus();
		return false;
	}
	else
		return true;
}

function validarFecha()
{
	 	
	// fecha: ^: 2 digitos; barra o guion{1}; 2 digitos;barra o guion{1}; 4 digitos
	var patron = /^\d{2}([\/-]?){1}\d{2}([\/-]?){1}\d{4}$/;
	
	//alert(patron);
	if (!patron.test(document.getElementById("fecha").value))
	{										
		document.getElementById("errores").innerHTML="Error: El campo Fecha posee valores incorrectos.";		
		document.getElementById("fecha").focus();
		return false;
	}
	else
		return true;
}

function validarTelefono()
{
	 	
	// tfno: ^: 9 digitos; 
	var patron = /^\d{9}$/;
	
	if (!patron.test(document.getElementById("telefono").value))
	{										
		document.getElementById("errores").innerHTML="Error: El campo Tfno posee valores incorrectos.";		
		document.getElementById("telefono").focus();
		return false;
	}
	else
		return true;
}

function validarHora()
{
	 	
	// hora: ^: 2 digitos; 2 puntos; 2 digitos
	var patron = /^\d{2}:\d{2}$/;
	
	if (!patron.test(document.getElementById("hora").value))
	{										
		document.getElementById("errores").innerHTML="Error: El campo Hora posee valores incorrectos.";		
		document.getElementById("hora").focus();
		return false;
	}
	else
		return true;
}

function convertirMayusculas(objeto)
{
	 	
	//covierte a mayusculas campos nombre y apellidos
	convierteMayusculas(this);
}

function convierteMayusculas(objeto)
{
	 	
	document.getElementById(objeto.name).value=document.getElementById(objeto.name).value.toUpperCase();
}
