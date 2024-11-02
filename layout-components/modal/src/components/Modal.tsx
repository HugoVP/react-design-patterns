import React, { useCallback, useState } from "react";
import styled from "styled-components";

type ModalProps = {
    children: React.ReactNode;
};

const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    overflow: auto;
    background-color: #00000067;
    width: 100%;
    height: 100%;
`;

const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background-color: wheat;
    width: 50%;
`;

function Modal({ children }: ModalProps) {
    const [show, setShow] = useState(false);

    const handleShowModal = useCallback(() => {
        setShow(true);
    }, []);

    const handleHideModal = useCallback(() => {
        setShow(false);
    }, []);

    const handleStopPropagation = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);

    return (
        <>
            <button onClick={handleShowModal}>
                {"Show Modal"}
            </button>
            {show ? (
                <ModalBackground onClick={handleHideModal}>
                    <ModalContent onClick={handleStopPropagation}>
                        <button onClick={handleHideModal}>{"Hide Modal"}</button>
                        {children}
                    </ModalContent>
                </ModalBackground>
            ) : null}
        </>
    );
}

export default Modal;
