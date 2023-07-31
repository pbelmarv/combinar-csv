import useDatos from "../hooks/useDatos";

const CSVReaderNuevo = () => {
    const { handleNewFileChanger, csvNuevo } = useDatos();
    return (
        <div className="px-4">
            <h1 className="text-2xl text-center text-sky-700 pb-4">
                Archivo .CSV con nuevos datos
            </h1>
            <label className="flex justify-center w-full h-32 transition-colors bg-white border-2 border-gray-400 border-dashed appearance-none cursor-pointer hover:border-gray-600 focus:outline-none">
                <span className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                    </svg>
                    <span className="font-medium text-gray-600">
                        <span className="text-blue-600 underline no-underline text-2xl text-gray-500">
                            {" "}
                            Seleccione el archivo .CSV actualizado
                        </span>
                    </span>
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleNewFileChanger}
                    />
                </span>
            </label>
            <h1 className="py-3 border-b border-sky-600 text-center">
                Información nuevo CSV
            </h1>
            <table className="table-auto w-full mt-4">
                <thead>
                    <tr>
                        {csvNuevo.length > 0 &&
                            Object.keys(csvNuevo[0]).map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 bg-gray-400"
                                >
                                    {header}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {csvNuevo.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-t border-gray-400">
                            {Object.values(row).map((value, index) => (
                                <td key={index} className="px-4 py-2">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CSVReaderNuevo;
