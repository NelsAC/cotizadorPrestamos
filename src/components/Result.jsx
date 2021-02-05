const Resultado = ({total, plazo, cantidad}) =>( 
<div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p>La cantidad solicitada es S/ {cantidad}</p>
    <p>A pagar en: {plazo} meses</p>
    <p>Su pago mensual es de: S/ {(total/plazo).toFixed(2)}</p>
    <p>Total a pagar: S/ {(total).toFixed(2)}</p>
    <h6>Alex kbro</h6>
</div>
 );

 
export default Resultado;