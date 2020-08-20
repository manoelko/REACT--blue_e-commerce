import React, { Component } from 'react';
import {storeColors, detailColor} from './data';

const ProductContext = React.createContext();
// has Provider and Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailColor: {},
        cart: [],
        modalOpen: false,
        modalProduct: detailColor,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };

    /** Solution for depatching the data from the app: */
    componentDidMount() {
        this.setColors();
    };
    setColors = () => {
        let tempProducts = [];
        storeColors.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        });
    };
    /** End of solution */

    getItem = (id) => {
        const color = this.state.products.find(item => item.id === id);
        return color;
    }

    handleDetail = (id) => {
        const color = this.getItem(id);
        this.setState(() => {
            return {detailColor: color}
        })
    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        }, this.addTotals);
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedColor = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedColor);
        const color = tempCart[index];
        color.count++;
        color.total = color.count * color.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {this.addTotals();})
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedColor = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedColor);
        const color = tempCart[index];

        if(color.count === 0) {
            this.removeItem(id);
        } else {
            color.count--;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {this.addTotals();})
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                product: [...tempProducts],
            }
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: []};
        }, () => {
            this.setColors();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.price * item.count));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                { this.props.children }
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };