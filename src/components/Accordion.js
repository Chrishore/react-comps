import { useState } from "react";
import { GoTriangleRight, GoTriangleDown } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleOnExpandClick = (index) => {
        setExpandedIndex((currentUpdatedIndex) => {
            if (currentUpdatedIndex === index) {
                return null;
            }
            return index;
        
        })
        // console.log(index);
        // if (expandedIndex == index) {
        //     setExpandedIndex(null);
        // }
        // else {
        //     setExpandedIndex(index);
        // }
    }
    const rendered_item = items.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const icon = <span>{isExpanded ? <GoTriangleDown /> : <GoTriangleRight />}</span>
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => { handleOnExpandClick(index) }}>
                    {item.label} {icon}
                </div>
                {isExpanded && <div className="border-b p-5"><p>{item.content}</p></div>}
            </div>
        )
    })
    return (
        <div >
            <h1>Accordion</h1>
            <div className="border-x border-y rounded">
                {rendered_item}
            </div>
        </div>
    )
}

export default Accordion