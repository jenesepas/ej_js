<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h2>Detalle de llamadas
					facturadas el <xsl:value-of select="/factura/@emision" />
					al cliente <xsl:value-of select="/factura/@cliente" />
				</h2>
				<table border="1">
					<tr bgcolor="#9acd32">
						<th>Id</th>
						<th>Tipo</th>
						<th>Fecha y hora</th>
						<th>Destino</th>
						<th>Tiempo</th>
					</tr>
					<xsl:for-each select="/factura/llamadas/llamada"> <!--//[@id='L00002']-->
					<tr>
						<td><xsl:value-of select="@id" /></td>
						<td><xsl:value-of select="@tipo" /></td>
						<td><xsl:value-of select="fechahora/@inicio" /></td>
						<td><xsl:value-of select="destino/@numero" /></td>
						<td><xsl:value-of select="tarificacion/@duracion" /></td>
					</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>

