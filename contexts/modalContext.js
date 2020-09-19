import React, { createContext, useState } from 'react'; 


export const ModalContext = createContext({}); 


export const ModalContextProvider = (props) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ showTitle, setShowTitle ] = useState('');
    const [ showModalContent, setShowModalContent ] = useState({});
    const provider = [{ isModalOpen, setIsModalOpen}, {showTitle, setShowTitle}, {showModalContent, setShowModalContent }]

    return(
        <ModalContext.Provider value={provider}>
            {props.children}
        </ModalContext.Provider>

    )
}

