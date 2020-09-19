import React, { useContext } from 'react'; 
import { ModalContext } from './../contexts/modalContext';

const Modal = ( props ) => {
    
    const ctx = useContext(ModalContext);
    console.log(ctx);
    let {item} = props;
    let show = ctx[0].state.isModalOpen;

    let protoModal = {
        background: "white",
        padding: "10px",
        display: show ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        width: "60%",
        opacity: 1,
    };

    let modalBackground = {
        //background: "black",
        display: show ? "flex" : "none",
        // position: "absolute",
        // zIndex: "9999",
        // justifyContent: "center",
        // alignItems: "center",
    }

    const closeModal = () => {
        ctx[0].handlers.setIsModalOpen(!show);
    }


    return(
        <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center" style={modalBackground}>
            <div className="protoModal" style={protoModal}>
                  <h2>{ctx[0].state.showModalContent.title ? ctx[0].state.showModalContent.title : 'STUFF JUST FOR NOW'}</h2>
                <p>{ctx[0].state.showModalContent.description ? ctx[0].state.showModalContent.description : 'STUFF JUST FOR NOW'}</p>
                <a onClick={() => closeModal()}>Close</a>   
            </div>
        </div>
    )
};





export default Modal