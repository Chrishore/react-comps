import reactDOM from 'react-dom';
import { useEffect, useRef } from "react";
import Button from './Button';
import classNames from "classnames";

function Modal({ onClose, actionBar, children }) {
    const handleOnClick = (e) => {
        e.stopPropagation();
        onClose();
    }

    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    },[]);

    return (reactDOM.createPortal(
        <div>
            <div onClick={handleOnClick} className='fixed inset-0 bg-gray-300 opacity-80'></div>
            <div className={classNames("fixed inset-40 p-4 bg-white")}>
                <div className='flex flex-col justify-between h-full'>
                    {children}
                    <div className="flex justify-end ">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>
        , document.querySelector(".modal-container")
    ))
}

export default Modal;