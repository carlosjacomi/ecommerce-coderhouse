import { createContext, useState } from "react";


/** Este componente se usa para definir los context del carro de compra
 * @component
*/

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [itemsCart, setItemsCart] = useState([]);

    
    const onAdd = (product, value) => {
        product.quantity = value;
        setItemsCart((old) => old.concat({product}))
    }

    const onRemove = (id) => {
        setItemsCart((old) => old.filter(item => item.product.id !== id))
    }

    const value = {
        itemsCart,
        onAdd,
        onRemove
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}    
export default CartProvider;