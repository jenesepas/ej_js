let $tconsumo:= sum (for $contador in db:open("facturas")/MensajeFacturacion/Facturas/FacturaATR/Medidas/Aparato/Integrador
let $consumo:=$contador/ConsumoCalculado
where $contador/Magnitud="R1"
return $consumo)

return $tconsumo

