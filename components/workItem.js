import React, {useState, useContext} from 'react'; 
import { ModalContext } from './../contexts/modalContext';

const WorkItem = (props) => {

    const ctx = useContext(ModalContext);
    const [show, setShow ] = useState(false); 
    let { item } = props; 

    const logCurrent = (item) => {
        ctx[0].handlers.setIsModalOpen(!ctx[0].handlers.isModalOpen);
        ctx[0].handlers.setShowModalContent(props.item);
    } 

    return(
         <div className="w-full lg:w-1/3 px-2 mb-4" onClick={(e) => logCurrent(`${item}`)}>
            <div className="rounded shadow-md">              
                <img className="mx-auto" src={`${item.image}`} alt={`${item.title}`} />
                <div className="p-4">
                    <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                    <p>{item.excpert}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkItem;