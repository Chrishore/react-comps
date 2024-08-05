import { useState, useRef, useEffect } from 'react';
import Panel from "../components/Panel";
import { GoChevronDown, GoChevronRight } from 'react-icons/go';


function Dropdown({ options, value, onChange }) {
    var ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (!ref.current) return;
            if (!ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler, true);

        return () => {document.removeEventListener('click', handler)}
    })
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setIsOpen(false);
        console.log(option);
        onChange(option)
    };
    const renderedItems = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' key={option.value} onClick={() => { handleOptionClick(option) }}> {option.label}</div >
        );
    });
    const icon = <span>{isOpen ? <GoChevronDown className='text-xl' /> : <GoChevronRight className='text-xl' />}</span>

    return (
        <div ref={ref} className='w-48 relative'>
            <Panel>
                <div onClick={handleOnClick} className='flex items-center justify-between '>
                    {value?.label || "Select an option"}
                    {icon}
                </div>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedItems}</Panel>}
        </div>
    );
}

export default Dropdown;