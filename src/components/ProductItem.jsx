import React, { Component } from 'react';

export default class ProductItem extends Component {

    render() {
        return (
            <div>
                <article className="card card-product">
                <div className="card-body">
                    <div className="row">
                        <aside className="col-sm-3">
                            <div className="img-wrap"><img src="images/items/polizei-ente.jpg"/></div>
                        </aside>
                        <article className="col-sm-6">
                            <h4 className="title">Polizei Ente</h4>
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
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit
                                amet,
                                consectetuer
                                adipiscing elit, Ut wisi enim ad minim veniam </p>
                            <dl className="dlist-align">
                                <dt>Color</dt>
                                <dd>Black and white</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Material</dt>
                                <dd>Syntetic, wooden</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Delivery</dt>
                                <dd>Russia, USA, and Europe</dd>
                            </dl>
                        </article>
                        <aside className="col-sm-3 border-left">
                            <div className="action-wrap">
                                <div className="price-wrap h4">
                                    <span className="price"> $56 </span>
                                    <del className="price-old"> $98</del>
                                </div>

                                <p className="text-success">Free shipping</p>
                                <br/>
                                <p>
                                    <a href="#" className="btn btn-primary"> Buy now </a>
                                    <a href="#" className="btn btn-secondary"> Details </a>
                                </p>
                                <a href="#"><i className="fa fa-heart"></i> Add to wishlist</a>
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

