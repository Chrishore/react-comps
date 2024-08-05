


function Table({ tableData, tableConfig, keyGen }) {

    return (
        <div>
            <table className="table-auto border-spacing-2 ">
                <thead>
                    <tr className="border-b-2" >
                        {tableConfig.map((config) => {
                            return (
                                <th className="p-3" key={config.label}>{config.label}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => {
                        return (
                            <tr className="border-b" key={keyGen(item)}>
                                {tableConfig.map((config) => {
                                    return (
                                        <td className="p-3" key={config.label}>{config.render(item)}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;