import React, {Component} from 'react';
import './App.css';
import ProductItem from './components/ProductItem.jsx';
import ShoppingCartContext from './shoppingcart-context';

class App extends Component {
    addItems = items => {
        this.setState({items});
    };

    state = {
        items: [],
        addItems: this.addItems
    };
    render() {
        return (
            <div>
                <section class="section-pagetop bg-secondary">
                    <div class="container clearfix">
                        <h2 class="title-page">Page heading</h2>

                        <nav class="float-left">
                            <ol class="breadcrumb text-white">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                <section class="section-content bg padding-y">
                    <div class="container">
                        <div class="row">
                            <main class="col-sm-9">
                                <div>
                                    <ShoppingCartContext.Provider value={this.state}>
                                    {Products.map((product) => {
                                        return (<ProductItem product={product}/>)
                                    })}
                                      Warenkorb: {this.state.items}
                                    </ShoppingCartContext.Provider>
                                </div>
                            </main>
                        </div>
                    </div>
                </section>
                <section class="section-name bg-white padding-y">
                    <div class="container">
                        <h4>Onleinshop</h4>
                        <p>Wir haben die Produkte, die sie wollen.</p>
                    </div>
                </section>
                <footer class="section-footer bg-secondary">
                    <div class="container">
                        <section class="footer-top padding-top">
                            <div class="row">
                                <aside class="col-sm-3 col-md-3 white">
                                    <h5 class="title">Customer Services</h5>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Help center</a></li>
                                        <li><a href="#">Money refund</a></li>
                                        <li><a href="#">Terms and Policy</a></li>
                                        <li><a href="#">Open dispute</a></li>
                                    </ul>
                                </aside>
                                <aside class="col-sm-3  col-md-3 white">
                                    <h5 class="title">My Account</h5>
                                    <ul class="list-unstyled">
                                        <li><a href="#"> User Login </a></li>
                                        <li><a href="#"> User register </a></li>
                                        <li><a href="#"> Account Setting </a></li>
                                        <li><a href="#"> My Orders </a></li>
                                        <li><a href="#"> My Wishlist </a></li>
                                    </ul>
                                </aside>
                                <aside class="col-sm-3  col-md-3 white">
                                    <h5 class="title">About</h5>
                                    <ul class="list-unstyled">
                                        <li><a href="#"> Our history </a></li>
                                        <li><a href="#"> How to buy </a></li>
                                        <li><a href="#"> Delivery and payment </a></li>
                                        <li><a href="#"> Advertice </a></li>
                                        <li><a href="#"> Partnership </a></li>
                                    </ul>
                                </aside>
                                <aside class="col-sm-3">
                                    <article class="white">
                                        <h5 class="title">Contacts</h5>
                                        <p>
                                            <strong>Phone: </strong> +123456789 <br/>
                                            <strong>Fax:</strong> +123456789
                                        </p>

                                        <div class="btn-group white">
                                            <a class="btn btn-facebook" title="Facebook" target="_blank" href="#"><i
                                                class="fab fa-facebook-f  fa-fw"></i></a>
                                            <a class="btn btn-instagram" title="Instagram" target="_blank" href="#"><i
                                                class="fab fa-instagram  fa-fw"></i></a>
                                            <a class="btn btn-youtube" title="Youtube" target="_blank" href="#"><i
                                                class="fab fa-youtube  fa-fw"></i></a>
                                            <a class="btn btn-twitter" title="Twitter" target="_blank" href="#"><i
                                                class="fab fa-twitter  fa-fw"></i></a>
                                        </div>
                                    </article>
                                </aside>
                            </div>
                            <br/>
                        </section>
                        <section class="footer-bottom row border-top-white">
                            <div class="col-sm-6">
                                <p class="text-white-50"> Made with {"<3"} <br/> by Andreas Schranz and Simon Kunz</p>
                            </div>
                            <div class="col-sm-6 text-right">
                                <p class="text-sm-right text-white-50">
                                    Copyright &copy 2019 <br/>
                                    <a href="#" target="_blank"
                                       class="text-white-50">OnleinShop</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        );
    }

}

const Products = [
    {
        name: "Polizei",
        desc: "Polzeiauto",
        price: "99000",
        img: "polizei-ente.jpg"
    },
    {
        name: "BMW x86",
        desc: "Toller BMW",
        price: "87000",
        img: "clio3-5bc1cbe3a1e87e82c1f18a9399ed591c.jpg"
    },
    {
        name: "Shuttle",
        desc: "Shuttle transporter",
        price: "879000",
        img: "Schwertransport-Shuttle-1200x800-09ae24829d1a2594.jpg"
    }
];
export default App;
