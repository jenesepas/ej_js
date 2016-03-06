for $contador in db:open("facturas")/MensajeFacturacion/Facturas/FacturaATR/Medidas/Aparato/Integrador
let $periodo:=data($contador/CodigoPeriodo) - 60
let $dfecha:=xs:dateTime(data($contador/LecturaDesde/FechaHora))
let $dlectura:=$contador/LecturaDesde/Lectura
let $hfecha:=xs:dateTime($contador/LecturaHasta/FechaHora)
let $hlectura:=$contador/LecturaHasta/Lectura
let $consumo:=$contador/ConsumoCalculado
where $contador/Magnitud="R1"
order by $periodo

return format-dateTime($dfecha,"[D,2][M,2][Y,4]")


