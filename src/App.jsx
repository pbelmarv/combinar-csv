import CSVReaderOriginal from "./components/CSVReaderOriginal";
import CSVReaderNuevo from "./components/CSVReaderNuevo";
import CompararDatos from "./components/CompararDatos";
import { DatosProvider } from "./context/datosProvider";

function App() {
    return (
        <DatosProvider>
            <>
                <div className="w-full flex flex-1 md:justify-between bg-slate-400 py-4">
                    <div className="w-1/2 bg-white py-5 mx-6 rounded-lg shadow-xl">
                        <CSVReaderOriginal />
                    </div>
                    <div className="w-1/2 bg-white py-5 mx-6 rounded-lg shadow-xl">
                        <CSVReaderNuevo />
                    </div>
                </div>
                <div className="bg-slate-400">
                    <div>
                        <CompararDatos />
                    </div>
                </div>

                <footer className="bg-gray-800 py-4 text-white text-center">
                    <div className="container mx-auto">
                        <p>&copy; {new Date().getFullYear()}</p>
                    </div>
                </footer>
            </>
        </DatosProvider>
    );
}
export default App;
