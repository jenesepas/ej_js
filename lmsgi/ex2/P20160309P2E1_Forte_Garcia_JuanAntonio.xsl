<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h1>CV</h1>				
				<h2>Datos personales</h2>
				<br/>				
				<table border="0">
					<tr>
					<td>Nombre:</td>
					<td><xsl:value-of select="/cv/datospersonales/@nombre" /></td>  
					<td>   </td>
					<td><xsl:value-of select="/cv/datospersonales/@apellidos" /></td>
					</tr>
				</table>				
				<br/>
				<h2>Experiencia profesional</h2>				
				<xsl:for-each select="/cv/experiencia/trabajo">
				<ul>					
					<li>
					<xsl:value-of select="@desde" />
					<xsl:value-of select="@hasta" />
					<xsl:value-of select="@empresa" />
					</li>				
				</ul>
				</xsl:for-each>	
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>