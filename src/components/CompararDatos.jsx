import useDatos from "../hooks/useDatos";

const CompararDatos = () => {
    const { handleCompareData } = useDatos();

    return (
        <div className="py-2 px-5">
            <button
                type="button"
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-900 transition-colors text-white rounded-md shadow-lg w-full"
                onClick={handleCompareData}
            >
                Comparar datos
            </button>
        </div>
    );
};

export default CompararDatos;
