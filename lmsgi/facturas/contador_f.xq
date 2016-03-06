<html>
	<body>
	<table border="1">
	<tr>
		<td>Periodo</td>
		<td>Desde fecha</td>
		<td>Lectura fecha</td>
		<td>Hasta fecha</td>
		<td>Lectura fecha</td>
		<td>Consumo</td>
	</tr>
	{
			for $contador in db:open("facturas")/MensajeFacturacion/Facturas/FacturaATR/Medidas/Aparato/Integrador
			let $periodo:=data($contador/CodigoPeriodo) - 60
			let $dfecha:=xs:dateTime(data($contador/LecturaDesde/FechaHora))
			let $dlectura:=data($contador/LecturaDesde/Lectura)
			let $hfecha:=xs:dateTime($contador/LecturaHasta/FechaHora)
			let $hlectura:=data($contador/LecturaHasta/Lectura)
			let $consumo:=data($contador/ConsumoCalculado)
			where $contador/Magnitud="R1"
			order by $periodo
			return <tr><td>{$periodo}</td><td>{format-dateTime($dfecha,"[D,2]/[M,2]/[Y,4]")}</td><td>{$dlectura}
			</td><td>{format-dateTime($hfecha,"[D,2]/[M,2]/[Y,4]")}</td><td>{$hlectura}</td><td>{$consumo}</td></tr>			
	}		
	
	{
			let $tconsumo:= sum (for $contador in db:open("facturas")/MensajeFacturacion/Facturas/FacturaATR/Medidas/Aparato/Integrador
			let $consumo:=$contador/ConsumoCalculado
			where $contador/Magnitud="R1"
			return $consumo)

			return <tr><td></td><td></td><td></td><td></td><td></td><td>{$tconsumo}</td></tr>
	
	}
	</table>
	</body>
</html>


