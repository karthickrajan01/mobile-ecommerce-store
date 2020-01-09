import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Button } from './Button';
import { Link } from 'react-router-dom';


export default class Model extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modelOpen, closeModel } = value;
                    const { img, price, title } = value.modelProduct;

                    if (!modelOpen) {
                        return null;
                    } else {
                        return (<ModelContainer>
                            <div className="container">
                                <div className="row">
                                    <div
                                        className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                                        id="model"
                                    >
                                        <h5>Item added to Cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: <span>$ </span>{price}</h5>
                                        <Link to="/">
                                            <Button onClick={() => closeModel()}>continue shopping</Button>
                                        </Link>
                                        <Link to="/cart">
                                            <Button cart onClick={() => closeModel()}>got to cart</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModelContainer>)
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModelContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items:center;
    justify-content: center;
    #model {
        background: var(--mainWhite);
    }
`;
