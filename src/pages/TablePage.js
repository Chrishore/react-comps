import Table from "../components/Table"

function TablePage() {

    var tableData = [
        { name: "Apple", color: "bg-red-500", score: "2" },
        { name: "Orange", color: "bg-orange-500", score: "1" },
        { name: "Banana", color: "bg-yellow-500", score: "5" },
        { name: "Dragon Furit", color: "bg-pink-500", score: "4" },
        { name: "Green Apple", color: "bg-green-500", score: "3" },
    ];

    var tableConfig = [
        { label: "Name", render: (furit) => { return furit.name } },
        { label: "Color", render: (furit) => { return <div className={`p-3 m-2 ${furit.color}`}></div> } },
        { label: "Score", render: (furit) => { return furit.score } },
    ];

    const keyGen = (furit) => {
        debugger
        return furit.name;
    }
    return (
        <div>
            <Table tableData={tableData} tableConfig={tableConfig} keyGen={keyGen}></Table>
        </div>
    )
}

export default TablePage;