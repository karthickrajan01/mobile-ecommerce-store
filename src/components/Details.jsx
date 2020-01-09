import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, img, title, price, company, info, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* Product Info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="Product" />
                                </div>
                                {/* Product Text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some info about the Product
                                    </p>
                                    <p className="text-muted lead">{info}</p>

                                    {/* Buttons */}
                                    <Link to="/">
                                        <Button>back to products</Button>
                                    </Link>
                                    <Button cart disabled={inCart ? true : false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModel(id);
                                    }}>
                                        {inCart ? "in cart" : "add to cart"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );

                }}
            </ProductConsumer>
        )
    }
}
