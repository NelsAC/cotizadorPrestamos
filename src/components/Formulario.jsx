import { calcularTotal } from "../helpers";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const Formulario = (props) => {
  const { cantidad, cantidadGuardada, plazo, plazoGuardado, totalGuardado, cargandoGuardado }=props;
  // const [error, errorGuardado]=useState(false);
  const validarForm = (e) => {
    e.preventDefault();
    if (cantidad === 0 || isNaN(cantidad) || isNaN(plazo) || plazo === 0) {
      MySwal.fire({
        position: "center",
        icon: "warning",
        title: "Datos Incorrectos",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    cargandoGuardado(true)
    setTimeout(() => {
      const total=calcularTotal(cantidad, plazo);
      totalGuardado(total);
      cargandoGuardado(false)
    }, 1500);
  };
  return (
    <form onSubmit={validarForm}>
      <div className="row">
        <div>
          <label>Cantidad Prestamo</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Ejemplo: 3000"
            onChange={(e) => cantidadGuardada(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Plazo para Pagar</label>
          <select
            className="u-full-width"
            onChange={(e) => plazoGuardado(parseInt(e.target.value))}
          >
            <option value="0">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Calcular"
            className="button-primary u-full-width"
          />
        </div>
      </div>
    </form>
  );
};
export default Formulario;
