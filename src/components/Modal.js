import React, {useContext} from 'react'
import { motion } from 'framer-motion';
import { GlobalContext } from '../context/GlobalState'

const Modal = () => {
    const { deleteId, deleteCart } = useContext(GlobalContext);

    return (
            <motion.div className='backdrop'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
            >
                <motion.div className='modal'
                    initial={{y: -100}}
                    animate={{y: '30vh'}}
                    transition={{duration: 0.6}}
                >
                    <h1>Remove from Cart?</h1>
                    <button onClick={(e) => deleteCart(deleteId)}>Remove</button>
                </motion.div>
            </motion.div>
    )
}

export default Modal
