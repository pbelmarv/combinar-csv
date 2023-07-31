import { useContext } from "react";
import DatosContext from "../context/datosProvider";

const useDatos = () => {
    return useContext(DatosContext);
};

export default useDatos;
