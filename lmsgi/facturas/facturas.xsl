<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h3>Detalle de potencias contratadas en el punto de suministro:
				</h3>
				<ul>Referencia CUPS: <xsl:value-of select="/*/Cabecera/Codigo" /></ul>
				<ul>Número de serie del contador: <xsl:value-of select="/*/Facturas/FacturaATR/Medidas/Aparato/NumeroSerie" /></ul>
				<br/>				
				<table border="1">
					<tr bgcolor="#9acd32">
						<th>Periodo</th>
						<th>Watios</th>						
					</tr>
					<xsl:for-each select="/*/Facturas/FacturaATR/Potencia/TerminoPotencia/Periodo">
					<tr>					
					<td><xsl:value-of select="@nombre" /></td>
					<td><xsl:value-of select="PotenciaContratada" /></td>					
					</tr>
					</xsl:for-each>						
					<br/>	
				</table>			
																
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>