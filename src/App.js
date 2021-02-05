import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Result";
import Spinner from "./components/Spinner";

function App() {
  const [cantidad, cantidadGuardada] = useState(0);
  const [plazo, plazoGuardado] = useState(0);
  const [total, totalGuardado] = useState(0);
  const [cargando, cargandoGuardado] = useState(false);
  let component;
  if (cargando) {
    component = <Spinner />;
  } else if (total === 0 || isNaN(total)) {
    component = <Mensaje />;
  } else {
    component = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }
  return (
    <Fragment>
      <Header titulo="Cotizador de Préstamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          cantidadGuardada={cantidadGuardada}
          plazo={plazo}
          plazoGuardado={plazoGuardado}
          totalGuardado={totalGuardado}
          cargandoGuardado={cargandoGuardado}
        />
        <div className="mensajes">{component}</div>
      </div>
    </Fragment>
  );
}

export default App;
