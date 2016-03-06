<html>
 <body>
 <table border='1'>
 	<tr>
	 	<td>Fecha</td>
		 <td>Localidad</td>
		 <td>Gira</td>
		 <td>Grupo</td>
	 </tr>	 
 {
  for $actu in db:open("gruposygiras")/*/giras/gira/actuacion
  let $fecha := $actu/@fecha
  let $localidad := $actu/@localidad
  let $nombre_gira := $actu/../@nombre
  let $id_grupo := $actu/../@grupo
  let $nombre_grupo := db:open("gruposygiras")/*/grupos/grupo[@id=$id_grupo]/@nombre
  order by $fecha
  return <tr><td>{data($fecha)}</td><td>{data($localidad)}</td><td>{data($nombre_gira)}</td><td>{data($nombre_grupo)}</td></tr>
 }
 </table>
 <br/>
 <p>Total de conciertos:
 {
 	let $t_conci := count(db:open("gruposygiras")/*/giras/gira/actuacion)
	 return $t_conci
 }
 </p>
 </body>
</html>  