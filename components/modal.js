import React, { useContext } from 'react'; 
import { ModalContext } from './../contexts/modalContext';

const Modal = ( props ) => {

    const ctx = useContext(ModalContext);
    console.log(ctx);
    let {item} = props;
    let show = ctx[0].isModalOpen
    let protoModal = {
        background: "white",
        padding: "10px",
        display: show ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        width: "60%"
    };

    let modalBackground = {
        width: "100%",
        height: "100%",
        background: "black",
        display: show ? "block" : "none",
        position: "absolute",
        zIndex: "9999",
        justifyContent: "center",
        alignItems: "center",
    }
    return(
        <div style={modalBackground}>
            <div className="protoModal" style={protoModal}>
                <h2>{ctx[2].showModalContent.title ? ctx[2].showModalContent.title : 'STUFF JUST FOR NOW'}</h2>
                <p>{ctx[2].showModalContent.description ? ctx[2].showModalContent.description : 'STUFF JUST FOR NOW'}</p>
            </div>
        </div>
    )
};





export default Modal