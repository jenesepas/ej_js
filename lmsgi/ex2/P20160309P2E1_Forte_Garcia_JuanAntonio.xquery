<html>
	<body>
	<h3>Detalle de cursos de 50 horas o más:</h3>
	<table border="1">
	<tr>
		<td>Año</td>
		<td>Titulo</td>		
	</tr>
	{
			for $titu in db:open("P20160309P2E1_Forte_Garcia_JuanAntonio(xsl)")/cv/formacion/titulacion
			let $anyo:=data($titu/$anyo)
			let $titulo:=data($titu/$titulo)
			return <tr><td>{$anyo}</td><td></td><td>{$titulo}</td></tr>			
	}		
	
	</table>
	</body>
</html>