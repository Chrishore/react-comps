import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal"

const ModalPage = function () {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOnClick = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }
    const actionBar = <Button secondary rounded onClick={handleModalClose} >Close</Button>

    return (
        <div>
            <Button primary rounded outline onClick={handleOnClick}>Open Modal</Button>
            {isModalOpen && <Modal actionBar={actionBar} onClose={handleModalClose}>
                <h1>THIS IS A MODAL</h1>
                </Modal>}
        </div>

    )
}

export default ModalPage;