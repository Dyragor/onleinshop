import React, { Component } from 'react';
import ShoppingCartContext from '../shoppingcart-context';

export default class ProductItem extends Component {
    addItems = item => {
        this.setState({ item });
    };

    state = {
        items: ['hello', 'ade merci'],
        addItems: this.addItems()
    };
    render() {
        return (
            <div>
                <article className="card card-product">
                <div className="card-body">
                    <div className="row">
                        <aside className="col-sm-3">
                            <div className="img-wrap"><img src={"images/items/"+this.props.product.img}/></div>
                        </aside>
                        <article className="col-sm-6">
                            <h4 className="title">{this.props.product.name}</h4>
                            <div className="rating-wrap  mb-2">
                                <ul className="rating-stars">
                                    <li style={style} className="stars-active">
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders</div>
                            </div>
                            <p>{this.props.product.desc}</p>
                        </article>
                        <aside className="col-sm-3 border-left">
                            <div className="action-wrap">
                                <div className="price-wrap h4">
                                    <span className="price"> ${this.props.product.price}</span>
                                </div>

                                <p className="text-success">Free shipping</p>
                                <br/>
                                <p>
                                    <ShoppingCartContext.Consumer>
                                        {({ items, addItems }) => (
                                            <button  onClick={() => addItems(this.props.product.name)} className="btn btn-primary">Kaufen</button>
                                        )}
                                    </ShoppingCartContext.Consumer>
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
            </div>
        );
    }
}
const style = {
    width: '80%'
};

