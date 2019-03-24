import React from "react";

// set the defaults
const ShoppingCartContext = React.createContext({
    items: [],
    addItems: () => {}
});

export default ShoppingCartContext;