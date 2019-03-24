import React, { Component } from 'react';
import ShoppingCartContext from '../shoppingcart-context';


export default class ProductDetail extends Component {

    render() {
        return (
            <div>
                <section className="section-pagetop bg-secondary">
                    <div className="container clearfix">
                        <h2 className="title-page">Page heading</h2>

                        <nav className="float-left">
                            <ol className="breadcrumb text-white">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Library</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section className="section-content bg padding-y">
                    <div className="container">
                        <div className="row">
                            <main className="col-sm-9">
                                <div>
                                    Warenkorb
                                </div>
                            </main>
                        </div>
                    </div>
                </section>
                <section className="section-name bg-white padding-y">
                    <div className="container">
                        <h4>Onleinshop</h4>
                        <p>Wir haben die Produkte, die sie wollen.</p>
                    </div>
                </section>
                <footer className="section-footer bg-secondary">
                    <div className="container">
                        <section className="footer-top padding-top">
                            <div className="row">
                                <aside className="col-sm-3 col-md-3 white">
                                    <h5 className="title">Customer Services</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Help center</a></li>
                                        <li><a href="#">Money refund</a></li>
                                        <li><a href="#">Terms and Policy</a></li>
                                        <li><a href="#">Open dispute</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-sm-3  col-md-3 white">
                                    <h5 className="title">My Account</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#"> User Login </a></li>
                                        <li><a href="#"> User register </a></li>
                                        <li><a href="#"> Account Setting </a></li>
                                        <li><a href="#"> My Orders </a></li>
                                        <li><a href="#"> My Wishlist </a></li>
                                    </ul>
                                </aside>
                                <aside className="col-sm-3  col-md-3 white">
                                    <h5 className="title">About</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#"> Our history </a></li>
                                        <li><a href="#"> How to buy </a></li>
                                        <li><a href="#"> Delivery and payment </a></li>
                                        <li><a href="#"> Advertice </a></li>
                                        <li><a href="#"> Partnership </a></li>
                                    </ul>
                                </aside>
                                <aside className="col-sm-3">
                                    <article className="white">
                                        <h5 className="title">Contacts</h5>
                                        <p>
                                            <strong>Phone: </strong> +123456789 <br/>
                                            <strong>Fax:</strong> +123456789
                                        </p>

                                        <div className="btn-group white">
                                            <a className="btn btn-facebook" title="Facebook" target="_blank" href="#"><i
                                                className="fab fa-facebook-f  fa-fw"></i></a>
                                            <a className="btn btn-instagram" title="Instagram" target="_blank" href="#"><i
                                                className="fab fa-instagram  fa-fw"></i></a>
                                            <a className="btn btn-youtube" title="Youtube" target="_blank" href="#"><i
                                                className="fab fa-youtube  fa-fw"></i></a>
                                            <a className="btn btn-twitter" title="Twitter" target="_blank" href="#"><i
                                                className="fab fa-twitter  fa-fw"></i></a>
                                        </div>
                                    </article>
                                </aside>
                            </div>
                            <br/>
                        </section>
                        <section className="footer-bottom row border-top-white">
                            <div className="col-sm-6">
                                <p className="text-white-50"> Made with {"<3"} <br/> by Andreas Schranz and Simon Kunz
                                </p>
                            </div>
                            <div className="col-sm-6 text-right">
                                <p className="text-sm-right text-white-50">
                                    Copyright &copy 2019 <br/>
                                    <a href="#" target="_blank"
                                       className="text-white-50">OnleinShop</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        );
    }
}
const style = {
    width: '80%'
};


