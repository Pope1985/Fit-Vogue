import React from "react";
import{ createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency= "₦";
    const shippingFee = 5000;
    const[search,setSearch] = React.useState("");
    const [showSearch,setShowSearch] = React.useState(false);


    const value = {
        products,
        currency,
        shippingFee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;