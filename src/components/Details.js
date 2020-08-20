import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                { (value) => {
                    const {id, title, hex, inCart} = value.detailColor;
                    return (
                        <div className="container py-5">
                            {/** Title */}
                                <div className="row rounded" style={{background: `${hex}`}}>
                                    <div className="col-10 mx-auto text-center my-5">
                                        <h1 className='text-white'>{title}</h1>
                                    </div>
                                </div>
                            {/** end of title */}

                            {/** Color info */}
                            {/** end of info */}

                            {/** Color text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Color: {title}</h2>
                                    <h3 className="text-uppercase mt-3 mb-2">made by: <strong>Manoel Blue</strong></h3>
                                    <h3> price: <strong>$10</strong></h3>
                                </div>
                            {/** end of text */}

                            {/** Buttons: */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart ? 'InCart' : 'Add to cart'}
                                    </ButtonContainer>
                                </div>
                            {/**  */}

                            {/**  */}
                        </div>
                    )
                } }
            </ProductConsumer>
        )
    }
}
