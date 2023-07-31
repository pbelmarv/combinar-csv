import { useState, createContext } from "react";
import Papa from "papaparse";

const DatosContext = createContext();

const DatosProvider = ({ children }) => {
    const [csvOriginal, setCsvOriginal] = useState([]);
    const [csvNuevo, setCsvNuevo] = useState([]);
    const [archivoCombinado, setArchivoCombinado] = useState();

    const handleOriginalFileChanger = (event) => {
        const archivo = event.target.files[0];

        if (!archivo) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const contenido = e.target.result;
            const parsedData = Papa.parse(contenido, {
                delimiter: ";", // Establece el delimitador de separación
                header: true,
            }).data;
            setCsvOriginal(parsedData);
        };

        reader.readAsText(archivo);
    };

    const handleNewFileChanger = (event) => {
        const archivo = event.target.files[0];

        if (!archivo) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const contenido = e.target.result;
            const parsedData = Papa.parse(contenido, {
                delimiter: ";",
                header: true,
            }).data;
            setCsvNuevo(parsedData);
        };

        reader.readAsText(archivo);
    };

    const handleCompareData = () => {
        if (csvOriginal.length === 0 || csvNuevo.length === 0) {
            console.log("Ambos campos son obligatorios");
            return;
        }

        const nuevosRegistros = csvNuevo.filter(
            (item) => !csvOriginal.some((oldItem) => oldItem.Name === item.Name)
        );
        console.log(nuevosRegistros);

        const procesoDatos = [...csvOriginal, ...nuevosRegistros];
        setArchivoCombinado(procesoDatos);

        // Funcion para exportar a Csv
        const csv = Papa.unparse(archivoCombinado);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <DatosContext.Provider
            value={{
                handleOriginalFileChanger,
                csvOriginal,
                handleNewFileChanger,
                csvNuevo,
                handleCompareData,
            }}
        >
            {children}
        </DatosContext.Provider>
    );
};

export { DatosProvider };

export default DatosContext;
