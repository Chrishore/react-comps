import { useState } from "react";
import Dropdown from "../components/Dropdown"
const DropdownPage = function () {
    const [selected, setSelected] = useState(null);
    const options = [
        { label: "Red", value: "red" },
        { label: "Light Blue", value: "lightblue" },
        { label: "Maroon", value: "maroon" }
    ]
    return (
        <Dropdown options={options} value={selected} onChange={setSelected}></Dropdown>
    )
}

export default DropdownPage;