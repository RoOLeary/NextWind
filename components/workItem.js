import React, {useState, useContext} from 'react'; 
import { ModalContext } from './../contexts/modalContext';

const WorkItem = (props) => {

    const ctx = useContext(ModalContext);
    const [show, setShow ] = useState(false); 
    let { item } = props; 
    
    const logCurrent = (item) => {
        console.log(props.item);
        ctx[0].handlers.setIsModalOpen(!ctx[0].handlers.isModalOpen);
        ctx[0].handlers.setShowModalContent(props.item);
    } 

    return(
         
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2" onClick={(e) => logCurrent(`${item}`)}>
            <div className="relative bg-white rounded border">
                <picture className="block bg-gray-200 border-b">
                    <img className="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 1" />
                </picture>
                <div className="p-4">
                    <h3 className="text-lg font-bold">
                        <a className="stretched-link" href="/james-jazz/" title="Card 1">
                        {item.title}
                        </a>
                    </h3>
                </div>
            </div>
        </div>
         
        
    )
}

export default WorkItem;