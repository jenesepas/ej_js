// javascripts

//vble para saber si tabla creada
var tablaCreada=0;

window.onload=iniciar;


function iniciar()
{						
	
	
	//creamos nuevo nodo para mensaje de validacion		
	var nuevoParrafo = document.createElement('p');
	var errores = document.createTextNode('');
	nuevoParrafo.appendChild(errores);
	document.getElementsByTagName('body')[0].appendChild(nuevoParrafo); 
		
	//evento onclick boton enviar	
	document.getElementById("boton").addEventListener('click',validar,false);
}

function validar(eventopordefecto)	// En la variable que pongamos aquí gestionaremos el evento por defecto 
{									// asociado al botón de "enviar" (type=submit) que en este caso
									// lo que hace por defecto es enviar un formulario.				

	//borramos nodo tabla
	//alert("tabla: "+tablaCreada);	
	if (tablaCreada==1)
	{	
		//alert("tabla: ");		
		var p = document.getElementsByTagName('table')[0];
		p.parentNode.removeChild(p);
	}					
			
	// Validamos cada uno de los campos.&& confirm("¿Deseas crear la tabla?")
	if (validarFilas() && validarColumnas()){
		crearTabla();		
		return true;
	}	
	else
	{
		// Cancelamos el evento de envío por defecto asignado al boton de submit enviar.
		eventopordefecto.preventDefault();		
		return false;	// Salimos de la función devolviendo false.
	}
}

function validarFilas()
{	
	var patron = /^[1-9]{1}(\d)*/;
	
	if (!patron.test(document.getElementById("filas").value))
	{
		//alert("si1: "+document.getElementById("filas").value);		
		document.getElementsByTagName("p")[0].childNodes[0].nodeValue="Error: El campo Filas está vacio ó posee valores no numéricos.";					
		document.getElementById("filas").focus();
		tablaCreada=0;
		return false;
	}
	else {
		document.getElementsByTagName("p")[0].childNodes[0].nodeValue="";
		//alert("else1: ");	
		return true;
	}	
}

function validarColumnas()
{
	 	
	var patron = /^[1-9]{1}(\d)*/;
	
	if (!patron.test(document.getElementById("columnas").value))
	{
		//alert("si2: "+document.getElementById("columnas").value);		
		document.getElementsByTagName("p")[0].childNodes[0].nodeValue="Error: El campo Columnas está vacio ó posee valores no numéricos.";		
		document.getElementById("columnas").focus();
		tablaCreada=0;
		return false;
	}
	else {
		document.getElementsByTagName("p")[0].childNodes[0].nodeValue="";
		//alert("else2: ");			
		return true;
	}	
}

function crearTabla()
{
	//creamos nuevo nodo para la tabla	
	var tabla = document.createElement('table');
	tabla.setAttribute('border','1');
	tabla.setAttribute('width','200');
	tabla.setAttribute('height','200');
	document.getElementsByTagName('body')[0].appendChild(tabla); 	
	
	//indicamos que la tabla fue creada
	tablaCreada=1;
	
	for (var i=0; i<document.getElementById("filas").value; i++)
	{
		//nuevo nodo por fila
		var fila = document.createElement('tr');	
		document.getElementsByTagName('table')[0].appendChild(fila);
			
		for (var y=0; y<document.getElementById("columnas").value; y++)
		{
			//alert("Creando..."+i+"-"+y);
			var columna = document.createElement('td');	
			document.getElementsByTagName('table')[0].childNodes[i].appendChild(columna);
		}		
	}		
	//alert("tabla2: "+tablaCreada);	
	//document.getElementById("filas").value="";
	//document.getElementById("columnas").value="";
		
}
