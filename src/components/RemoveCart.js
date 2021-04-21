import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const RemoveCart = ({ item }) => {
    const { confirmDelete } = useContext(GlobalContext);

    return (
        <div className="remove">
            <FontAwesomeIcon onClick={(e) => confirmDelete(item.id)} icon={faTrash} size="2x" />
        </div>
    )
}

export default RemoveCart
