import React, {createContext, useState} from 'react';

const initialState = {
    products: [
        {id: 1, name: 'Sneakers', price: 10, image: 'images/prod2.png', inCart: false, amount: 1},
        {id: 2, name: 'Sneakers', price: 20, image: 'images/prod3.png', inCart: false, amount: 1},
        {id: 3, name: 'Sneakers', price: 30, image: 'images/prod4.png', inCart: false, amount: 1},
        {id: 4, name: 'Sneakers', price: 40, image: 'images/prod8.png', inCart: false, amount: 1},
        {id: 5, name: 'Sneakers', price: 50, image: 'images/prod7.png', inCart: false, amount: 1},
        {id: 6, name: 'Sneakers', price: 60, image: 'images/prod10.png', inCart: false, amount: 1}
    ]
}

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [isModal, setIsModal] = useState(false);
    const [deleteId, setDeleteId] = useState();

    function increase (id) {
        const newState = {...state};
        const singleCart = newState.products.find(item => item.id === id);
        singleCart.amount = singleCart.amount + 1;
        setState(newState);
    }

    function decrease (id) {
        const newState = {...state};
        const singleCart = newState.products.find(item => item.id === id);
        if (singleCart.amount >= 2) {
            singleCart.amount = singleCart.amount - 1;
            setState(newState);
        } else if (singleCart.amount == 1) {
            setIsModal(true);
            setDeleteId(id);
        }
        
    }

    function deleteCart (id) {
        const newState = {...state};
        const singleCart = newState.products.find(item => item.id === id);
        singleCart.inCart = false;
        setState(newState);
        setIsModal(false);
    }

    function addCart (id) {
        const newState = {...state};
        const singleCart = newState.products.find(item => item.id === id);
        singleCart.inCart = true;
        setState(newState);
    }

    function confirmDelete (id) {
        setIsModal(true);
        setDeleteId(id);
    }

    return(<GlobalContext.Provider value={{
        products: state.products,
        cart: state.cart,
        increase,
        decrease,
        deleteCart,
        addCart,
        confirmDelete,
        isModal,
        setIsModal,
        deleteId
    }}>
        { children }
    </GlobalContext.Provider>)
}