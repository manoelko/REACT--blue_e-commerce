import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    render() {
        const {id, title, hex, inCart} = this.props.product;
        return (
            <ColorWrapper className="col-9 col-md-6 col-lg-3 my-3">
                <div className="card" style={{background: `${hex}`}}>
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5 c-pointer" onClick={() => {value.handleDetail(id); value.openModal(id)}}>
                                <p className="text-light">{title}</p>
                                <button
                                    className="card-btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    { inCart ? (
                                        <p className="text-capitalize mb-0" disabled>
                                            in cart
                                        </p>
                                    ) : (
                                        <i className="fas fa-cart-plus" />
                                    )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                </div>
                {/* Card Footer */}
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        10
                    </h5>
                </div>
            </ColorWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        hex: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}

const ColorWrapper = styled.div`
    .card {
        border-color: transparent;
        transition:  all 0.5s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent:
        transition: all 0.5s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid var(--white);
            box-shadow: 0px 0px 15px 5px var(--white);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-btn {
        position: absolute;
        bottom:0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--white);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 0.25s linear;
    }
    .img-container:hover .card-btn {
        transform: translate(0,0);
    }
    .card-btn:hover {
        color: var(--darkBlue);
        cursor: pointer;
    }
`