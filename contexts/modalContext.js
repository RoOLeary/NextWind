import React, { createContext, useState } from 'react'; 
export const ModalContext = createContext({}); 

export const ModalContextProvider = (props) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ showModalContent, setShowModalContent ] = useState({});
   
    let state = {
        isModalOpen,
        showModalContent
    };

    let handlers = {
        setIsModalOpen,
        setShowModalContent
    }; 

    const provider = [{state, handlers}]
    return(
        <ModalContext.Provider value={provider}>
            {props.children}
        </ModalContext.Provider>
    )
}

