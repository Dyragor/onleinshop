import React, {Component} from 'react';
import './App.css';
import ProductItem from './components/ProductItem.jsx';

class App extends Component {
    render() {
        return (
            <div>
                {Products.map((product) => {
                    return (<ProductItem product={product} />)
                })}
            </div>
        );
    }
}

const Products = [
    {
        name: "Polizei",
        desc: "Polzeiauto brum brum",
        price: "99000"
    },
    {
        name: "Feuerwehr",
        desc: "Feuerwehrauto tüta",
        price: "87000"
    }
];
export default App;
