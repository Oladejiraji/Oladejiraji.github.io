import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Amount = ({ item }) => {
    const { increase, decrease } = useContext(GlobalContext);

    return (
        <div className="amount">
            <span onClick={(e) => decrease(item.id)} >-</span>
            <span>{item.amount}</span>
            <span onClick={(e) => increase(item.id)} >+</span>
        </div>
    )
}

export default Amount
